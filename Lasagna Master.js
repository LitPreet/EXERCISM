/// <reference path="./global.d.ts" />
// @ts-check
//Lasagna Master program

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
/**
 * Grams of noodles needed per noodle layer.
 */
const Noodle_G_PER_LAYER = 50;
/**
 * Liters of sauce needed per sauce layer.
 */
const Sauce_L_PER_LAYER = 0.2;
/**
 * Default number of portions the recipe makes as written.
 */
const PORTIONS_MADE = 2;

export function cookingStatus(time) {
return time === 0 ? `Lasagna is done.`: time === undefined ? `You forgot to set the timer.` : `Not done, please wait.`
}
export function preparationTime(layer, averagepreparationtime=2) {
  return (layer.length * averagepreparationtime);
}

export function quantities(layers) {
 let noodles = 0;
 let sauce = 0;
  layers.forEach(item => item === 'noodles' ? noodles+=50: item === 'sauce' ? sauce+=0.2 : '');
  return {noodles,sauce}
}

export function addSecretIngredient(friendList , myList) {
  myList.push(friendList[friendList.length-1])
}

export function scaleRecipe(recipe,portions) {
  let res = {}
let scale = portions/PORTIONS_MADE;
for(let ingredients in recipe) 
  res[ingredients] = recipe[ingredients] * scale;
  return res;

}
