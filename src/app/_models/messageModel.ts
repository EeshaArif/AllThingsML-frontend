export interface Message {
  id?: number;
  owner: string;
  text: string;
}
export interface MessageResponse {
  message_list: Message[];
}
