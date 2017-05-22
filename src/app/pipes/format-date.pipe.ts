import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

    transform(value: number, args?: any): any {
        const commentDate = new Date(value);
        const currentDate = new Date();
        const newCommentTimeLimit =  60 * 30 * 1000;
        const difference = Math.abs(+commentDate - +currentDate);
        let formattedDate: string;

        if (difference <= newCommentTimeLimit) {
            const minutesAgo = +(difference / (1000 * 60)).toFixed();

            formattedDate = (minutesAgo === 0 ? 'только что' : `${minutesAgo} мин. назад`);
        } else {
            const date     = commentDate.getDate();
            const month    = commentDate.getMonth();
            const year     = commentDate.getFullYear();

            const hours    = commentDate.getHours();
            const minutes  = commentDate.getMinutes();

            formattedDate = `${date}.${month < 10 ? 0 : ''}${month}.${year} ${hours}:${minutes < 10 ? 0 : ''}${minutes}`;
        }

        return formattedDate;
    }
}
