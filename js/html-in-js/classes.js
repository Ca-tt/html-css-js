let paragraph = document.querySelector('.paragraph');

paragraph.classList.toggle('new-class');

let pClasses = document.querySelector('.paragraph').classList;

if (pClasses.contains('good')) {
  console.log('тут есть класс good');
}
