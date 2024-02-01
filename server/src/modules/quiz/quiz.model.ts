import { getModelForClass, prop, pre } from "@typegoose/typegoose";

// the quiz interface
export class Quiz {
  @prop()
  public _id: number;

  @prop({ required: true })
  public question: string;

  @prop({ required: true })
  public answer: string;

  @prop({ required: true })
  public personality: string;
}

// export as a model
export const QuizModel = getModelForClass(Quiz, {
  schemaOptions: {
    timestamps: true,
  },
});
