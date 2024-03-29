//Space Age js
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const RATIO = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
},
EARTH_YEAR = 31557600
export function age(planet, seconds) {
    return Number((seconds / EARTH_YEAR / RATIO[planet]).toFixed(2))
}
