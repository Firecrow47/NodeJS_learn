const e = require('express');
const fs = require('fs');
const path = require('path');
// console.log('start');
//fs.mkdirSync(path.resolve(__dirname, 'dir', 'dir2', 'dir3'), {recursive: true})
// fs.mkdir(path.resolve(__dirname, 'dir'), (err) =>{
//  if (err) {
//     console.log(err);
//     return;
//  }
//  console.log('папка создана');
// })
// console.log('end');

// fs.rmdir(path.resolve(__dirname, 'dir'), (err)=>{
//     if(err) {
//         throw err;
//     }
// });

// fs.writeFile(path.resolve(__dirname, 'test.txt'),'5 text 213 text' ,(err)=>{
//     if(err) {
//         throw err;
//     }
//     fs.appendFile(path.resolve(__dirname, 'test.txt'),' new text ssss' ,(err)=>{
//         if(err) {
//             throw err;
//         }
//     })
// })
//-------------------------------------------------------------------------------

const writeFileAsync = async (path, data) => {
    return new Promise ((resolve, reject) => {
        fs.writeFile(path, data, (err)=> {
            if (err) {
                return reject(err.message);
            }
            resolve()
        })
    })
}

const appendFileAsync = async (path, data) => {
    return new Promise ((resolve, reject) => {
        fs.appendFile(path, data, (err)=> {
            if (err) {
                return reject(err.message);
            }
            resolve()
        })
    })
}

const readFileAsync = async (path) => {
    return new Promise ((resolve, reject) => {
        fs.readFile(path, {encoding: 'utf-8'}, (err, data)=> {
            if (err) {
                return reject(err.message);
            }
            resolve(data)
        })
    })
}

const removeFileAsync = async (path) => {
    return new Promise ((resolve, reject) => {
        fs.rm(path, (err)=> {
            if (err) {
                return reject(err.message);
            }
            resolve()
        })
    })
}

// writeFileAsync(path.resolve(__dirname,'text.txt'), 'First data')
//     .then(()=> appendFileAsync(path.resolve(__dirname, 'text.txt'),' second data'))
//     .then(()=> appendFileAsync(path.resolve(__dirname, 'text.txt'),' third data'))
//     .then(()=> readFileAsync(path.resolve(__dirname, 'text.txt')))
//     .then(data => console.log(data))
//     .catch(err=>console.log(err))

// removeFileAsync(path.resolve(__dirname, 'text.txt'))
//     .then(()=> console.log('file was remove'))
//____________________________________________________________________________________________
// Через переменную окружения передать строку, записать ее в файл
// прочитать файл, посчитать кол-во слов в файле и записать
// их в новый файл count.txt, затем удалить первый файл

// const dotenv = require('dotenv');
// dotenv.config();

// const text = process.env.TEXT || '';

// writeFileAsync(path.resolve(__dirname, 'text.txt'), text)
//     .then(()=>readFileAsync(path.resolve(__dirname, 'text.txt')))
//     .then(data=> data.split(' ').length)
//     .then(count => writeFileAsync(path.resolve(__dirname, 'count.txt'), `Кол-во слов ${count}`))
//     .then(()=>removeFileAsync(path.resolve(__dirname, 'text.txt')))

// __________________________________________________________________________________________________