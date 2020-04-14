function generateHashtag(str) {
  if (str == "") {
    return false;
  } else {
    
    var strArr = str.split("");

    for (let i = 0; i < strArr.length; i++) {
      while (strArr[i] == strArr[i + 1]) {
        strArr.splice([i], 1);
      }
    }
    str = strArr.join("");

    //

    for (let i = 0; i < str.length; i++) {
      if (str[i] == " ") {
        str =
          str.slice(0, str.indexOf(str[i])) +
          str[i + 1].toUpperCase() +
          str.slice([i + 2], str.length);
      }
    }

    var strWithoutSpaces = str.match(/[a-z0-9]/gi);

    if (strWithoutSpaces != null) {
      var capitalString =
        strWithoutSpaces[0].toUpperCase() +
        strWithoutSpaces.splice(1, strWithoutSpaces.length - 1);
      var hashString = capitalString.split(",").join("");
      var string = "#".concat(hashString);

      return string.length <= 140 ? string : false;
    }
    return false;
  }
}
