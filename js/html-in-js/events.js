let knoppka = document.querySelector('.btn');
console.log('button', knoppka);

knoppka.onclick = () => {
  knoppka.classList.toggle('bold');
}