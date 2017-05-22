import { Pipe, PipeTransform } from '@angular/core';
import { Comment } from '../models/comment';

@Pipe({
    name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {

    transform(value: Array<Comment>, args?: any): any {
        value.sort((a: Comment, b: Comment) => {
            if (a.date > b.date) {
                return -1;
            } else if (a.date < b.date) {
                return 1;
            } else {
                return 0;
            }
        });

        return value;
    }
}
