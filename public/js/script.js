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
  if (isValidDrum(drumArray) && isValidIndex(indexNum)
    && drumArray){

      switch (drumArray){
        case 'kicks':
        kicks[indexNum] = !kicks[indexNum];
        break;

        case 'snares':
        snares[indexNum] = !snares[indexNum];
        break;

        case 'hiHats':
        hiHats[indexNum] = !hiHats[indexNum];
        break;

        case 'rideCymbals':
        rideCymbals[indexNum] = !rideCymbals[indexNum];
        break;
      }
    }
}

function isValidDrum(drumArray){
  return  drumArray === 'kicks' || drumArray === 'snares' ||
  drumArray === 'hiHats' || drumArray === 'rideCymbals';
}

function isValidIndex(indexNum){
  return indexNum >= 0 && indexNum <= 15;
}

function clear(drumArray){
  if (isValidDrum(drumArray)){

  switch (drumArray){
  case 'kicks':
  for (i = 0; i < kicks.length; i++){
    kicks[i] = false;
  }
  break;

  case 'snares':
  for (i = 0; i < snares.length; i++){
    snares[i] = false;
   }
   break;

  case 'hiHats':
  for (i = 0; i < hiHats.length; i++){
    hiHats[i] = false;
  }
  break;

  case 'rideCymbals':
  for (i = 0; i < rideCymbals.length; i++){
    rideCymbals[i] = false;
  }
  break;

 }
  } return;
}

function invert(drumArrayString){

  switch (drumArrayString){
    case 'kicks':
    for(i = 0; i < kicks.length; i++){
      kicks[i] = !kicks[i]
    }
    break;

    case 'snares':
    for(i = 0; i < snares.length; i++){
      snares[i] = !snares[i]
    }
    break;

    case 'rideCymbals':
    for(i = 0; i < rideCymbals.length; i++){
      rideCymbals[i] = !rideCymbals[i]
    }
    break;

    case 'hiHats':
    for(i = 0; i < hiHats.length; i++){
      hiHats[i] = !hiHats[i]
    }
    break;
 }
}

function getNeighborPads(x, y, size){
  let top = [x,y+1],
      right = [x+1,y],
      bottom = [x,y-1],
      left = [x-1,y],
      neighborArray = [];

  if ( x < 0 || x > size || y < 0 || y > size ){
    return neighborArray;
  } else {

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
    return console.log(`>>>>>>>>>> ${neighborArray}`);
  }
}
