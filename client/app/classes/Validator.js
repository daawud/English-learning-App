/**
 * Анонимная функция валидации поля
 */
const privates = {
    validate({key, value}) {
        if (this.patterns[key]) { // если такого поля в паттернах нет то его проверка не производится
            if (this.patterns[key].test(value)) { // проверяем по регулярному выражению
                this.isValid = true;
            } else {
                this.error = this.errors[key];
            }
        }
    }
};

/**
 * Данный класс предназначен для валидации форм и он работает для любых форм при условии, что значения полей формы
 * отправвлены ввиде объекта {"название поля: значение поля"} = > { email: test@mail.com}
 */
export default class Validator {
    constructor() {
        this.patterns = {
            name: /^[0-9a-zA-Zа-яА-ЯёЁ]+$/i,
            email: /^[0-9a-zA-Z-\.]+\@[0-9a-zA-Z-]{2,}\.[a-zA-Z]{2,}$/i,
            password: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z0-9!@#$%^&*]{6,}/i
        };
        this.errors = {
            name: 'Имя должно содержать только буквы и цифры',
            email: 'Введен некорректный E-mail',
            password: 'Ваш пароль недостаточно надежен:\n минимум одна цифра, одна заглавная и одна строчная буквы, длина пароля не менее 6, но не более 50 символов',
        };
        this.isValid = false;
        this.error = '';
    }

    /**
     * Метод запроса валидации
     * @param field {Object} - объект с данными поля
     */
    validateForm({key, value}) {

        privates.validate.call(this, {key, value});
    }
}