import { Component, OnInit } from '@angular/core';
import { CommentsService } from './services/comments.service';
import { Comment } from './models/comment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [CommentsService]
})
export class AppComponent implements OnInit {
    comments: Array<Comment> = [];

    constructor(private _commentsService: CommentsService) {}

    ngOnInit() {
        this.comments = this._commentsService.getComments();
    }

    handleCommentDeleted(id: string) {
        this.comments = this._commentsService.deleteComment(id);
    }

    handleCommentUpdated(comment: Comment) {
        this.comments = this._commentsService.updateComment(comment);
    }

    handleCommentAdded(comment: Comment) {
        this.comments = this._commentsService.addComment(comment);
    }
}
