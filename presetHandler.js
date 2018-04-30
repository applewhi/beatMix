// Use this presets array inside your presetHandler
const presets = require('./presets');


// Complete this function:
const presetHandler = (requestMethodType,indexForPresetArray, newPresetArray) => {
 
  if(indexForPresetArray < 0 || indexForPresetArray >= presets.length || !Math.isInteger(indexForPresetArray)){
    return [404];
  }
  else if {
            if (requestMethodType !== 'GET' && requestMethodType !== 'PUT'){
              return [400];
            }
          }
  //else request method type is a valid one (GET or PUT)
  if(requestMethodType === 'GET'){
    return [200,presets[indexForPresetArray]];
  } //else requestMethodType = PUT
  return [200,presets[indexForPresetArray].push(newPresetArray)];
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
