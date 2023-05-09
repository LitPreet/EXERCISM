// @ts-check
//bird watcher 
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.
// intermediate level
/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let store=0;
  for(let i=0; i < birdsPerDay.length; i++)
    {
      store+=birdsPerDay[i];
    }
  return (store);
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  const FirstDay = (week - 1) * 7;
  const lastDay = FirstDay + 7;
    let store=0;
  for(let i=FirstDay; i < lastDay; i++)
    {
      store+=birdsPerDay[i];
    }
  return (store);
  
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  const n = birdsPerDay.length;
  for(let i=0; i < n; i+=2)
    {
      birdsPerDay[i]+=1;
    }
  return (birdsPerDay);
}
