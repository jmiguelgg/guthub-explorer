export interface ITopic {
  name: string;
  stargazerCount: number;
  relatedTopics: ITopic[];
};

export interface TopicResponse {
  topic: ITopic | null;
}

export interface TopicRequest {
  name: string;
}