// Use this presets array inside your presetHandler
const presets = require('./presets');

//possibly should consolidate the notFound and found arrays of presetHandler() by creating one here.

// Complete this function:
const presetHandler = (requestMethodType,indexForPresetArray, newPresetArray) => {
  if(indexForPresetArray < 0 || indexForPresetArray >= presets.length){
    return let notFound = [404];
  }
  else if {
            if (requestMethodType !== 'GET' && requestMethodType !== 'PUT'){
              let badRequest = [400];
            }
          }
  let found = [200];
  if(requestMethodType === 'GET'){
    return found[indexForPresetArray].push(requestMethodType);
  } //else requestMethodType = PUT
  found[indexForPresetArray].push(newPresetArray);
  return = found[1].push(newPresetArray);
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
