document.cookie = '';

let cookies = document.cookie;

document.cookie = "user_authenticated=true; SameSite=Lax";
// document.cookie = "user_name=damir@lu; SameSite=Lax";


// let cookie = {
//   auth: true,
//   username: 'damir@lu',
// }

// for (const key in cookie) {
//   document.cookie = `${key}=${cookie[key]}`;
// }

// function eraseCookie(name) {
//   document.cookie = name + '=; Max-Age=0'
// }

// eraseCookie('user_authenticated')

// console.log('- cookies -', cookies);