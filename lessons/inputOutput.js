const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

// rl.question('Напиши что нибудь ', (answer) => {
  
//   console.log(`Пользовательский ввод: ${answer}`);
//   console.log(answer.split(' ')[1]);

//   rl.close();
// });





const question = (name, rl) => () => new Promise(resolve => {
  rl.question(`Введите ${name}: `, resolve)
})

const answers = {
  login:    '',
  phone:    '',
  password: ''
}

const setAnswer = name => answer => {
  answers[name] = answer
}

const askLogin    = question('login', rl)
const askPhone    = question('phone', rl)
const askPassword = question('password', rl)

askLogin()
.then(setAnswer('login'))
.then(askPhone)
.then(setAnswer('phone'))
.then(askPassword)
.then(setAnswer('password'))
.then(() => {

  console.log(answers);

  rl.close()
})