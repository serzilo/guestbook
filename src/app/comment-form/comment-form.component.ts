import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MAX_MESSAGE_LENGTH } from '../constants/form.constants';
import { FormHelper } from '../utils/form.helper';

@Component({
    selector: 'app-comment-form',
    templateUrl: './comment-form.component.html',
    styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent extends FormHelper {
    @Output() commentAdded = new EventEmitter();

    form: FormGroup;

    constructor(_formBuilder: FormBuilder) {
        super();

        this.setMessageLengthInfo(0);

        this.form = _formBuilder.group({
            'name':    ['', Validators.required],
            'phone':   [''],
            'message': ['', [Validators.required, Validators.maxLength(MAX_MESSAGE_LENGTH)]]
        });
    }

    onSubmit() {
        const date = +(new Date());
        const id = `comm_${+date}`;

        this.form.value.id = id;
        this.form.value.date = date;

        this.commentAdded.emit(this.form.value);

        this.form.reset();
    }
}
