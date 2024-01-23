export interface IChoices {
  option: string;
  personality: string;
}

export interface IQuizData {
  question: string;
  choices: IChoices[];
}

export interface IAnswers {
  question?: string;
  answer: string;
  personality: string;
}
