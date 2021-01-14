export interface Question {
  q_id?: number;
  question: string;
  asked_by: string;
  created_at: string;
}
export interface QuestionResponse {
  questions_list: Question[];
}
