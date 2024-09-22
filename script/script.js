
// Необходимо создать функции shortProposal сокращения текста ...
// $ featured/create-fn-short

const sentence = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, minus.';

function shortProposal(str, length) {
  if (str.length > length) {
    return str = str.slice(0, length) + '...';
  }
  return str;
}

console.log(shortProposal(sentence, 15));


// $ featured/create-fnc-welcome

function showMessage(message) {
  return message;
}
console.log(showMessage('WELCOME to GIT FLOW'));



//Создание массива!
const arr = [1, 2, 3];
console.log(arr[0]);



const obj = { name: 'Harry', surname: 'Simposin' };


console.log(obj.name);