const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let index = email.slice(email.lastIndexOf("@") + 1);
  // console.log(index)
  return index;

}
// getEmailDomain('prettyandsimple@example.com')
// getEmailDomain('someaddress@yandex.ru')
// getEmailDomain('admin@mailserver2.ru')
// getEmailDomain('very.unusual.@.unusual.com@usual.com')

module.exports = {
  getEmailDomain
};
