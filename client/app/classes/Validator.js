/**
 * Анонимная функция валидации поля
 * @type {{validate(*=): void}}
 */
const validateForm = {
    validate(field) {
        let [key] = Object.keys(field);
        let [value] = Object.values(field);
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
            name: /^[0-9a-zа-яё]/i,
            phone: /^\+7\(\d{3}\)\d{3}-\d{4}$/,
            email: /^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i,
            password: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z0-9!@#$%^&*]{6,50}/g
        };
        this.errors = {
            name: 'Имя должно содержать только буквы и цифры',
            phone: 'Введите номер телефона в формате +7(000)000-0000',
            email: 'Введен некорректный E-mail',
            password: 'Ваш пароль недостаточно надежен ' +
                '(Минимум одна цифра, одна заглавная и одна строчная буквы, ' +
                'длина пароля не менее 6 но не более 50 символов )',
        };
        this.isValid = false;
        this.error = '';
    }

    /**
     * Метод запроса валидации
     * @param field {Object} - объект с данными поля
     */
    validateForm(field) {
        validateForm.validate.call(this, field);
    }
}