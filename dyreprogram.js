const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'bilder/piggsvin1.jpg') {
    myImage.setAttribute('src','bilder/piggsvin2.jpg');
  } else if (mySrc === 'bilder/piggsvin2.jpg') {
    myImage.setAttribute('src','bilder/piggsvin3.jpg');
  }
  else {
    myImage.setAttribute('src','bilder/piggsvin1.jpg');
  }

}

let antall=0
const h1=document.querySelector('h1')
h1.addEventListener('click',function(){
  antall++
  alert('Au!'+antall);

});

let myButton = document.querySelector('button');
myButton.addEventListener('click', function(){
  alert('Dette er nettsted som handler om Piggsvin, og den er lagt av Ahmad')
})
