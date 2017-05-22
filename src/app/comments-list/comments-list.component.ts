import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MAX_MESSAGE_LENGTH } from '../constants/form.constants';
import { FormHelper } from '../utils/form.helper';
import { Comment } from '../models/comment';

@Component({
    selector: 'app-comments-list',
    templateUrl: './comments-list.component.html',
    styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent extends FormHelper {
    @Input() comments: Array<Comment>;
    @Output() commentDeleted = new EventEmitter();
    @Output() commentUpdated = new EventEmitter();

    form: FormGroup;
    edit: any = null;

    constructor(_formBuilder: FormBuilder) {
        super();

        this.form = _formBuilder.group({
            'message': ['', [Validators.required, Validators.maxLength(MAX_MESSAGE_LENGTH)]]
        });
    }

    deleteComment(id: string) {
        this.commentDeleted.emit(id);
    }

    editComment(id: string) {
        this.edit = id;
        this.form.reset();

        let editCommentMessage = '';

        this.comments.forEach((item: Comment) => {
            if (item.id === id) {
                editCommentMessage = item.message;
            }
        });

        this.form.controls['message'].setValue(editCommentMessage);

        this.setMessageLengthInfo(this.form.value.message.length);
    }

    saveComment(id: string) {
        let updatedComment: Comment;

        this.comments.forEach((item: Comment) => {
            if (item.id === id) {
                updatedComment = {...item};
            }
        });

        updatedComment.message = this.form.value.message;

        this.commentUpdated.emit(updatedComment);
        this.edit = null;
    }

    cancelEditComment() {
        this.edit = null;
    }
}
