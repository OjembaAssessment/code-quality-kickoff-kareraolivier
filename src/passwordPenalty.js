/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password) {
  const regexone = /(.)\1/g;
  const regextwo = /(.)\1{2,}/g;

  if (password === null || password == "" || password == undefined) {
    return 0;
  }
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);

  if (regextwo.test(password)) {
    return 2;
  }

  if (regexone.test(password)) {
    const matches = password.match(regexone);
    return matches.length;
  }
  return 0;
}
