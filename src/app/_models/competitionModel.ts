export interface Competition {
  id?: number;
  name: string;
  descriptions: string;
  start_date: string;
  end_date: string;
  image: string;
  prize: string;
  host: string;
  link: string;
}
export interface CompetitionResponse {
  competitions_list: Competition[];
}
