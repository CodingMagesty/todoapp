import md5 from 'js-md5';

export const addToDo = (email, username, text) => (dipatch) => {
  let form = new FormData();
  form.append('username', username);
  form.append('email', email);
  form.append('text', text);

  //Fetching
  fetch('https://uxcandy.com/~shapoval/test-task-backend/create?developer=Gleb',
        {
          method: 'POST',
          crossDomain: true,
          body: form
        })
  .then(result => result.json())
}

export const changeToDo = (id, text, status) => (dispatch) => {
  let arr = [];
  (text) && arr.push(text);
  (status) && arr.push(status);
  arr.sort();
  let encodedArr = [];

  arr.forEach(item => {
    encodedArr.push(encodeURIComponent(item));
  })
  let signature = md5(encodedArr[0] === text ? encodeURIComponent('text') + '=' + encodedArr[0] +'&' +
                                    encodeURIComponent('status')+ '=' + encodedArr[1] + '&' +
                                    encodeURIComponent('token') + '=' + encodeURIComponent('beejee')
                                    : encodeURIComponent('status') + '=' + encodedArr[0] +'&' +
                                    encodeURIComponent('text')+ '=' + encodedArr[1] + '&' +
                                    encodeURIComponent('token') + '=' + encodeURIComponent('beejee'));

  let form = new FormData();
  (text) && form.append('text', text);
  (status) && form.append('status', status);
  form.append('signature', signature);
  form.append('token', 'beejee');

   //Fetching
   fetch(`https://uxcandy.com/~shapoval/test-task-backend/edit/${id}/?developer=Gleb`,
        {
          method: 'POST',
          crossDomain: true,
          body: form
        })
    .then(result => result.json())
    .then(json => console.log(json))
}
