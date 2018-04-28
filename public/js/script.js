// Drum Arrays
let kicks = [false,false,false,false,false,false,false,false,false,false,false,false,false,
  false,false,false];
let snares = [false,false,false,false,false,false,false,false,false,false,false,false,false,
  false,false,false];
let hiHats = [false,false,false,false,false,false,false,false,false,false,false,false,false,
  false,false,false];
let rideCymbals = [false,false,false,false,false,false,false,false,false,false,false,false,false,
  false,false,false];

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
   drumArray.forEach(function(element){
      if(element === false){
        drumArray.push[indexNum] = true;
      }
        drumArray.push[indexNum] = false;
      }
    return                   
   )
}
