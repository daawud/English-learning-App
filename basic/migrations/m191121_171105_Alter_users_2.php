<?php

use yii\db\Migration;

/**
 * Class m191121_171105_Alter_users_2
 */
class m191121_171105_Alter_users_2 extends Migration
{
    /**
     * изменено свойство birth_date, добавлена графа imgUrl - путь к аватарке
     */
    public function safeUp()
    {
        $this->alterColumn('users', 'birth_date', $this->date());

        $this->addColumn('users', 'imgUrl', $this->string(255));
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropColumn('users', 'imgUrl');

        $this->alterColumn('users', 'birth_date', $this->string(45));

    }
}
