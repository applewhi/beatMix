// Use this presets array inside your presetHandler
const presets = require('./presets');


// Complete this function:
const presetHandler = (requestMethodType,indexForPresetArray, newPresetArray) => {
 
  //possibly should consolidate the various array declarations/variables (e.g., notFound, found,
  //and badRequest) of presetHandler() by creating one here.
  
  if(indexForPresetArray < 0 || indexForPresetArray >= presets.length || !Math.isInteger(indexForPresetArray)){
    return let notFound = [404];
  }
  else if {
            if (requestMethodType !== 'GET' && requestMethodType !== 'PUT'){
              let badRequest = [400];
              return badRequest;
            }
          }
  //else request method type is a valid one (GET or PUT)
  let found = [200];
  if(requestMethodType === 'GET'){
    return found.push(presets[indexForPresetArray]);
  } //else requestMethodType = PUT
  presets[indexForPresetArray].push(newPresetArray);
  return found.push(newPresetArray);
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
