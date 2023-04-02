let nameElement = document.querySelector(".name");
let count = document.querySelector(".btn-count");
let display = document.querySelector(".display");

count.addEventListener("click", (event) => {
  event.preventDefault();
  let vowels = ["a", "e", "i", "o", "u"];
  let name = nameElement.value;
  let count = 0;

  for (i = 0; i < name.length; i++) {
    for (j = 0; j < vowels.length; j++) {
      if (name[i] == vowels[j]) {
        count++;
      }
    }
  }
  display.innerHTML = "Number of vowels:" + count;
});
