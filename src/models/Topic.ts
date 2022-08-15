export interface ITopic {
  name: String;
  stargazerCount: number;
  relatedTopics: ITopic[];
};