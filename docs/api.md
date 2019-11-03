# English App API v1
## Общее положение
1) В каждом ответе от BackEnd сервера будет содержаться следующая информация:
```json
    {
        "status": "ok"/"error",
        "error_desc": "",
    }
```
2) Поле `error_desk` будет заполнятся только в случае какой-либо ошибки.
3) Согласование HTTP-заголовков:
`GET` - получение набора данных/единичной записи
`POST` - создание(вставка) новой записи
`PATCH` - частичное изменение записи
`PUT` - полная замена записи
`DELETE` - удаление записи
4) Если была добавлена/изменена запись, то возвращается ее новое(теперь текущее) состояние. (Пример см. ниже)

### Users
1) Получение пользователя по ID

   ```GET /users```

   Результат:
```json
    {
        "status": "ok",
        "error_desc": "",
        "records": [
            {
                "id": "dc97639ae0215c03e336cbf189f290d9170e37d4",
                "name": "test_user",
                "email": "test@englishapp.org",
                "age": 45,
                "role": "user"
            },
            {
                "id": "fu5yr79ae0215c03e336cbf189f290d917h86k41",
                "name": "admin_user",
                "email": "admin@englishapp.org",
                "age": 31,
                "role": "admin"
            }
        ]
    }
```
2) Получение пользователя по ID

   ```GET /users/:id```

   Результат:
```json
    {
        "status": "ok",
        "error_desc": "",
        "id": "dc97639ae0215c03e336cbf189f290d9170e37d4",
        "name": "test_user",
        "email": "test@englishapp.org",
        "age": 45,
        "role": "user"/"admin"
    }
```
3) Создание пользователя

    ```POST /users```

```json
    {
        "name": "test_new_user",
        "email": "new_user@englishapp.org",
        "age": 25,
        "password": "5c03e336cbf189f290d"
    }
```
   Результат:

```json
    {
        "status": "ok",
        "error_desc": "",
        "id": "703ad3699206f07d8e1c18160cb970b39d30b381",
        "name": "test_new_user",
        "email": "new_user@englishapp.org",
        "age": 25,
        "role": "user"
    }
```
4) Изменение пользователя

    ```PATCH /users/:id```
```json
    {
        "age": 33,
        "password": "5c03e336cbf189f290d"
    }
```
   Результат:
```json
    {
        "status": "ok",
        "error_desc": "",
        "id": "703ad3699206f07d8e1c18160cb970b39d30b381",
        "name": "test_new_user",
        "email": "new_user@englishapp.org",
        "age": 33,
        "role": "user"
    }
```
5) Удаление пользователя

    ```DELETE /users/:id```

    Результат:
```json
    {
        "status": "ok",
        "error_desc": "",
        "id": "703ad3699206f07d8e1c18160cb970b39d30b381",
        "name": "test_new_user",
        "email": "new_user@englishapp.org",
        "age": 33,
        "role": "user"
    }
```
