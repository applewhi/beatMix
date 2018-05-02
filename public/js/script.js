// Drum Arrays

function createDrum(){
  let newDrum = [];
  
  for (i = 1; i <= 16; i++){
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
    return drumArray[indexNum] = !drumArray[indexNum];
  }
}

function isValidDrum(drumArray){
  return  drumArray === kicks || drumArray === snaresdrumArray ||
  drumArray === hiHats || rideCymbals === rideCymbals;
}

function isValidIndex(indexNum){
  return indexNum >= 1 && indexNum <= 16;
}

function clear(drumArray){
  drumArray.fill(false);
  
  /*drumArray.forEach(
      function(indexNum){
        index = false;
      }
  )*/
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

const getNeighborPads = (x, y, size){
  
  let top = [x,y+1],
      right = [x+1,y],
      bottom = [x,y-1],
      left = [x-1,y],
      neighborArray = [];
  
  if(x-1 > 0){
    neighborArray.push(left);
  }
  
  if(y-1 > 0){
    neighborArray.push(bottom);
  }
  
  if(x + 1 <= size){
    neighborArray.push(right);
  }
  
  if(y + 1 <= size){
    neighborArray.push(top);
  }
  return neighborArray;
}
