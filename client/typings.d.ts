export interface IChoices {
  option: string;
  personality: string;
}

export interface IQuizData {
  question: string;
  choices: IChoices[];
}

export interface IAnswers {
  q: string;
  a: string;
}
