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
        ],[
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
}
