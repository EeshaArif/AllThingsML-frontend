export interface Answer {
  a_id?: number;
  q_id: number;
  answer: string;
  answered_by: string;
  created_at: string;
}
export interface AnswerResponse {
  answers_list: Answer[];
}
