/*
Complete the solution so that it reverses all of the words within the string passed in.
*/

const reverseWords = (str) => {
  let array = str.split(' ');
  let newStr = '';
  for(let i = array.length - 1; i > -1; i--) {
    newStr += array[i];
    if(i !== 0) {
      newStr += ' ';
    }
  }

  return newStr;
}