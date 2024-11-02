let input1 = document.getElementById("input1");
let generateBtn = document.getElementById("button-generate");
let outputText = document.getElementById("output-caption");

function onBtnGenerateClicked() {
  outputText.textContent = field1.value;
}
generateBtn.addEventListener("click", onBtnGenerateClicked);
