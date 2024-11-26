document.getElementById("btn1").addEventListener("click", sin);

function sin() {
  //input
  let opp11 = Number(document.getElementById("opp1").value);
  let hyp11 = Number(document.getElementById("hyp1").value);

  //process
  var formula = (Math.asin(opp11 / hyp11) * 180) / Math.PI;
  var round1 = formula.toFixed(2);

  //output
  document.getElementById("output1").innerHTML = round1;
}

document.getElementById("btn2").addEventListener("click", cos);

function cos() {
  //input
  var adj22 = Number(document.getElementById("adj2").value);
  var hyp22 = Number(document.getElementById("hyp2").value);

  //process
  var formula = (Math.acos(adj22 / hyp22) * 180) / Math.PI;
  var round2 = formula.toFixed(2);

  //output
  document.getElementById("output2").innerHTML = round2;
}

document.getElementById("btn3").addEventListener("click", tan);

function tan() {
  //input
  var opp33 = Number(document.getElementById("opp3").value);
  var adj33 = Number(document.getElementById("adj3").value);

  //process
  var formula = (Math.atan(opp33 / adj33) * 180) / Math.PI;
  var round3 = formula.toFixed(2);

  //output
  document.getElementById("output3").innerHTML = round3;
}

document.getElementById("btn4").addEventListener("click", pytha);

function pytha() {
  //input
  var a = Number(document.getElementById("square1").value);
  var b = Number(document.getElementById("square2").value);

  //process

  var formula = Math.sqrt(a * a + b * b);
  var round = formula.toFixed(1);

  //output

  document.getElementById("output4").innerHTML = round;
}

document.getElementById("btndark").addEventListener("click", darkmode);

function darkmode() {
  document.getElementById("html1").classList.add("darkmode1");
}

document.getElementById("btnlight").addEventListener("click", lightmode);

function lightmode() {
  document.getElementById("html1").classList.remove("darkmode1");
}
// document.getElementById("btnlight").addEventListener("");
