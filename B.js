const B_KEY = "diagnosis_B";


function goB2() {

  const name =
    document.getElementById("name").value.trim();

  const choice =
    document.getElementById("choice").value;

  if (!name) {
    alert("お名前を入力してください。");
    return;
  }

  localStorage.setItem(
    B_KEY,
    JSON.stringify({
      name: name,
      choice: choice
    })
  );

  location.href = "B2.html";
}


function getBData() {

  const data =
    localStorage.getItem(B_KEY);

  return data
    ? JSON.parse(data)
    : null;
}


function loadB2() {

  const data = getBData();

  if (!data) {
    location.href = "B1.html";
    return;
  }

  let values = [75, 75, 75];
  let title = "";
  let text = "";

  if (data.choice === "people") {

    values = [95, 90, 82];

    title =
      "人を自然に惹きつける魅力";

    text =
      "あなたは人との交流の中で魅力が輝くタイプ。会話や共感を通して、周囲に安心感を与えられます。";

  }

  if (data.choice === "alone") {

    values = [84, 76, 91];

    title =
      "静かな存在感を持つ魅力";

    text =
      "一人の時間を大切にするあなたには、落ち着いた雰囲気と深い思考力があります。";

  }

  if (data.choice === "create") {

    values = [88, 96, 89];

    title =
      "創造力から生まれる魅力";

    text =
      "あなたの魅力は、自分だけの世界を形にできること。個性的な発想が周囲を惹きつけます。";

  }

  if (data.choice === "discover") {

    values = [91, 87, 97];

    title =
      "新しい世界を開く魅力";

    text =
      "好奇心と行動力があなたの大きな魅力。新しい経験がさらにあなたを輝かせます。";

  }

  document.getElementById(
    "result-name"
  ).textContent =
    data.name + "さん";


  document.getElementById(
    "bar1"
  ).style.width =
    values[0] + "%";


  document.getElementById(
    "bar2"
  ).style.width =
    values[1] + "%";


  document.getElementById(
    "bar3"
  ).style.width =
    values[2] + "%";


  document.getElementById(
    "result-title"
  ).textContent = title;


  document.getElementById(
    "result-text"
  ).textContent = text;
}


async function goB3() {

  const card =
    document.getElementById("result-card");

  const canvas =
    await html2canvas(
      card,
      {
        scale: 2,
        backgroundColor: "#f5f8f2"
      }
    );

  sessionStorage.setItem(
    "B_result_image",
    canvas.toDataURL("image/png")
  );

  location.href = "B3.html";
}


function loadB3() {

  const image =
    sessionStorage.getItem(
      "B_result_image"
    );

  if (!image) {
    location.href = "B2.html";
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
    "B-diagnosis-result.png";

  link.click();
}


document.addEventListener(
  "DOMContentLoaded",
  function() {

    if (
      location.pathname.endsWith("B2.html")
    ) {
      loadB2();
    }

    if (
      location.pathname.endsWith("B3.html")
    ) {
      loadB3();
    }

  }
);