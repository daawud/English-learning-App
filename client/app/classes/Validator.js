/**
 * Данный класс предназначен для валидации форм и он работает для любых форм при условии, что значения полей формы
 * отправвлены ввиде объекта {"название поля: значение поля"} = > { name: 'Vasilii', email: test@mail.com}
 */
export default class Validator {
    constructor(fields) {
        this.patterns = { // сюда накидываем регулярки для всех видов полей
            name: /^[a-zа-яё]+$/i,
            phone: /^\+7\(\d{3}\)\d{3}-\d{4}$/,
            email: /^[\w._-]+@\w+\.[a-z]{2,4}$/i
        };
        this.errors = { // для каждого поля создаем тест ошибки
            name: 'Имя должно содержать только буквы',
            phone: 'Введите номер телефона в формате +7(000)000-0000',
            email: 'E-mail должен выглядеть как "mymail@mail.ru", или "my.mail@mail.ru", или "my-mail@mail.ru"'
        };

        this.fields = fields; // object ввиде { name: 'Vasilii', email: test@mail.com}
        this.validations = []; // записывает результат проверки полей ввиде true/false
        this.isValid = false; // возвращает конечный результат проверки всех полей ввиде true/false
        this.errorsLog = {}; // сюда аккумулируются все ошибки по каждомы полю ввиду {name: '....', email: '.....'}}

        this._validateForm(this.fields);
    }

    /**
     * Функция проверяет все поля посредством функции _validate()
     * @param fields (object) ввиде { name: 'Vasilii', email: test@mail.com}
     */
    _validateForm(fields) {
        for (let field in fields) {
            this._validate(field, fields[field]); // отправляем в метод валидации имя поля и его значение
        }

        this.isValid = !this.validations.includes('false'); // проверяем есть ли хотя бы один false
    }

    /**
     * Функция принимает название поля и его значение и через паттерны this.patterns
     * @param key (string) - название поля формы
     * @param value (string) - значение поля формы
     */
    _validate(key, value) {
        if (this.patterns[key]) { // если такого поля в паттернах нет то его проверка не производится
            if (this.patterns[key].test(value)) { // проверяем по регулярному выражению
                this.validations.push('true');
            } else {
                this.validations.push('false');

                // записывает лог ошибок ввиде объекта {name: '....', email: '.....'}} - далее этот лог обрабатывается
                // в необходимом компоненте
                this.errorsLog = {
                    ...this.errorsLog,
                    [key]: this.errors[key]
                }
            }
        }
    }
}