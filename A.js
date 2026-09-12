const A_KEY = "diagnosis_A";

function goA2() {

  const name =
    document.getElementById("name").value.trim();

  const birthday =
    document.getElementById("birthday").value;

  const mood =
    document.getElementById("mood").value;

  if (!name) {
    alert("お名前を入力してください。");
    return;
  }

  const data = {
    name: name,
    birthday: birthday,
    mood: mood
  };

  localStorage.setItem(
    A_KEY,
    JSON.stringify(data)
  );

  location.href = "A2.html";
}


function getAData() {

  const saved =
    localStorage.getItem(A_KEY);

  if (!saved) {
    return null;
  }

  return JSON.parse(saved);
}


function calculateA(data) {

  let score = 80;

  if (data.mood === "positive") {
    score += 8;
  }

  if (data.mood === "calm") {
    score += 5;
  }

  if (data.mood === "thinking") {
    score += 2;
  }

  if (data.mood === "challenge") {
    score += 10;
  }

  return Math.min(score, 99);
}


function loadA2() {

  const data = getAData();

  if (!data) {
    location.href = "A1.html";
    return;
  }

  const score =
    calculateA(data);

  document.getElementById(
    "result-name"
  ).textContent =
    data.name + "さん";


  document.getElementById(
    "score"
  ).textContent =
    score;


  document.getElementById(
    "result-title"
  ).textContent =
    "自分らしく進む力を持つ人";


  document.getElementById(
    "result-text"
  ).textContent =
    "あなたは自分の感覚を大切にしながら、少しずつ未来を切り開いていけるタイプです。焦らず、自分のペースを守ることが大きな力になります。";
}


async function goA3() {

  const result =
    document.getElementById("result-card");

  if (!result) return;

  const canvas =
    await html2canvas(
      result,
      {
        scale: 2,
        backgroundColor: "#eee5d8"
      }
    );

  sessionStorage.setItem(
    "A_result_image",
    canvas.toDataURL("image/png")
  );

  location.href = "A3.html";
}


function loadA3() {

  const image =
    sessionStorage.getItem(
      "A_result_image"
    );

  if (!image) {
    location.href = "A2.html";
    return;
  }

  document.getElementById(
    "result-image"
  ).src = image;
}


function saveImage() {

  const image =
    document.getElementById(
      "result-image"
    );

  if (!image.src) return;

  const link =
    document.createElement("a");

  link.href = image.src;

  link.download =
    "A-diagnosis-result.png";

  link.click();
}


document.addEventListener(
  "DOMContentLoaded",
  function() {

    if (
      location.pathname.endsWith("A2.html")
    ) {
      loadA2();
    }

    if (
      location.pathname.endsWith("A3.html")
    ) {
      loadA3();
    }

  }
);