function nameCapitalize(str) {
  let string = str.split(" ");

  let result = string.map(function (item) {
    return item[0].toUpperCase() + item.slice(1);
  });
  return result.join(" ");
}

let string = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam dolor velit quas soluta dicta sunt nesciunt repellendus quia error minus assumenda, autem animi esse rem suscipit ut quaerat deserunt inventore.`;

function reducer(input, action) {
  // Ваше решение тут

  switch (action) {
    case "upperCase":
      return input.toUpperCase();
    case "lowerCase":
      return input.toLowerCase();
    case "capitalize":
      return nameCapitalize(string);
  }
}
console.log(reducer(string, "upperCase"));
console.log(reducer(string, "lowerCase"));
console.log(reducer(string, "capitalize"));

module.exports = reducer;
