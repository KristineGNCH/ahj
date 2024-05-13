/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint no-cond-assign: "error" */
const luhnAlgorithm = (value) => {
  let nCheck = 0;

  if (value && / [0-9-/s] + /.test(value)) {
    value = value.replace(/\D/g, '');

    value.split('').forEach((v, n) => {
      let nDigit = parseInt(v, 10);

      if (!((value.length + n) % 2) && (nDigit *= 2) > 9) {
        nDigit -= 9;
      }
      nCheck += nDigit;
    });
  }
  return nCheck % 10 === 0;
};
