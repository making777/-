const D_KEY = "diagnosis_D";


function goD2() {

  const name =
    document.getElementById("name").value.trim();

  const choice =
    document.getElementById("choice").value;

  if (!name) {
    alert("お名前を入力してください。");
    return;
  }

  localStorage.setItem(
    D_KEY,
    JSON.stringify({
      name: name,
      choice: choice
    })
  );

  location.href = "D2.html";
}


function getDData() {

  const data =
    localStorage.getItem(D_KEY);

  return data
    ? JSON.parse(data)
    : null;
}


function loadD2() {

  const data = getDData();

  if (!data) {
    location.href = "D1.html";
    return;
  }

  let score = 80;
  let title = "";
  let text = "";

  switch (data.choice) {

    case "love":

      score = 94;

      title =
        "人との縁が未来を広げます";

      text =
        "あなたにとって大切な人とのつながりが、これからの未来を大きく動かしていきます。信頼できる人との時間を大切にしてください。";

      break;


    case "work":

      score = 91;

      title =
        "才能を形にする未来";

      text =
        "あなたが持っている才能を具体的な形にすることで、未来が大きく開いていきます。小さな挑戦を積み重ねましょう。";

      break;


    case "freedom":

      score = 87;

      title =
        "自由が新しい可能性を生みます";

      text =
        "決められた道だけにこだわらず、自分に合った生き方を選ぶことが未来への鍵になります。";

      break;


    case "growth":

      score = 98;

      title =
        "挑戦が未来を変えます";

      text =
        "あなたは挑戦するほど可能性が広がるタイプ。少し難しいと感じることこそ、未来の扉を開くきっかけになります。";

      break;

  }

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
    title;


  document.getElementById(
    "result-text"
  ).textContent =
    text;
}


async function goD3() {

  const card =
    document.getElementById("result-card");

  const canvas =
    await html2canvas(
      card,
      {
        scale: 2,
        backgroundColor: "#f0ddd6"
      }
    );

  sessionStorage.setItem(
    "D_result_image",
    canvas.toDataURL("image/png")
  );

  location.href = "D3.html";
}


function loadD3() {

  const image =
    sessionStorage.getItem(
      "D_result_image"
    );

  if (!image) {
    location.href = "D2.html";
    return;
  }

  document.getElementById(
    "result-image"
  ).src = image;
}


function saveImage() {

  const image =
    document.getElementById("result-image");

  const link =
    document.createElement("a");

  link.href = image.src;

  link.download =
    "D-diagnosis-result.png";

  link.click();
}


document.addEventListener(
  "DOMContentLoaded",
  function() {

    if (
      location.pathname.endsWith("D2.html")
    ) {
      loadD2();
    }

    if (
      location.pathname.endsWith("D3.html")
    ) {
      loadD3();
    }

  }
);