"use strict";

function makeBigger() {
  alert("Hello, world!");
  document.getElementById("text-area").style.fontSize = "24pt";
}

function applyStyle() {
  const textArea = document.getElementById("text-area");
  const fancyChecked = document.getElementById("fancy").checked;

  if (fancyChecked) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}

function moo() {
  const textArea = document.getElementById("text-area");
  let text = textArea.value.toUpperCase();

  let sentences = text.split(".");
  for (let i = 0; i < sentences.length; i++) {
    let s = sentences[i].trim();
    if (s.length === 0) continue;

    let words = s.split(/\s+/);
    words[words.length - 1] = words[words.length - 1] + "-MOO";
    sentences[i] = words.join(" ");
  }

  textArea.value = sentences.join(".").trim();
}