console.log('working fine');
// document.body.style.backgroundColor = 'green';

// get all li content

// The minimum prediction confidence.
const threshold = 0.9;

const getToxicity = async (text) => {

    // Load the model. Users optionally pass in a threshold and an array of
    // labels to include.
    return toxicity.load(threshold).then(async (model) => {
      const sentences = [text];
    
      const predictions = await model.classify(sentences);
      console.log(predictions);
      return predictions;
    })

}

getToxicity('you suck')
.then(res => {
  console.log(res);
})


const liList =  document.body.querySelectorAll('li');

for(let i = 0; i < liList.length; i++){
    // console.log(li.innerHTML);
    const words = liList[i].textContent.split(' ');

    getToxicity(liList[i].textContent)
.then(res => {
  if(res.length){
    liList[i].innerHTML.replace(/./gi, '*');
  }
  // console.log(res);
})

  // Loop through each word in the array
  // for (let j = 0; j < words.length; j++) {
  //   // Check if the word contains the specific word you're looking for (in this example, "example")
  //   if (words[j].includes('you')) {
  //     // If the word is found, wrap it in a <span> element with a CSS class to highlight it
  //     words[j] = '<span class="">' + words[j].replace(/./g, '*') + '</span>';
  //     // listItems[i].innerHTML.replace(/example/gi, '*');
  //   }
  // }

  // Join the array of words back into a string and set it as the <li> element's innerHTML
  // liList[i].innerHTML = words.join(' ');
    // if(li)
    // await getToxicity(li.innerHTML);
}