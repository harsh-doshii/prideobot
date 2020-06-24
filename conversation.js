/* The chat const defines the Peekobot conversation.
 *
 * It should be an object with numerical property names, and each property is an entry
 * in the conversation.
 *
 * A conversation entry should have:
 *  - A "text" property that is what the chatbot says at this point in the conversation
 *  - Either:
 *     - A "next" property, which defines the next chat entry by stating a numerical key
 *       of the chat object and is used when the chatbot needs to say several things
 *       without input from the user
 *    OR
 *     - An "options" property that defines the choices a user can take this is an
 *       array of option objects
 *
 * An options object should have:
 *  - a "text" property that is the label for the user's choice
 *  AND EITHER
 *  - a "next" property that defines the next chat entry by stating a numerical key of
 *    the chat object and is used when the user selects this option
 *  OR
 *  - a "url" property that defines a link for the user to be taken to
 *
 * A simple example chat object is:
 * const chat = {
 *     1: {
 *         text: 'Good morning sir',
 *         next: 2
 *     },
 *     2: {
 *         text: 'Would you like tea or coffee with your breakfast?',
 *         options: [
 *             {
 *                 text: 'Tea',
 *                 next: 3
 *             },
 *             {
 *                 text: 'Coffee',
 *                 next: 4
 *             }
 *         ]
 *     },
 *     3: {
 *         text: 'Splendid - a fine drink if I do say so myself.'
 *     },
 *     4: {
 *         text: 'As you wish, sir'
 *     }
 * }
 */
const chat = {
  0: {
    text: 'Goodbye, have a nice day! :)',
  },

  1: {
    text: 'Hi! Welcome! :)',
    options: [
      {
        text: 'Hello!',
        next: 2,
      },
    ],
  },
  2: {
    text:
      'Are you aware about the LGBTQ community and its presence on BITS Goa Campus- QueeriousBITS',
    options: [
      {
        text: '<strong>Yes</strong>, I know!',
        next: 4,
      },
      {
        text: '<strong>Nope</strong>, this is news.',
        next: 5,
      },
    ],
  },
  3: {
    text:
      'Thats Great! You may also see LGBT+, LGBT*, LGBTx, or LGBTQIA. I stands for intersex and A for asexual/agender.',
    next: 8,
  },
  4: {
    text: 'Do you know what LGBT stands for?',
    options: [
      {
        text: '<strong>Yes</strong>, I sure do!',
        next: 3,
      },
      {
        text: '<strong>No</strong>, I would really love to know',
        next: 7,
      },
    ],
  },
  5: {
    text:
      'Alright, Queerious BITS is a safe space for every queer on campus out there!',
    next: 4,
  },
  7: {
    text:
      'LGBTQ: The acronym for “lesbian, gay, bisexual, transgender and queer". Some people also use the Q to stand for "questioning," meaning people who are figuring out their sexual orientation or gender identity.',
    next: 8,
  },

  8: {
    text: 'Do you want know an amazing fact!?',
    options: [
      {
        text: 'Ya sure!',
        next: 9,
      },
      {
        text: 'Maybe next time :)',
        next: 0,
      },
    ],
  },
  9: {
    text:
      'Well there is no fixed number, but there are around 60 different gender identities!',
    options: [
      {
        text: 'Another fact?',
        next: 10,
      },
      {
        text: 'I want the whole list!',
        url:
          'https://abcnews.go.com/blogs/headlines/2014/02/heres-a-list-of-58-gender-options-for-facebook-users',
      },
      {
        text: 'Thanks! It was fun talking',
        next: 0,
      },
    ],
  },

  10: {
    text:
      'Between 1990 and 2014, the share of Indian respondents in a survey who believed “homosexuality is never justifiable" fell from 89% to 24%.',
    options: [
      {
        text: 'Another one?',
        next: 11,
      },
      {
        text: 'Thanks! It was fun talking',
        next: 0,
      },
    ],
  },
  11: {
    text:
      'Okay, lets bust a myth here. Myth: Lesbian, gay and bisexual people can be identified by certain mannerisms or physical characteristics. Fact: People who are lesbian, gay or bisexual come in as many different shapes, colors and sizes as do people who are heterosexual.',
    options: [
      {
        text: 'Thanks! It was fun talking',
        next: 0,
      },
    ],
  },
};
