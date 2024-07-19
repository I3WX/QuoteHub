const generateQuoteBtn = document.getElementById('generateQuote')
const Quote = document.getElementById('Quote')
const sadBtn = document.getElementById('sad');
const aloneBtn = document.getElementById('alone');
const artBtn = document.getElementById('art');
const deathBtn = document.getElementById('death');
const dreamsBtn = document.getElementById('dreams');
const famousBtn = document.getElementById('famous');
const humorBtn = document.getElementById('humor');
const loveBtn = document.getElementById('love');
const moviesBtn = document.getElementById('movies');
const Author = document.getElementById('author')
const avlCategory = ["sad","alone","art","death","dreams","famous","humor","love","movies"]
let category = '';

sadBtn.addEventListener('click', () => {
  category = 'sad';
  updateQuote(category)
});

aloneBtn.addEventListener('click', () => {
  category = 'alone';
  updateQuote(category)
});

artBtn.addEventListener('click', () => {
  category = 'art';
  updateQuote(category)
});

deathBtn.addEventListener('click', () => {
  category = 'death';
  updateQuote(category)
});

dreamsBtn.addEventListener('click', () => {
  category = 'dreams';
  updateQuote(category)
});

famousBtn.addEventListener('click', () => {
  category = 'famous';
  updateQuote(category)
});

humorBtn.addEventListener('click', () => {
  category = 'humor';
  updateQuote(category)
});

loveBtn.addEventListener('click', () => {
  category = 'love';
  updateQuote(category)
});

moviesBtn.addEventListener('click', () => {
  category = 'movies';
  updateQuote(category)
});


let fetchQuote = async function(category) {
    const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
    const apiKey = 'YOUR_API_KEY';

    try {
      const response = await fetch(url, {
        headers: {
          'X-Api-Key': 'A7Sv+UzZPtUo1wsB1EVv0w==h9pz21GAmPszFamM'
        }
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Request failed:', error);
      throw error;
    }
  };

function updateData(quote,author){
  Quote.innerHTML = quote
  Author.innerHTML = author
}
async function  updateQuote(quoteCategory){
  let data = await fetchQuote(quoteCategory)
  let quote = data[0].quote
  let author = data[0].author
  updateData(quote,author)
}
generateQuoteBtn.addEventListener('click',   ()=>{
  let quoteCategory
  if (category !== undefined &&  category !== null){
    quoteCategory = category
  }
  else{
    let randomIndex = Math.floor(Math.random()*avlCategory.length)
    quoteCategory = avlCategory[randomIndex]
  }
  
  updateQuote(quoteCategory)

})