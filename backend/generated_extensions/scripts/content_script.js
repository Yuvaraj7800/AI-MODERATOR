console.log('working fine');
// document.body.style.backgroundColor = 'green';

// get all li content

const liList =  document.body.querySelectorAll('li');

for(let li of liList){
    console.log(li);
}