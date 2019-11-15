<?php
use yii\helpers\Html;
use yii\widgets\LinkPager;
?>
<h1>Countries</h1>
<ul>
    <?php foreach ($users as $user): ?>
        <li>
            <?= Html::encode("{$user->id} ({$user->Name})") ?>:
        </li>
    <?php endforeach; ?>
</ul>
