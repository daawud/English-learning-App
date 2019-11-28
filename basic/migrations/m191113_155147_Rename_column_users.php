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
        $sql = "ALTER TABLE `users` CHANGE COLUMN `id` `userId` VARCHAR(36) NOT NULL;";
       
        $this->execute($sql);
    }

    
    public function safeDown()
    {
        $sql = "ALTER TABLE `users` CHANGE COLUMN `userId` `id` VARCHAR(36) NOT NULL;";

        $this->execute($sql);
    }
}
