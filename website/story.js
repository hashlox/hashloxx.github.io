const customName = document.getElementById('customname');
const randomize = document.getElementById('randomize');
const story = document.getElementById('story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'It was a hot day outside, precisely 87 fahrenheit, so :insertx: went for a casual stroll with their dog. When they got to :inserty:, they saw the Illuminati rising from the shadows, then :insertz:. Bob saw everything, but was not worried since he was as high as a kite.';
let insertX = ['Barack Obama','Vin Diesel','Beyonce'];
let insertY = ['the Eiffel Tower','Disneyland','Russia'];
let insertZ = ['the world began to erupt','it began to rain cats and dogs','carried on walking'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob',name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300*0.0714286) + ' stone';
    const temperature =  Math.round((87-32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('87 fahrenheit',temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}