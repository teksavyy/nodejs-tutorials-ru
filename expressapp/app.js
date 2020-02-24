// // подключение модуля Express
// const express = require('express');
// // создаем объект приложения
// const app = express();
// // определяем обработчик для маршрута '/'
// app.get('/', function(req, res) {
//   // отправляем ответ
//   res.send('<h1>Home Page</h1>');
// });
// app.get('/about', function(req, res) {
//   // отправляем ответ
//   res.send('<h1>About Page</h1>');
// });
// app.get('/contacts', function(req, res) {
//   // отправляем ответ
//   res.send('<h1>Contacts Page</h1>');
// });

// // начинаем прослушивать подключение на порту 3000
// app.listen(3000, () => {
//   console.log(`Server started on 3000 🔥`);
// });

// const express = require('express');

// const app = express();

// app.use(function(req, res, next) {
//   console.log('Middleware 1');
//   next();
// });

// app.use(function(req, res, next) {
//   console.log('Middleware 2');
//   next();
// });

// app.get('/', function(req, res) {
//   console.log('Route /');
//   res.send('Hello');
// });
// app.listen(3000, () => {
//   console.log(`Server started on 3000 🔥`);
// });

// const express = require('express');
// const app = express();

// app.use(function(request, response) {
//   response.send(`<!DOCTYPE html>
//   <html>
//   <head>
//       <title>Главная</title>
//       <meta charset="utf-8" />
//   </head>
//   <body>
//       <h1>Главная страница</h1>
//       <h3>Привет, Express</h3>
//   </body>
//   <html>`);
// });

// app.listen(3000, () => {
//   console.log(`Server started on 3000 🔥`);
// });

// const express = require('express');
// const app = express();

// app.use(function(req, res) {
//   res.sendFile(__dirname + '/index.html');
// });

// app.listen(3000, () => {
//   console.log(`Server started on 3000 🔥`);
// });

// TODO: Static Files
// const express = require('express');

// const app = express();

// app.use(express.static(__dirname + '/public'));

// app.use('/', function(req, res) {
//   res.send('<h1>Home Page</h1>');
// });

// app.listen(3000, () => {
//   console.log(`Server started on 3000 🔥`);
// });

// Дополнительно изменяем путь к каталогу статических файлов:
// const express = require('express');

// const app = express();

// app.use('/static', express.static(__dirname + '/public'));

// app.use('/', function(req, res) {
//   res.send('<h1>Home Page</h1>');
// });

// app.listen(3000, () => {
//   console.log(`Server started on 3000 🔥`);
// });

/* 
Теперь чтобы обратиться к файлу about.html, необходимо отправить запрос http://localhost:3000/static/about.html
*/

// TODO: Маршрутизация
// const express = require('express');
// const app = express();

// // обработка запроса по адресу /about
// app.get('/about', function(request, response) {
//   response.send('<h1>О сайте</h1>');
// });

// // обработка запроса по адресу /contact
// app.use('/contact', function(request, response) {
//   response.send('<h1>Контакты</h1>');
// });

// // обработка запроса к корню веб-сайта
// app.get('/', function(request, response) {
//   response.send('<h1>Главная страница</h1>');
// });
// app.listen(3000);

// TODO: Переадресация
// const express = require('express');
// const app = express();

// app.use('/index', function(req, res) {
//   res.redirect('https://github.com/teksavyy/nodejs-tutorials-ru');
// });

// app.listen(3000, () => {
//   console.log(`Server started on 3000 🔥`);
// });

// const express = require('express');
// const app = express();

// app.use('/home', function(req, res) {
//   res.redirect('about');
// });

// app.use('/about', function(req, res) {
//   res.send('<h1>About</h1>');
// });

// app.listen(3000, () => {
//   console.log(`Server started on 3000 🔥`);
// });
/*
По умолчанию при редиректе передается статусный код 302, который указывает, что ресурс временно доступен по новому адресу. Но мы можем указать статусный код 301, чтобы сделать переадресацию постоянной:
response.redirect(301, "/about");
*/

// TODO: Передача данных приложению. Параметры строки запроса (query)
// В express мы можем получить параметра строки запроса через свойство query объекта request, который передается в функцию обработки запроса. Например:

// const express = require('express');

// const app = express();

// app.get('/', function(req, res) {
//   res.send('<h1>Home Page</h1>>');
// });

// app.use('/about', function(req, res) {
//   let id = req.query.id;
//   let userName = req.query.name;
//   res.send(
//     '<h1>Информация</h1><p>id=' + id + '</p><p>name=' + userName + '</p>'
//   );
// });

// app.listen(3000, () => {
//   console.log(`Server started on 3000 🔥`);
// });

// Передача массивов
// Подобным образом мы можем передавать массивы данных:
// const express = require('express');

// const app = express();

// app.get('/', (req, res) => {
//   res.send('<h1>Home Page</h1>');
// });

// app.use('/about', (req, res) => {
//   console.log(req.query);
//   let names = req.query.name;
//   let resText = '<ul>';
//   for (let i = 0; i < names.length; i++) {
//     resText += '<li>' + names[i] + '</li>';
//   }
//   resText += '</ul>';
//   res.send(resText);
// });

// app.listen(3000, () => {
//   console.log(`Server started on 3000 🔥`);
// });

// Передача сложных объектов
// const express = require('express');

// const app = express();

// app.use('/about', (req, res) => {
//   console.log(req.query);
//   let id = req.query.user.id;
//   let name = req.query.user.name;
//   res.send('<h3>id:' + id + '<br>name:' + name + '</h3>');
// });

// app.listen(3000, () => {
//   console.log(`Server started on 3000 🔥`);
// });
// При передаче в строке запроса свойства объекта помещаются в квадратные скобки: user[id].

// TODO: POST-запросы и отправка форм
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/register', urlencodedParser, function(req, res) {
  res.sendFile(__dirname + '/register.html');
});

app.post('/register', urlencodedParser, function(req, res) {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);
  res.send(`${req.body.userName} - ${req.body.userAge}`);
});

app.get('/', function(req, res) {
  res.send('Главная страница');
});

app.listen(3000, () => {
  console.log(`Server started on 3000 🔥`);
});
