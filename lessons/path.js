const path = require('path');
console.log('Склеить участки пути:',path.join(__dirname,'..', 'first','second', 'third'));
console.log('Получить абсолютный путь:',path.resolve('first','second', 'third'));

const fullPath = path.resolve('first','second', 'third.js');
console.log('Парсинг пути:', path.parse(fullPath));
console.log('Разделитель в ОС:', path.sep);
console.log('Проверка на абсолютный путь:', path.isAbsolute('first/second'));
console.log('Название файла:', path.basename(fullPath));
console.log('Расширение файла:', path.extname(fullPath));

// ---------------------------------------------------
const siteURL = 'http://localhost:8080/users?id=5123';

const url = new URL (siteURL);
console.log(url);