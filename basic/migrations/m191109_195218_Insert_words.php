<?php

use yii\db\Migration;

/**
 * Class m191109_195218_Insert_words
 */
class m191109_195218_Insert_words extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->batchInsert( 'words', [
            'eng', 'rus', 'transcript'
        ],[
            ['aunt', 'тётя', '[ænt]'],
            ['bachelor', 'холостяк', '[ˈbæʧələr]'],
            ['bride', 'невеста', '[braɪd]'],
            ['brother', 'брат', '[ˈbrʌðər]'],
            ['brotherhood', 'братство', '[ˈbrʌðərˌhʊd]'],
            ['child', 'ребёнок', '[ʧaɪld]'],
            ['connection', 'родство', '[kəˈnɛkʃən]'],
            ['cousin', 'двоюродный брат, сестра', '[ˈkʌzən]'],
            ['dad', 'папа', '[dæd]'],
            ['daughter', 'дочь', '[ˈdɔtər]'],
            ['descendant', 'потомок', '[dɪˈsɛndənt]'],
            ['engaged', 'помолвленный', '[ɛnˈgeɪʤd]'],
            ['engagement', 'обручение', '[ɛnˈgeɪʤmənt]'],
            ['ex-husband', 'бывший муж', '[ɛks ˈhʌzbənd]'],
            ['ex-wife', 'бывшая жена', '[ɛks-waɪf]'],
            ['family tree', 'генеалогическое древо', '[ˈfæməli tri]'],
            ['father', 'отец', '[ˈfɑðər]'],
            ['female', 'женщина', '[ˈfiˌmeɪl]'],
            ['fiancee', 'невеста', '[fiˈænsi]'],
            ['first-born', 'первенец', '[fɜrst-bɔrn]'],
            ['apple', 'яблоко', '[ˈæpl]'],
            ['bacon', 'бекон', '[ˈbeɪkən]'],
            ['baguette', 'багет', '[ˌbæˈgɛt]'],
            ['baked', 'печеный', '[beɪkt]'],
            ['banana', 'банан', '[bəˈnænə]'],
            ['barbecue', 'барбекю', '[ˈbɑrbɪˌkju]'],
            ['bean', 'фасоль', '[bin]'],
            ['biscuit', 'печенье', '[ˈbɪskɪt]'],
            ['bite', 'кусать', '[baɪt]'],
            ['bitter', 'горький', '[ˈbɪtər]'],
            ['bland', 'пресный', '[blænd]'],
            ['boil', 'кипеть', '[bɔɪl]'],
            ['boiled eggs', 'вареные яйца', '[bɔɪld ɛgz]'],
            ['cabbage', 'капуста', '[ˈkæbəʤ]'],
            ['cake', 'торт', '[keɪk]'],
            ['candy', 'конфета', '[ˈkændi]'],
            ['carrot', 'морковь', '[ˈkærət]'],
            ['cereal', 'мюсли', '[ˈsɪriəl]'],
            ['chew', 'жевать', '[ʧu]'],
            ['chocolate', 'шоколад', '[ˈtʃɑːklət]'],
            ['alcoholic drink', 'алкогольный напиток', '[ˌælkəˈhɑlɪk drɪŋk]'],
            ['americano', 'американо', '[əˌmɛrɪˈkɑnoʊ]'],
            ['aperitif', 'аперитив', '[əˌpɛrəˈtif]'],
            ['apple cider', 'яблочный сидр', '[ˈæpəl ˈsaɪdər]'],
            ['banana smoothie', 'банановый смузи', '[bəˈnænə smoothie]'],
            ['beverage', 'напиток', '[ˈbɛvərɪʤ]'],
            ['black coffee', 'черный кофе', '[blæk ˈkɑfi]'],
            ['black tea', 'чёрный чай', '[blæk ti]'],
            ['blueberry juice', 'черничный сок', '[ˈbluˌbɛri ʤus]'],
            ['bottled drinks', 'бутилированные напитки', '[ˈbɑtəld drɪŋks]'],
            ['bottled water', 'бутилированная вода', '[ˈbɑtəld ˈwɔtər]'],
            ['cappuccino', 'капучино', '[ˌkæˌpuˈʧinoʊ]'],
            ['chamomile tea', 'ромашковый чай', '[kˈæməmaɪːl tˈiː]'],
            ['champagne', 'шампанское', '[ʃæmˈpeɪn]'],
            ['cherry syrup', 'вишневый сироп', '[ˈʧɛri ˈsɜrəp]'],
            ['chocolate cappuccino', 'шоколадный капучино', '[ˈʧɔklət ˌkæˌpuˈʧinoʊ]'],
            ['cider', 'сидр', '[ˈsaɪdər]'],
            ['cocktail', 'коктейль', '[ˈkɑkˌteɪl]'],
            ['cocoa', 'какао', '[ˈkoʊkoʊ]'],
            ['coffee', 'кофе', '[ˈkɑfi]']
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->truncateTable('words');
    }
}
