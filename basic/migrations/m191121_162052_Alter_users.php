<?php

use yii\db\Migration;

/**
 * Class m191121_162052_Alter_users
 */
class m191121_162052_Alter_users extends Migration
{
    /**
     * изменяем свойства полей first_name, birth_date, добавление поля reg_date
     */
    public function safeUp()
    {
        $this->alterColumn('users', 'first_name', $this->string(45)->notNull());

        $this->alterColumn('users', 'birth_date', $this->string(45));

        $this->addColumn('users', 'reg_date', $this->timestamp()->notNull()->defaultExpression('CURRENT_TIMESTAMP'));
    }

    /**
     * удаление поля reg_date
     */
    public function safeDown()
    {
        $this->dropColumn('users', 'reg_date');
    }
}
