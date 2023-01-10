let pattern = /Дамир/gm;

let multilineString = `
  Дамир любит колу
  Дамир любит колу
  Дамир любит колу
`;

let result = multilineString.match(pattern);
console.log('- result -', result);
