// Drum Arrays

function createDrum(){
  let newDrum = [];
  
  for (i = 1, i <= 16, i++){
    newDrum.push(false);
  }
  return newDrum;
}

const kicks = createDrum();
const snares = createDrum();
const hiHats = createDrum();
const rideCymbals = createDrum();

function toggleDrum(drumArray,indexNum){

  if (isValidDrum(drumArray) && isValidIndex(indexNum)){
    if(drumArray.push[indexNum] === false){
      drumArray.push[indexNum] = true;
      }
      drumArray.push[indexNum] = false;
      }
  return
}

function isValidDrum(drumArray){
  return  drumArray === kicks || drumArray === snaresdrumArray ||
  drumArray === hiHats || rideCymbals === rideCymbals;
}

function isValidIndex(indexNum){
  return indexNum >= 1 && indexNum <= 16;
}

function clear(drumArray){
  drumArray.forEach(
      function(indexNum){
        index = false;
      }
  )
}

function invert(drumArray){
  for(i = 0; i < drumArray.length; i++){
    drumArray[i] = !drumArray[i];
  
  /*this code changes the array while iterating it...not a good idea
  drumArray.forEach(function(element){
      if(element === false){
        drumArray.push[indexNum] = true;
      }
        drumArray.push[indexNum] = false;
   })*/
}
