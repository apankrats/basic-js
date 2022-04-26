const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const map = Array.prototype.map
  let result;
  let nameTeam = map.call(members, eachName => {
    if(eachName === '' || eachName === ' ') {
      delete eachName
    } else if (typeof(eachName) == 'string') {
      return eachName.substring(0, 1);
    } 
    // else {
    //   delete eachName
    //   return result = false
    // } 
});

result = nameTeam.filter(item => typeof(item) === 'string').sort().join('').toUpperCase()

  return result;
}

// createDreamTeam([
//   'Amelia',
//   null,
//   undefined,
//   'Ruby',
//   'Lily',
//   11,
//   'Grace',
//   22,
//   'Millie',
//   'Daisy',
//   true,
//   'Freya',
//   false,
//   'Erin',
//   new Set([1, 2, 3, 4, 5]),
//   'Megan',
//   {
//     'John': 'Smith'
//   },
//   'Jasmine',
//   1,
//   2,
//   3,
//   4,
//   5,
//   'Brooke',
// ]);
// createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]);

module.exports = {
  createDreamTeam
};
