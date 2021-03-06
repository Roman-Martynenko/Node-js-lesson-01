var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Это сайт по ноутбукам)' });
});

router.get('/samsung', function(req, res, next) {
  res.render('notebook', { title: 'Samsung NP350V5C',
                           picture: 'images/samsung.jpg',
                           text: 'Ноутбук Samsung NP350V5C-A07 – это мощный производительный компьютер для дома и офиса с новейшей операционной системой. Вместительный жесткий диск позволяет хранить все необходимые программы и документы, обеспечивая пользователю готовность к работе в любой момент. Эргономичный корпус ноутбука с широкоформатным 15-дюймовым монитором имеет полноразмерную клавиатуру с цифровым блоком. ' });
});

router.get('/msi', function(req, res, next) {
  res.render('notebook', { title: 'MSI GP73',
                           picture: 'images/msi.jpg',
                           text: 'MSI GP73 8RE-470RU Leopard с 17.3 дюймовым экраном, имеет максимальное разрешение 1920x1080. Ноутбук MSI GP73 8RE-470RU Leopard оснащен процессором Intel Core i7 8750H (Coffee Lake) 2.2 ГГц, 16 ГБ оперативной памяти и достаточно мощной видеокартой NVIDIA GeForce® GTX 1060. Результатом работы MSI стала продукция с высочайшей производительностью, проверенной надежностью, превосходными потребительскими качествами и выразительным стилем. Качество продукции MSI соответствует самым высоким стандартам. ' });
});

router.get('/dell', function(req, res, next) {
  res.render('notebook', { title: 'ALIENWARE 17',
                           picture: 'images/dell.jpeg',
                           text: 'Самый мощный 17-дюймовый игровой ноутбук Alienware предназначен для использования приложений виртуальной реальности. Он оборудован графическим адаптером серии NVIDIA GeForce® GTX 10 и программным обеспечением, реализующим технологию отслеживания движений глаз от компании Tobii, что позволяет углубиться в игру.' });
});

router.get('/asus', function(req, res, next) {
  res.render('notebook', { title: 'ASUS ROG GL703GE',
                           picture: 'images/asus.jpg',
                           text: 'У ноутбука ASUS ROG Strix GL703 есть все, чтобы сделать вас конкурентоспособными в любой игре, ведь в максимальной конфигурации он предлагает новейший процессор Intel Core 8-го поколения и быструю видеокарту NVIDIA GeForce GTX 10-й серии. За стабильную работу столь мощных компонентов отвечает пылеустойчивая система охлаждения, а подсветка Aura позволяет гибко персонализировать внешний вид устройства. Утолите свою жажду победы с новым геймерским ноутбуком ASUS!' });
});

router.get('/apple', function(req, res, next) {
  res.render('notebook', { title: 'Apple MacBook',
                           picture: 'images/apple.jpg',
                           text: 'MacBook Pro задает совершенно новые стандарты мощности и портативности ноутбуков. Процессоры высокой производительности, память большего объема, передовая графика, сверхбыстрые накопители и другие впечатляющие способности MacBook Pro помогут вам воплощать в жизнь любые творческие проекты - еще быстрее, чем раньше. ' });
});

module.exports = router;
