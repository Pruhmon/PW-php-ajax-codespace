const fonts = ["Qwitcher Grypen","Tulpen One","Shadows Into Light"];

let rotating = 0; // Move outside the function and use let

function getRandomQuote() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "random_quotes.php", true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      const quoteContainer = document.getElementById("result");
      quoteContainer.innerHTML = xhr.responseText;
      quoteContainer.style.fontFamily = fonts[rotating];
      rotating = (rotating + 1) % fonts.length; // Rotate font index
      quoteContainer.classList.remove("fade-in");
      void quoteContainer.offsetWidth; // Trigger reflow to restart animation
      quoteContainer.classList.add("fade-in"); 
      quoteContainer.style.display = "block";
    } else {
      console.error("Failed to fetch quote:", xhr.statusText);
    }
  };
  xhr.onerror = function () {
    console.error("AJAX request failed.");
  };
  xhr.send();
}

getRandomQuote();