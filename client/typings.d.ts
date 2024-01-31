export interface IChoices {
  option: string;
  personality: string;
}

export interface IQuizData {
  _id: string;
  question: string;
  choices: IChoices[];
}

export interface IAnswers {
  _id?: string;
  question?: string;
  answer: string;
  personality: string;
}
