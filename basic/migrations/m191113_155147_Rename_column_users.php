<?php

use yii\db\Migration;
use yii\db\Schema;

/**
 * Class m191113_155147_Rename_column_users
 */
class m191113_155147_Rename_column_users extends Migration
{
    /**
     * изменяем наименования столбца в таблице users
     */
    public function safeUp()
    {
        $this->renameColumn("users", "id", "userId");
    }

    
    public function safeDown()
    {
        $this->renameColumn("users", "userId", "id");
    }
}
