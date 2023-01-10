// let storage = window.localStorage;

// localStorage.user = {
//   name: 'Damir',
// };

// console.log('- localStorage -', storage);

// JSON.stringify превращает JS-объект в объект формата JSON
// storage.user = JSON.stringify({ name: "John" });
// console.log('- user -', storage.user, 'это JSON');

// Тут JSON снова сделали JS-объектом
// let user = JSON.parse(storage.user);

// и вывели данные из этого объекта
// console.log('- user.name -', user.name, '- это снова JS');



// storage.setItem('user_age', '32');


// console.log('- event -', event);
// console.log(event.key + ':' + event.newValue + " at " + event.url);

// storage.getItem('user_age');
// console.log('- storage -', storage);

// const alertMessage = (event) => {
//   console.log('- О, подъехало чё-то новенькое -');
//   console.log('- event.key -', event.key);
//   console.log('- event.key -', event.storageArea);
//   console.log('- event.key -', event.url);
// }
// window.addEventListener('storage', alertMessage);

// window.localStorage.setItem('test', '123')
// window.onstorage = (event) => {
//   console.log('- О, подъехало чё-то новенькое -');
//   console.log('- event.key -', event.key);
//   console.log('- event.key -', event.storageArea);
//   console.log('- event.key -', event.url);
// }

// let storageEvent = new Event('storage');
// window.dispatchEvent(storageEvent)


// storage.setItem('test', '123')
// storage.removeItem('test')
// window.dispatchEvent(new Event('storage'))
// storage.getItem('test')


// window.localStorage.setItem("item", 'val 1', { sameSite: "strict", secure: true });

// window.addEventListener('storage', () => {
//   // When local storage changes, dump the list to
//   // the console.
//   console.log(JSON.parse(window.localStorage.getItem('sampleList')));
// });

// window.addEventListener('storage', console.log)



// localStorage.auth = false;

// for (let key in localStorage) {
//   console.log('- localStorage[key] -', localStorage[key]);
// }
// выводятся методы и даже length

// console.log(localStorage.user);

// delete localStorage.user;

// for (let i = 0; i < storage.length; i++) {
//   let key = localStorage.key(i);
//   console.log(`${key}: ${localStorage.getItem(key)}`);
// }


// сохраняем ключи в массив
// let keys = Object.keys(localStorage);

// // перебираем ключи как обычный массив
// for (let key of keys) {
//   console.log(`${key}: ${localStorage.getItem(key)}`);
// }

// let storage = window.localStorage;

// storage.user = 'Damir';
// storage.auth = false;

// console.log('- localStorage -', storage);
// console.log(storage.user);
// delete storage.user;
