
/*
DISPLAY WORD , SOUND, SENTENCE IN EACH CARD on each click
*/


//OBJECTS ARRAY
let i=0
let objDeck =["table","toys", "chair", "shoes", "plate"]
//OBJECTS BUTTON
let OBJECTS = document.getElementById('OBJECTS')
OBJECTS.addEventListener("click", ()=>objClick(i))
async function objClick(index){
    let response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${objDeck[index]}`)
    console.log(response);
   i+=1
   document.getElementById('OBJECTS').innerText=response.data[0].word;};


//ANIMAL ARRAY
let j=0
let aniDeck=["dog","cat","wolf", "shark", "squid"]
//ANIMAL BUTTON
let ANIMALS = document.getElementById('ANIMALS')
ANIMALS.addEventListener("click",()=>handleClick(j))
async function handleClick(index) {
let output = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${aniDeck[index]}`)
// console.log(output);
 j+=1
 document.getElementById('ANIMALS').innerText=output.data[0].word;
};

//EMOTION ARRAY
let k=0
let emoDeck=["sad","happy","angry","okay","worried"]
//EMOTIONS BUTTON
let EMOTIONS = document.getElementById('EMOTIONS')
EMOTIONS.addEventListener("click",()=>emoClick(k))
async function emoClick(index) {
let result = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${emoDeck[index]}`)
// console.log(result);
k+=1
document.getElementById('EMOTIONS').innerText=result.data[0].word;
};
