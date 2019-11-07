export default class Validator {
    constructor(fields) {
        this.patterns = {
            name: /^[a-zа-яё]+$/i,
            phone: /^\+7\(\d{3}\)\d{3}-\d{4}$/,
            email: /^[\w._-]+@\w+\.[a-z]{2,4}$/i
        };
        this.errors = {
            name: 'Имя должно содержать только буквы',
            phone: 'Введите номер телефона в формате +7(000)000-0000',
            email: 'E-mail должен выглядеть как mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru'
        };
        this.fields = fields;
        this.valid = false;
        this.errorsLog = {};
        this._validateForm(this.fields);
    }

    _validateForm(fields) {
        for (let field in fields) {
            this._validate(field, fields[field]);
        }
    }

    _validate(key, value) {
        if (this.patterns[key]) {
            if (this.patterns[key].test(value)) {
                this.valid = true;
            } else {
                this.errorsLog = {
                    ...this.errorsLog,
                    [key]: this.errors[key]
                }
            }
        }
    }
}