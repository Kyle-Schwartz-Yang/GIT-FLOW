
// Необходимо создать функции shortProposal сокращения текста ...
// $ featured/create-fnc-short

const sentence = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, minus.';

function shortProposal(str, length) {
  if (str.length > length) {
    return str = str.slice(0, length) + '...';
  }
  return str;
}

console.log(shortProposal(sentence, 15));


// $ featured/add-fnc-welcome

function showMessage(message) {
  return message;
}
console.log(showMessage('welcome'));

