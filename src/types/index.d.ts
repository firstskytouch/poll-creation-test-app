export interface User {
  id: string;
  avatar: string;
  name: string;
}

export interface Message {
  user: string;
  message: string | PollMessage;
}

export interface PollMessage {
  options: string[];
  question: string;
  ability: boolean;
  voting: boolean;
}
