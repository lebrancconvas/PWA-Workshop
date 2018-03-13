const images = ['cherprang','music','satchan','sport'];
const imgElem = document.querySelector('img');

function randomValueFromArray(array){
  let randomNo = Math.floor(Math.random() * array.length);
  return array[randomNo];
}

setInterval(function(){
  let randomChoice = randomValueFromArray(images);
  imgElem.src = 'assets/' + 'images/' + randomChoice + '.jpg';
},2000)
