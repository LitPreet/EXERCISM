// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//pangram js
export const isPangram = (words) => {
  var unique = new Set();    
  for(const w of words){
    if((w >= 'a' && w <= 'z') || 
       (w >= 'A' && w <= 'Z')){
      unique.add(w.toLowerCase()); 
    }
  }
  
  if(unique.size === 26){
    return true;
  } else {
    return false;
  }
  
};
