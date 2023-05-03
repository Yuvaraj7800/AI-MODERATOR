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
      console.log(predictions[0]);
      return predictions[0];
    })

}


const liList =  document.body.querySelectorAll('li');

for(let li of liList){
    console.log(li.innerHTML);
    await getToxicity(li.innerHTML);
}