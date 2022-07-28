const findFirstWord = (text) => {
  /*
        this function will ask for some text
        it will try to create array of words
        the function will check if the array has words
        if there is words in the array it will return the first word
        else it will return empty word
    */
  let wordsArr = text.split(" "); // this array will be all the words in the text
  /*
    if there is words in the array.
    if length > 0 this mean true
    if length === 0, 0 is false in js
    this is why length 0  is false
  */
  if (wordsArr.length) {
    return wordsArr[0];
  } else {
    return "";
  }
};

const handleTextInputChange = () => {
  let txtTextArea = document.getElementById("txtTextArea");
  let toTxtInput = document.getElementById("toTxtInput");
  let firstWord = findFirstWord(txtTextArea.value);
  if (firstWord) {
    // console.log(txtTextArea.value.replaceAll(firstWord, toTxtInput.value));
    txtTextArea.value = txtTextArea.value.replace(firstWord, "🦄🦄🦄🦄");
    txtTextArea.value = txtTextArea.value.replaceAll(
      firstWord,
      toTxtInput.value
    );
    txtTextArea.value = txtTextArea.value.replace("🦄🦄🦄🦄", firstWord);
    /*
        txtTextArea.value = the text from the user
        firstWord = the first word of the text
        toTxtInput.value = is the ward that the user want to change to
        replaceAll = will replace all the words
    */
  }
};

const handleTextInputChangeFN = () => {
  let txtTextArea = document.getElementById("txtTextArea");
  let toTxtInput = document.getElementById("toTxtInput");
  let firstWord = findFirstWord(txtTextArea.value);
  if (firstWord) {
    // console.log(txtTextArea.value.replaceAll(firstWord, toTxtInput.value));
    txtTextArea.value = txtTextArea.value.replaceAll(
      firstWord,
      toTxtInput.value
    );
    txtTextArea.value = txtTextArea.value.replace(toTxtInput.value, firstWord);
    /*
          txtTextArea.value = the text from the user
          firstWord = the first word of the text
          toTxtInput.value = is the ward that the user want to change to
          replaceAll = will replace all the words
      */
  }
};
