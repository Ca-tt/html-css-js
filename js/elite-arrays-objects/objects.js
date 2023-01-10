// DYNAMIC KEYS
// let yourJS = {};
// let key = "understanding";

// yourJS[key] = true;
// yourJS[key + "level"] = 100500; // ты достоин лучшего =)
// console.log('- yourJS -', yourJS);


// DYNAMIC KEYS BASED ON USER INPUT
// let products = {};
// let userInput = false; // поменяй меня на false и смотри, чё будет

// let productTitle = userInput ? "aser" : "lenovo";

// // марку ноутбука берём из productTitle
// products[productTitle] = 5;

// if ("aser" in products) {
//   console.log('- обожаю ASER-ы -', products);
// }
// else {
//   console.log('- обожаю LENOVO -', products);
// }


// REVERSE DESTRUCTURING
// let user = {};
// [user.name, user.surname] = "Ilya Kantor".split(' ');


// DESTRUCTURING
// let div = {
//   text: "I'm Div!",
//   width: 100,
//   height: 200,
//   bg: '#fff'
// };

// let { text, width, height, bg } = div;
// console.log('- div data -', text, width, height, bg);


// KEYS MATTER
// let { height, width, text } = { title: "Menu", height: 200, width: 100 }
// console.log(text);


// ASSIGN VARIABLE
// let div = {
//   text: "I'm Div!",
//   width: 100,
//   height: 200,
//   bg: '#fff'
// };

// let { text: t, width: w, height: h, bg } = div;
// console.log('- div data -', t, w, h, bg);


// // SKIP VALUES
// let Mike = {
//   Jordan: true,
//   Jackson: false
// }

// let { Jordan } = Mike;
// console.log('- Jordan -', Jordan); // true или false?🤔


// // ...REST
// let options = {
//   title: "Menu",
//   height: 200,
//   width: 100
// };

// // title = это title с объекта
// // rest = это всё, кроме title
// let { title, ...rest } = options;
// console.log('- rest -', rest); // новый объект

// REVERSE DESTRUCTURING
// let user = {};
// [user.name, user.surname] = "Даня Дёшин".split(' ');
// console.log('- user -', user);
