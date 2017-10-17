<?php 

// Извлекаем данные из формы
$name = htmlspecialchars ($_POST['name']);
$email = htmlspecialchars ($_POST['mail']);
$tel = htmlspecialchars ($_POST['pfone']);
$message = htmlspecialchars ($_POST['message']);
$source = htmlspecialchars ($_POST['source']);
$content = htmlspecialchars ($_POST['content']);
$medium = htmlspecialchars ($_POST['medium']);
$campaign = htmlspecialchars ($_POST['campaign']);
$term = htmlspecialchars ($_POST['term']);

//*  Запись в тектовый файл */
$file = "contact.csv";
$contact = $source. ";" .$medium. ";" .$campaign. ";" .$content. ";" .$term. ";" .$email. ";" .$tel. ";" .$name. ";" . "\n";
file_put_contents($file, $contact, FILE_APPEND);


// Формируем заголовки письма
$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html;charset=utf-8 \r\n";
$headers .= "From: Виталий Сальников <salniv@yandex.ru>\r\n";
$headers .= "Reply-To: salniv@yandex.ru\r\n";

// Составляем текст письма админу
$message = "<p>Привет админ, новая заявка</p>
<p>Имя: $name</p>
<p>Тел: $tel</p>
<p>E-mail: $email</p>
<p>Сообщение: $message</p>
<p>----------</p>
<p>Источник: $source</p>
<p>Кампания: $campaign</p>
<p>Содержание: $content</p>
<p>Тип трафика: $medium</p>
<p>Ключевое слово: $term</p>";

// Отсылаем письмо админу
mail( "salniv@yandex.ru", "тема письма", $message, $headers );

// Отправляем пользователя на страницу "Спасибо"
header( "Location: thank.html");
?>