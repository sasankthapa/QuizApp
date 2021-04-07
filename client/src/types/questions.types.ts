export interface questionType{
    _id:string,
    question:string;
    options:Array<string>;
    attempted?:boolean;
    correct?:boolean;
}
