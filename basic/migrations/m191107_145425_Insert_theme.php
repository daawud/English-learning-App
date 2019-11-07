<?php

use yii\db\Migration;

/**
 * Class m191107_145425_Insert_theme
 */
class m191107_145425_Insert_theme extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->batchInsert( 'theme', [
            'name'
        ], [
            ['Семья'],
            ['Дом'],
            ['Еда'],
            ['Напитки'],
            ['Туризм'],
            ['Образование'],
            ['Спорт'],
            ['Природа'],
            ['Профессии']
           
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->truncateTable('theme');
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m191107_145425_Insert_theme cannot be reverted.\n";

        return false;
    }
    */
}
