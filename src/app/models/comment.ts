export class Comment {
    constructor(
        public id:      string,
        public date:    number,
        public name:    string,
        public message: string,
        public phone?:  number
    ){}
}