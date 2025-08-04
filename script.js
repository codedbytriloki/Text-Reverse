const textInput = document.getElementById("textInput");
const mirrorOutput = document.getElementById("mirrorOutput");
const reverseBtn = document.getElementById("reverseBtn");
const copyBtn = document.getElementById("copyBtn");

textInput.addEventListener('input', () => {
  const reversed = [...textInput.value].reverse().join("");
  mirrorOutput.textContent = reversed;
});

reverseBtn.addEventListener('click', () => {
    const reversed = [...textInput.value].reverse().join("");
    textInput.value = reversed;
})

copyBtn.addEventListener('click', () => {
  const text = mirrorOutput.textContent;
  if(text){
    navigator.clipboard.writeText(text);
    copyBtn.textContent = "Copied!";
    setTimeout(() => {
      copyBtn.textContent = "Copy"
    }, 1500);
  }
})
