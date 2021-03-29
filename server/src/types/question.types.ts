import { Document} from 'mongoose';

/**
 * Interface for question options 
 */
export interface IOption{
    answer:string,
}

export interface IOptionObject extends IOption{
    _id?:string;
    _v?:string;
}

/**
 * Interface for a question document.
 */
export interface IQuestion{
    question:string,
    options:Array<IOption>,
    answer:string
}

export interface IQuestionObject extends IQuestion{
    _id?:string;
    _v?:string;
}

export interface IOptionDocument extends IOption, Document{};
export interface IQuestionDocument extends IQuestion, Document{};
