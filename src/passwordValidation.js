export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];
export const numbers = (str) => {
  const regex = /\d+/g;
  const numbersArray = str.match(regex);

  if (numbersArray && [...new Set(numbersArray.join(""))].length > 4) {
    let a = [...new Set(numbersArray.join(""))].slice(-3);
    let b = [...new Set(numbersArray.join(""))].join("").slice(0, 3);
    if (a == a.sort((a, b) => a - b) || a == a.sort((a, b) => b - a)) {
      return true;
    }
    if (b == b.sort((a, b) => a - b) || b == b.sort((a, b) => b - a)) {
      return true;
    }
  } else {
    return false;
  }
  return false;
};
/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);
  if (password.length !== 10) {
    return false;
  }
  if (
    /^[0-9]+$/.test(password) ||
    /^[A-Za-z]+$/.test(password) ||
    /[^A-Za-z0-9]/.test(password) ||
    !/[a-z]/.test(password) ||
    !/[A-Z]/.test(password) ||
    forbiddenPasswords.includes(password)
  ) {
    return false;
  }
  if (numbers(password)) {
    return false;
  }

  const setOfPassword = new Set([...password]);
  if (setOfPassword.size < 4) return false;

  return true;
}
