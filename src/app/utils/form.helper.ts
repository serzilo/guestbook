import { MAX_MESSAGE_LENGTH } from '../constants/form.constants';

export class FormHelper {
    messageInputInformation: any;

    onKey(event: any) {
        this.setMessageLengthInfo(event.target.value.length);
    }

    setMessageLengthInfo(enteredSymbolsLength: number) {
        let message: string;
        const allowSymbolsLength = MAX_MESSAGE_LENGTH - enteredSymbolsLength;

        if (allowSymbolsLength > 0) {
            message = `Можно ввести символов: ${allowSymbolsLength}`;
        } else if (allowSymbolsLength < 0) {
            message = `Лимит символов превышен. Количество символов, которые нужно удалить: ${-1 * allowSymbolsLength}`;
        } else {
            message = 'Лимит символов достигнут';
        }

        this.messageInputInformation = message;
    }
}
