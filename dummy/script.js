console.log("working fine");
// document.body.style.backgroundColor = 'green';

// get all li content

// The minimum prediction confidence.
const threshold = 0.9;

const getToxicity = (text, cb) => {
  // Load the model. Users optionally pass in a threshold and an array of
  // labels to include.
  toxicity.load(threshold).then((model) => {
    const sentences = [text];

    // Load the model. Users optionally pass in a threshold and an array of
    // labels to include.
    return toxicity.load(threshold).then(async (model) => {
      const sentences = [text];
    
      const predictions = await model.classify(sentences);
      console.log(predictions);
      return predictions;
    })

const handleElementModerate = (element) => {
  getToxicity(element.innerHTML, (result) => {
    // console.log(result);
    const isToxic = result.filter((obj) => obj.results[0].match);
    // console.log(isToxic);
    if (isToxic.length > 0) {
      element.innerHTML = '*'.repeat(element.innerHTML.length)
      // element.style.backgroundColor = "red";
    }
  });
}

const liList = document.body.querySelectorAll("li");

// Wait for the page to load
window.addEventListener('load', () => {
  // Hide the page content
  const pageContent = document.querySelector('#page-content');
  pageContent.style.display = 'none';
  
  // Add an event listener to wait for the operation to be done
  const button = document.querySelector('#operation-button');
  button.addEventListener('click', () => {
    // Show the page content
    pageContent.style.display = 'block';
  });
});
const  predictions = [];
for (let li of liList) {
  handleElementModerate(li);
}
for (let li of document.body.querySelectorAll("p")) {
  handleElementModerate(li);
}
for (let li of document.body.querySelectorAll("h1")) {
  handleElementModerate(li);
}

getToxicity('you suck')
.then(res => {
  console.log(res);
})



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
