export interface Community {
  c_id?: number;
  topic: string;
  created_at: string;
}
export interface CommunityResponse {
  communities_list: Community[];
}
