import * as DICTIONARY from "../dictionary.js";
import * as tf from "@tensorflow/tfjs";
const ENCODING_LENGTH = 20;

export function tokenize(wordArray) {
  let returnArray = [DICTIONARY.START];
  //   console.log("DICTIONARY.START", DICTIONARY.START);
  //   console.log("wordArray", wordArray);

  var words = wordArray.split(" ");
  //   console.log("words array tokenize", words);

  for (var j = 0; j < words.length; j++) {
    let enc = DICTIONARY.LOOKUP[words[j]];
    // console.log("enc => ", enc);
    returnArray.push(enc === undefined ? DICTIONARY.UNKNOWN : enc);
  }

  //   for (var i = 0; i < wordArray.length; i++) {
  //     // console.log(typeof wordArray);//string, lol
  //     // console.log(wordArray.split(" "));

  //     let encoding = DICTIONARY.LOOKUP[wordArray[i]];
  //     // console.log("encoding", encoding);
  //     // console.log("wordArray[i]", wordArray[i]);
  //     returnArray.push(encoding === undefined ? DICTIONARY.UNKNOWN : encoding);
  //   }

  //   while (i < ENCODING_LENGTH - 1) {
  //     console.log(i, " i inside while loop");
  //     console.log(returnArray, "  returnArray while loop");
  //     returnArray.push(DICTIONARY.PAD);
  //     i++;
  //   }

  while (j < ENCODING_LENGTH - 1) {
    // console.log(j, " j inside while loop");
    // console.log(returnArray, "  returnArray while loop");
    returnArray.push(DICTIONARY.PAD);
    j++;
  }

  // Log the result to see what you made.
  //   console.log("returnArray", [returnArray]);

  // Convert to a TensorFlow Tensor and return that.
  return tf.tensor([returnArray]);
}

export const isLongerThanTwenty = (data) => {
  // console.log(data.length);
  // console.log(data.split(" "));
  // console.log(data.split(" ").length);

  if (data.split(" ").length > 19) {
    //console.log("true");
    return true;
  } else {
    return false;
  }
};

export const isEmpty = (username, comment) => {
  // console.log(username, comment);
  if (username.trim().length === 0 || comment.trim().length === 0) {
    return true;
  }
};

export const getIndex = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const functions = {
  tokenize: tokenize,
};
export default functions;
