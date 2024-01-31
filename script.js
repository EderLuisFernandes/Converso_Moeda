// £ libra
const button = document.querySelector(".convert-button");
const MoedasConvertidas = document.querySelector(".MoedasConvertidas");
const MoedasPConverte = document.querySelector(".moedasParaConverter");


  
  
  

const resultBtn = async() => {
  const input = document.getElementById("value_real").value;
  const valueOring = document.querySelector(".valor"); //pegando o valor que foi colocado e printando na img 1
  const valueConvert = document.querySelector(".valorConvertido"); //pegando o resulta e mostrando na img 2
  const data = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL').then(Response=> Response.json())
  
  
  const dollarValue = data.USDBRL.high;
  const euroValue = data.EURBRL.high;
  const bitcoinValue = data.BTCBRL.high;
  const libraValue = data.GBPBRL.high;
  
  valueOring.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(input);

  if (MoedasConvertidas.value == "dolar") {
    valueConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(input / dollarValue);
  }
  if (MoedasConvertidas.value == "euro") {
    valueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(input / euroValue);
  }
  if (MoedasConvertidas.value == "bitcoin") {
    valueConvert.innerHTML = new Intl.NumberFormat("cn-CN", {
      style: "currency",
      currency: "BTC",
    }).format(input / bitcoinValue);
  }
  if (MoedasConvertidas.value == "libra") {
    valueConvert.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "GBP",
    }).format(input / libraValue);
  }
}
function mudaImg2() {
  const imgMudada = document.querySelector(".img_changer2");
  const mudarNomeResult = document.querySelector("#mudar_nome_money");

  if (MoedasConvertidas.value == "dolar") {
    mudarNomeResult.innerHTML = "Dollar";
    imgMudada.src = "./src/img/estados-unidos (1) 1.png";
  }
  if (MoedasConvertidas.value == "euro") {
    mudarNomeResult.innerHTML = "Euro";
    imgMudada.src = "./src/img/Euro.png";
  }
  if (MoedasConvertidas.value == "bitcoin") {
    mudarNomeResult.innerHTML = "Bitcoin";
    imgMudada.src = "./src/img/bitcoin 1.png";
  }
  if (MoedasConvertidas.value == "libra") {
    mudarNomeResult.innerHTML = "Libra";
    imgMudada.src = "./src/img/libra 1.png";
  }
  resultBtn();
}

MoedasConvertidas.addEventListener("change", mudaImg2);
button.addEventListener("click", resultBtn);
