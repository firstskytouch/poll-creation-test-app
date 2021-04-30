import { Message, User } from '../../types';

const users: User[] = [
  {
    id: 'dc9e1d6c-a8c4-11eb-bcbc-0242ac130002',
    avatar: 'https://www.pngjoy.com/pngm/64/1410294_thinking-person-man-think-png-png-download.png',
    name: 'Kelley Hodges',
  },
  {
    id: 'dc9e2032-a8c4-11eb-bcbc-0242ac130002',
    avatar:
      'https://www.pngkey.com/png/detail/986-9865653_thinking-woman-png-free-download-person-thinking-transparent.png',
    name: 'Jared Phillips',
  },
];

const messages: Message[] = [
  {
    user: 'dc9e1d6c-a8c4-11eb-bcbc-0242ac130002',
    message: 'Are you in???',
  },
  {
    user: 'dc9e2032-a8c4-11eb-bcbc-0242ac130002',
    message: "Nice! 12 ppl in total, Let's gather at the metro station!",
  },
  {
    user: 'dc9e2032-a8c4-11eb-bcbc-0242ac130002',
    message: {
      question: 'What is the greatest NBA team in the history?',
      options: ['Los ANgeles Lakers', 'Golden State Warriors', 'Chicago Bulls', 'Boston Celtics'],
      voting: false,
      ability: false,
    },
  },
];

export default {
  users,
  messages,
};
