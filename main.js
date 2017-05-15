document.addEventListener("DOMContentLoaded", function() {

  let quoteArr = [
    {
      quote: "Hello World",
      credit: "God"
    },
    {
      quote: "The back of yo head is rediculous!",
      credit: "Wisest man to walk the earth"
    }
  ];


  let randoNumber = () => {
    return Math.round(Math.random());
  };

  let btn = document.querySelector("#btn");

  btn.addEventListener("click", function() {
    let storedNumber = randoNumber();
    return document.getElementById('display').innerHTML = quoteArr[storedNumber].quote,
      document.getElementById('quote').innerHTML = quoteArr[storedNumber].credit,
      console.log(storedNumber);
  });
});
