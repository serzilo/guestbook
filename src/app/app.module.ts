import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { CommentsListComponent } from './comments-list/comments-list.component';

import { CommentsService } from './services/comments.service';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { SortByDatePipe } from './pipes/sort-by-date.pipe';

@NgModule({
    declarations: [
        AppComponent,
        CommentFormComponent,
        CommentsListComponent,
        FormatDatePipe,
        SortByDatePipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    providers: [
        CommentsService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
