function Highlight(targetId) {
  const text = document.getElementById(targetId);

  if (text) {
    if (text.style.backgroundColor === "yellow") {
      text.style.backgroundColor = "";
    } else {
      text.style.backgroundColor = "yellow";
    }
  }
}