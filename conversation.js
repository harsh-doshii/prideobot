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
        text: '<strong>Yes</strong>, I do!',
        next: 4,
      },
      {
        text: '<strong>Nope</strong>, this is news.',
        next: 5,
      },
    ],
  },
  3: {
    text: 'But you probably knew that anyway.',
    options: [
      {
        text: '<strong>Yes</strong>, I did!',
        next: 4,
      },
      {
        text: '<strong>Nope</strong>, this is news.',
        next: 5,
      },
    ],
  },
  4: {
    text: 'Do you identify yourself as an ally?',
    options: [
      {
        text: '<strong>Yes</strong>, I sure do!',
        next: 4,
      },
      {
        text: '<strong>No</strong>, I dont know what an Ally is :(',
        next: 5,
      },
    ],
  },
  5: {
    text:
      'Alright, Queerious BITS is a safe space for every queer on campus out there!',
    next: 6,
  },
  6: {
    text: 'You should check it out on Instagram',
    options: [
      {
        text: 'Go to Instagram',
        url: 'https://www.instagram.com/queeriousbits/',
      },
    ],
  },
};
