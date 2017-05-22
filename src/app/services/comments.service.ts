import { Injectable } from '@angular/core';
import { Comment } from '../models/comment';

@Injectable()
export class CommentsService {
    LOCALSTORAGE_NAMESPACE = 'gb_comments';

    constructor() { 
        console.log('comments service inited');
    }

    _get(): Array<Comment> {
            let data = localStorage.getItem(this.LOCALSTORAGE_NAMESPACE);

            return (data ? JSON.parse(data) : []);
    }

    _save(data: Array<Comment>) {
            localStorage.setItem(this.LOCALSTORAGE_NAMESPACE, JSON.stringify(data));
    }

    getComments() {
        return this._get();
    }

    addComment(comment: Comment): Array<Comment>  {
            console.log(`Service: add comment:`);
            console.log(comment);

            const data = this._get();
            data.push(comment);

            this._save(data);

            return data;
    }

    updateComment(comment: Comment) {
            console.log(`Service: update comment ${comment}`);

            let data = this._get();

            data = data.map((item: Comment) => {
                if (item.id === comment.id) {
                    item = {...comment};
                }

                return item;
            });

            this._save(data);

            return data;
    }

    deleteComment(id: String) {
            console.log(`Service: delete comment ${id}`);
            let data = this._get();

            data = data.filter((item: Comment) => {
                return item.id !== id;
            });

            this._save(data);

            return data;
    }

}
