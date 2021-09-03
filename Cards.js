

/*
DISPLAY WORD , SOUND, SENTENCE IN EACH CARD on each click
*/
let word= "";


//OBJECTS ARRAY
let i=0
let objDeck =["table","toys", "chair", "shoes", "plate"]
//OBJECTS BUTTON
let objInput = document.getElementById('objInput')
let objButn =document.getElementById('obj-btn')
function handleInput(){
    let obj =objInput.value
    console.log(obj);
}


OBJECTS.addEventListener("click", ()=>handleClick(i))

async function handleInput(index){
  let response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${objInput}`)
  console.log(response);
 i+=1
};

// //ANIMAL ARRAY
// let j=0
// let aniDeck=["dog","cat","wolf", "shark", "squid"]
// //ANIMAL BUTTON
// let ANIMALS = document.getElementById('ANIMALS')
// ANIMALS.addEventListener("click",()=>handleClick(j))

// async function handleClick(index) {
// let output = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${aniDeck[index]}`)
// console.log(output);
//  j+=1
// };


// //EMOTION ARRAY
// let k=0
// let emoDeck=["sad","happy","angry","okay","worried"]
// //EMOTIONS BUTTON
// let EMOTIONS = document.getElementById('EMOTIONS')
// EMOTIONS.addEventListener("click",()=>handleClick(k))
// async function handleClick(index) {
// let result = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${emoDeck[index]}`)
// console.log(result);
// k+=1

// // console.log(response.data[0]);//test
// };
