export interface Message {
  id?: number;
  text: string;
  owner: string;
  created_at: string;
  c_id: number;
}
export interface MessageResponse {
  messages_list: Message[];
}
