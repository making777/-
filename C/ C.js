const C_KEY = "diagnosis_C";


function goC2() {

  const name =
    document.getElementById("name").value.trim();

  const choice =
    document.getElementById("choice").value;

  if (!name) {
    alert("お名前を入力してください。");
    return;
  }

  localStorage.setItem(
    C_KEY,
    JSON.stringify({
      name: name,
      choice: choice
    })
  );

  location.href = "C2.html";
}


function getCData() {

  const data =
    localStorage.getItem(C_KEY);

  return data
    ? JSON.parse(data)
    : null;
}


function loadC2() {

  const data = getCData();

  if (!data) {
    location.href = "C1.html";
    return;
  }

  let title = "";
  let text = "";
  let type = "";

  switch (data.choice) {

    case "moon":

      title =
        "静かで深い感性";

      text =
        "あなたは静かな時間の中で、自分の世界を深めていく感性の持ち主です。表面的なものより、本質や余韻を大切にします。";

      type = "MOON";

      break;


    case "flower":

      title =
        "やさしく豊かな感性";

      text =
        "あなたは小さな変化や美しさに気づける人。周囲にやさしさを届ける、繊細で豊かな感性があります。";

      type = "FLOWER";

      break;


    case "ocean":

      title =
        "自由で柔軟な感性";

      text =
        "あなたは環境に合わせて自然に変化できる柔軟性があります。広い視野を持ち、新しい可能性を受け入れられる人です。";

      type = "OCEAN";

      break;


    case "star":

      title =
        "想像力に満ちた感性";

      text =
        "あなたはまだ見えていない未来を想像する力があります。理想を思い描き、それを形にすることができるタイプです。";

      type = "STAR";

      break;

  }

  document.getElementById(
    "result-name"
  ).textContent =
    data.name + "さん";


  document.getElementById(
    "result-title"
  ).textContent =
    title;


  document.getElementById(
    "result-text"
  ).textContent =
    text;


  document.getElementById(
    "result-type"
  ).textContent =
    type;
}


async function goC3() {

  const card =
    document.getElementById("result-card");

  const canvas =
    await html2canvas(
      card,
      {
        scale: 2,
        backgroundColor: "#1a1424"
      }
    );

  sessionStorage.setItem(
    "C_result_image",
    canvas.toDataURL("image/png")
  );

  location.href = "C3.html";
}


function loadC3() {

  const image =
    sessionStorage.getItem(
      "C_result_image"
    );

  if (!image) {
    location.href = "C2.html";
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
    "C-diagnosis-result.png";

  link.click();
}


document.addEventListener(
  "DOMContentLoaded",
  function() {

    if (
      location.pathname.endsWith("C2.html")
    ) {
      loadC2();
    }

    if (
      location.pathname.endsWith("C3.html")
    ) {
      loadC3();
    }

  }
);
