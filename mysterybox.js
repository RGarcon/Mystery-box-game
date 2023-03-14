//variables

const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');
const btn3 = document.getElementById('button3');
const btn4 = document.getElementById('button4');
const btn5 = document.getElementById('button5');
const btn6 = document.getElementById('button6');
const btn7 = document.getElementById('button7');
const btn8 = document.getElementById('button8');
const btn9 = document.getElementById('button9');
const btn10 = document.getElementById('button10');
const btn11 = document.getElementById('button11');
const btn12 = document.getElementById('button12');
const table1 = document.getElementById('sumtable1');
var bt1status = 0;
var bt2status = 0;
var bt3status = 0;
var bt4status = 0;
var bt5status = 0;
var bt6status = 0;
var bt7status = 0;
var bt8status = 0;
var bt9status = 0;
var bt10status = 0;
var bt11status = 0;
var bt12status = 0;

var case1 = document.getElementById('sumtable1');
var case2 = document.getElementById('sumtable2');
var case3 = document.getElementById('sumtable3');
var case4 = document.getElementById('sumtable4');
var case5 = document.getElementById('sumtable5');
var case6 = document.getElementById('sumtable6');
var case7 = document.getElementById('sumtable7');
var case8 = document.getElementById('sumtable8');
var case9 = document.getElementById('sumtable9');
var case10 = document.getElementById('sumtable10');
var case11 = document.getElementById('sumtable11');
var case12 = document.getElementById('sumtable12');

var caselist = [case1, case2, case3, case4, case5, case6, case7, case8, case9, case10, case11, case12]

var sumlist = [0, 10, 20, 50, 100, 500, 700, 1000, 3000, 10000, 50000, 100000]
var buttonvalues = []

let buttonplayer = prompt("Choisissez un chiffre entre 1 et 12 !");
//var buttonplayer = 2

var comptbank = 2
document.getElementById("bank").innerHTML = comptbank

var compteurtour = 1

var valeurselect = 1000000000
var valeursrestantes = [0, 10, 20, 50, 100, 500, 700, 1000, 3000, 10000, 50000, 100000]




//functions

function associatesumtobuttons() {

  for (var i = 0; i < 12; i++) {
    console.log(sumlist)
    var rand = Math.floor(Math.random() * sumlist.length);
    var rValue = sumlist[rand];
    var rankrValue = sumlist.indexOf(rValue)

    console.log('Button ' + (i + 1) + ' : ' + rValue)

    buttonvalues[i] = rValue
    sumlist.splice(rankrValue, 1)
  }

}



function waitbuttonclicked() {

  btn1.addEventListener('click', function() {
    if (bt1status == 0) {
      alert('VALEUR BOUTON 1 : ' + buttonvalues[0])
      bt1status = 1;
      colorgrid();
      buttondisabled();
      document.getElementById("bank").innerHTML = comptbank - 1
      comptbank = comptbank - 1
      valeurselect = buttonvalues[0]
      valeurrestantes()
    }
  })
  btn2.addEventListener('click', function() {
    if (bt2status == 0) {
      alert('VALEUR BOUTON 2 : ' + buttonvalues[1])
      bt2status = 1;
      colorgrid();
      buttondisabled();
      document.getElementById("bank").innerHTML = comptbank - 1
      comptbank = comptbank - 1
      valeurselect = buttonvalues[1]
      valeurrestantes()

    }

  })
  btn3.addEventListener('click', function() {
    if (bt3status == 0) {
      alert('VALEUR BOUTON 3 : ' + buttonvalues[2])
      bt3status = 1;
      colorgrid();
      buttondisabled();
      document.getElementById("bank").innerHTML = comptbank - 1
      comptbank = comptbank - 1
      valeurselect = buttonvalues[2]
      valeurrestantes()
    }

  })
  btn4.addEventListener('click', function() {
    if (bt4status == 0) {
      alert('VALEUR BOUTON 4 : ' + buttonvalues[3])
      bt4status = 1;
      colorgrid();
      buttondisabled();
      document.getElementById("bank").innerHTML = comptbank - 1
      comptbank = comptbank - 1
      valeurselect = buttonvalues[3]
      valeurrestantes()
    }

  })
  btn5.addEventListener('click', function() {
    if (bt5status == 0) {
      alert('VALEUR BOUTON 5 : ' + buttonvalues[4])
      bt5status = 1;
      colorgrid();
      buttondisabled();
      document.getElementById("bank").innerHTML = comptbank - 1
      comptbank = comptbank - 1
      valeurselect = buttonvalues[4]
      valeurrestantes()
    }

  })
  btn6.addEventListener('click', function() {
    if (bt6status == 0) {
      alert('VALEUR BOUTON 6 : ' + buttonvalues[5])
      bt6status = 1;
      colorgrid();
      buttondisabled();
      document.getElementById("bank").innerHTML = comptbank - 1
      comptbank = comptbank - 1
      valeurselect = buttonvalues[5]
      valeurrestantes()
    }

  })
  btn7.addEventListener('click', function() {
    if (bt7status == 0) {
      alert('VALEUR BOUTON 7 : ' + buttonvalues[6])
      bt7status = 1;
      colorgrid();
      buttondisabled();
      document.getElementById("bank").innerHTML = comptbank - 1
      comptbank = comptbank - 1
      valeurselect = buttonvalues[6]
      valeurrestantes()
    }

  })
  btn8.addEventListener('click', function() {
    if (bt8status == 0) {
      alert('VALEUR BOUTON 8 : ' + buttonvalues[7])
      bt8status = 1;
      colorgrid();
      buttondisabled();
      document.getElementById("bank").innerHTML = comptbank - 1
      comptbank = comptbank - 1
      valeurselect = buttonvalues[7]
      valeurrestantes()
    }

  })
  btn9.addEventListener('click', function() {
    if (bt9status == 0) {
      alert('VALEUR BOUTON 9 : ' + buttonvalues[8])
      bt9status = 1;
      colorgrid();
      buttondisabled();
      document.getElementById("bank").innerHTML = comptbank - 1
      comptbank = comptbank - 1
      valeurselect = buttonvalues[8]
      valeurrestantes()
    }

  })
  btn10.addEventListener('click', function() {
    if (bt10status == 0) {
      alert('VALEUR BOUTON 10 : ' + buttonvalues[9])
      bt10status = 1;
      colorgrid();
      buttondisabled();
      document.getElementById("bank").innerHTML = comptbank - 1
      comptbank = comptbank - 1
      valeurselect = buttonvalues[9]
      valeurrestantes()
    }

  })
  btn11.addEventListener('click', function() {
    if (bt11status == 0) {
      alert('VALEUR BOUTON 11 : ' + buttonvalues[10])
      bt11status = 1;
      colorgrid();
      buttondisabled();
      document.getElementById("bank").innerHTML = comptbank - 1
      comptbank = comptbank - 1
      valeurselect = buttonvalues[10]
      valeurrestantes()
    }

  })
  btn12.addEventListener('click', function() {
    if (bt12status == 0) {
      alert('VALEUR BOUTON 12 : ' + buttonvalues[11])
      bt12status = 1;
      colorgrid();
      buttondisabled();
      document.getElementById("bank").innerHTML = comptbank - 1
      comptbank = comptbank - 1
      valeurselect = buttonvalues[11]
      valeurrestantes()
    }

  })


}



function buttondisabled() {

  if (bt1status == 1 || buttonplayer == 1) {
  	document.getElementById("button1").style.background = '#FB0000';
    btn1.disabled = true
  }
  if (bt2status == 1 || buttonplayer == 2) {
  	document.getElementById("button2").style.background = '#FB0000';
    btn2.disabled = true
  }
  if (bt3status == 1 || buttonplayer == 3) {
  	document.getElementById("button3").style.background = '#FB0000';
    btn3.disabled = true
  }
  if (bt4status == 1 || buttonplayer == 4) {
  	document.getElementById("button4").style.background = '#FB0000';
    btn4.disabled = true
  }
  if (bt5status == 1 || buttonplayer == 5) {
  	document.getElementById("button5").style.background = '#FB0000';
    btn5.disabled = true
  }
  if (bt6status == 1 || buttonplayer == 6) {
  	document.getElementById("button6").style.background = '#FB0000';
    btn6.disabled = true
  }
  if (bt7status == 1 || buttonplayer == 7) {
  	document.getElementById("button7").style.background = '#FB0000';
    btn7.disabled = true
  }
  if (bt8status == 1 || buttonplayer == 8) {
  	document.getElementById("button8").style.background = '#FB0000';
    btn8.disabled = true
  }
  if (bt9status == 1 || buttonplayer == 9) {
  	document.getElementById("button9").style.background = '#FB0000';
    btn9.disabled = true
  }
  if (bt10status == 1 || buttonplayer == 10) {
  	document.getElementById("button10").style.background = '#FB0000';
    btn10.disabled = true
  }
  if (bt11status == 1 || buttonplayer == 11) {
  	document.getElementById("button11").style.background = '#FB0000';
    btn11.disabled = true
  }
  if (bt12status == 1 || buttonplayer == 12) {
  	document.getElementById("button12").style.background = '#FB0000';
    btn12.disabled = true
  }
}



function colorgrid() {

  if (bt1status == 1) {
    document.getElementById("button1").style.background = '#000000';
    for (var i = 0; i < 12; i++) {
      if (caselist[i].textContent == buttonvalues[0]) {
        caselist[i].style.background = '#FF0000';
      }
    }
  }
  if (bt2status == 1) {
    for (var i = 0; i < 12; i++) {
      if (caselist[i].textContent == buttonvalues[1]) {
        caselist[i].style.background = '#FF0000';
      }
    }

  }
  if (bt3status == 1) {
    for (var i = 0; i < 12; i++) {
      if (caselist[i].textContent == buttonvalues[2]) {
        caselist[i].style.background = '#FF0000';
      }
    }
  }
  if (bt4status == 1) {
    for (var i = 0; i < 12; i++) {
      if (caselist[i].textContent == buttonvalues[3]) {
        caselist[i].style.background = '#FF0000';
      }
    }
  }
  if (bt5status == 1) {
    for (var i = 0; i < 12; i++) {
      if (caselist[i].textContent == buttonvalues[4]) {
        caselist[i].style.background = '#FF0000';
      }
    }
  }
  if (bt6status == 1) {
    for (var i = 0; i < 12; i++) {
      if (caselist[i].textContent == buttonvalues[5]) {
        caselist[i].style.background = '#FF0000';
      }
    }
  }
  if (bt7status == 1) {
    for (var i = 0; i < 12; i++) {
      if (caselist[i].textContent == buttonvalues[6]) {
        caselist[i].style.background = '#FF0000';
      }
    }
  }
  if (bt8status == 1) {
    for (var i = 0; i < 12; i++) {
      if (caselist[i].textContent == buttonvalues[7]) {
        caselist[i].style.background = '#FF0000';
      }
    }
  }
  if (bt9status == 1) {
    for (var i = 0; i < 12; i++) {
      if (caselist[i].textContent == buttonvalues[8]) {
        caselist[i].style.background = '#FF0000';
      }
    }
  }
  if (bt10status == 1) {
    for (var i = 0; i < 12; i++) {
      if (caselist[i].textContent == buttonvalues[9]) {
        caselist[i].style.background = '#FF0000';
      }
    }
  }
  if (bt11status == 1) {
    for (var i = 0; i < 12; i++) {
      if (caselist[i].textContent == buttonvalues[10]) {
        caselist[i].style.background = '#FF0000';
      }
    }
  }
  if (bt12status == 1) {
    for (var i = 0; i < 12; i++) {
      if (caselist[i].textContent == buttonvalues[11]) {
        caselist[i].style.background = '#FF0000';
      }
    }
  }
}



function bank() {
  console.log('ma valeur : ' + buttonvalues[buttonplayer - 1])
  console.log('compttour : ' + compteurtour)
  console.log('comptbank : ' + comptbank)
  console.log('valrestantes : ' + valeursrestantes)
  if (compteurtour == 1) {

    if (Math.max(...valeursrestantes) == 100000) {

      var bankproposal = Math.round(Math.max(...valeursrestantes) / 500)
      comptbank = 2
      compteurtour = compteurtour + 1
      document.getElementById("bank").innerHTML = 2

      var val = confirm('La banque vous propose : ' + bankproposal);

      if (val == true) {
        alert('Vous vous arretez ici et gagnez ' + bankproposal);
        endgame()
        return
      } else {
        alert("On continue !");
        return

      }

    }
    if (Math.max(...valeursrestantes) == 50000) {

      var bankproposal = Math.round(Math.max(...valeursrestantes) / 150)
      comptbank = 2
      compteurtour = compteurtour + 1
      document.getElementById("bank").innerHTML = 2

      var val = confirm('La banque vous propose : ' + bankproposal);

      if (val == true) {
        alert('Vous vous arretez ici et gagnez ' + bankproposal);
        endgame()
        return
      } else {
        alert("On continue !");
        return

      }
    }
    if (Math.max(...valeursrestantes) == 10000) {

      var bankproposal = Math.round(Math.max(...valeursrestantes) / 20)
      comptbank = 2
      compteurtour = compteurtour + 1
      document.getElementById("bank").innerHTML = 2

      var val = confirm('La banque vous propose : ' + bankproposal);

      if (val == true) {
        alert('Vous vous arretez ici et gagnez ' + bankproposal);
        endgame()
        return
      } else {
        alert("On continue !");
        return
      }
    }
    if (Math.max(...valeursrestantes) < 10000) {

      var bankproposal = Math.round(Math.max(...valeursrestantes) / 5)
      comptbank = 2
      compteurtour = compteurtour + 1
      document.getElementById("bank").innerHTML = 2

      var val = confirm('La banque vous propose : ' + bankproposal);

      if (val == true) {
        alert('Vous vous arretez ici et gagnez ' + bankproposal);
        endgame()
        return
      } else {
        alert("On continue !");
        return
      }
    }
  }

  if (compteurtour == 2) {

    if (Math.max(...valeursrestantes) == 100000) {


      var bankproposal = Math.round(Math.max(...valeursrestantes) / 130)
      comptbank = 2
      compteurtour = compteurtour + 1
      document.getElementById("bank").innerHTML = 2

      var val = confirm('La banque vous propose : ' + bankproposal);

      if (val == true) {
        alert('Vous vous arretez ici et gagnez ' + bankproposal);
        endgame()
        return
      } else {
        alert("On continue !");
        return

      }

    }
    if (Math.max(...valeursrestantes) == 50000) {

      var bankproposal = Math.round(Math.max(...valeursrestantes) / 50)
      comptbank = 2
      compteurtour = compteurtour + 1
      document.getElementById("bank").innerHTML = 2

      var val = confirm('La banque vous propose : ' + bankproposal);

      if (val == true) {
        alert('Vous vous arretez ici et gagnez ' + bankproposal);
        endgame()
        return
      } else {
        alert("On continue !");
        return

      }
    }
    if (Math.max(...valeursrestantes) == 10000) {

      var bankproposal = Math.round(Math.max(...valeursrestantes) / 10)
      comptbank = 2
      compteurtour = compteurtour + 1
      document.getElementById("bank").innerHTML = 2

      var val = confirm('La banque vous propose : ' + bankproposal);

      if (val == true) {
        alert('Vous vous arretez ici et gagnez ' + bankproposal);
        endgame()
        return
      } else {
        alert("On continue !");
        return
      }
    }
    if (Math.max(...valeursrestantes) < 10000) {

      var bankproposal = Math.round(Math.max(...valeursrestantes) / 2)
      comptbank = 2
      compteurtour = compteurtour + 1
      document.getElementById("bank").innerHTML = 2

      var val = confirm('La banque vous propose : ' + bankproposal);

      if (val == true) {
        alert('Vous vous arretez ici et gagnez ' + bankproposal);
        endgame()
        return
      } else {
        alert("On continue !");
        return
      }
    }
  }

  if (compteurtour == 3) {

    if (Math.max(...valeursrestantes) == 100000) {

      var bankproposal = Math.round(Math.max(...valeursrestantes) / 50)
      comptbank = 2
      compteurtour = compteurtour + 1
      document.getElementById("bank").innerHTML = 2

      var val = confirm('La banque vous propose : ' + bankproposal);

      if (val == true) {
        alert('Vous vous arretez ici et gagnez ' + bankproposal);
        endgame()
        return
      } else {
        alert("On continue !");
        return

      }

    }
    if (Math.max(...valeursrestantes) == 50000) {

      var bankproposal = Math.round(Math.max(...valeursrestantes) / 30)
      comptbank = 2
      compteurtour = compteurtour + 1
      document.getElementById("bank").innerHTML = 2

      var val = confirm('La banque vous propose : ' + bankproposal);

      if (val == true) {
        alert('Vous vous arretez ici et gagnez ' + bankproposal);
        endgame()
        return
      } else {
        alert("On continue !");
        return

      }
    }
    if (Math.max(...valeursrestantes) == 10000) {

      var bankproposal = Math.round(Math.max(...valeursrestantes) / 5)
      comptbank = 2
      compteurtour = compteurtour + 1
      document.getElementById("bank").innerHTML = 2

      var val = confirm('La banque vous propose : ' + bankproposal);

      if (val == true) {
        alert('Vous vous arretez ici et gagnez ' + bankproposal);
        endgame()
        return
      } else {
        alert("On continue !");
        return
      }
    }
    if (Math.max(...valeursrestantes) < 10000) {

      var bankproposal = Math.round(Math.max(...valeursrestantes) / 1.5)
      comptbank = 2
      compteurtour = compteurtour + 1
      document.getElementById("bank").innerHTML = 2

      var val = confirm('La banque vous propose : ' + bankproposal);

      if (val == true) {
        alert('Vous vous arretez ici et gagnez ' + bankproposal);
        endgame()
        return
      } else {
        alert("On continue !");
        return
      }
    }
  }

  if (compteurtour == 4) {

    if (Math.max(...valeursrestantes) == 100000) {

      var bankproposal = Math.round(Math.max(...valeursrestantes) / 10)
      comptbank = 2
      compteurtour = compteurtour + 1
      document.getElementById("bank").innerHTML = 2

      var val = confirm('La banque vous propose : ' + bankproposal);

      if (val == true) {
        alert('Vous vous arretez ici et gagnez ' + bankproposal);
        endgame()
        return
      } else {
        alert("On continue !");
        return

      }

    }
    if (Math.max(...valeursrestantes) == 50000) {

      var bankproposal = Math.round(Math.max(...valeursrestantes) / 5)
      comptbank = 2
      compteurtour = compteurtour + 1
      document.getElementById("bank").innerHTML = 2

      var val = confirm('La banque vous propose : ' + bankproposal);

      if (val == true) {
        alert('Vous vous arretez ici et gagnez ' + bankproposal);
        endgame()
        return
      } else {
        alert("On continue !");
        return

      }
    }
    if (Math.max(...valeursrestantes) == 10000) {

      var bankproposal = Math.round(Math.max(...valeursrestantes) / 1.5)
      comptbank = 2
      compteurtour = compteurtour + 1
      document.getElementById("bank").innerHTML = 2

      var val = confirm('La banque vous propose : ' + bankproposal);

      if (val == true) {
        alert('Vous vous arretez ici et gagnez ' + bankproposal);
        endgame()
        return
      } else {
        alert("On continue !");
        return
      }
    }
    if (Math.max(...valeursrestantes) < 10000) {

      var bankproposal = Math.round(0.75 * Math.max(...valeursrestantes))
      comptbank = 2
      compteurtour = compteurtour + 1
      document.getElementById("bank").innerHTML = 2

      var val = confirm('La banque vous propose : ' + bankproposal);

      if (val == true) {
        alert('Vous vous arretez ici et gagnez ' + bankproposal);
        endgame()
        return
      } else {
        alert("On continue !");
        return
      }
    }
  }
}


function boxexchange() {

  var myValue = buttonvalues[buttonplayer - 1]
  console.log(myValue)
  console.log(valeursrestantes)
  var rankval = valeursrestantes.indexOf(myValue)

  var exchange = confirm('Voulez-vous echanger les deux dernieres valeurs ?');

  if (exchange == true) {
    valeursrestantes.splice(rankval, 1)
    alert('Vous avez échangé pour .... ' + valeursrestantes[0]);
    endgame()
    return
  } else {
    alert("Vous etes resté sur votre valeur initiale ...");
    endgame()
    return
  }
}



function valeurrestantes() {

  var val = valeurselect
  var rankval = valeursrestantes.indexOf(valeurselect)
  valeursrestantes.splice(rankval, 1)

}



function endgame() {

  alert('VALEUR DE VOTRE BOUTON INITIAL : ' + buttonvalues[buttonplayer - 1])
  document.location.reload();
  clearInterval(interval);

}



function main() {

  colorgrid()
  waitbuttonclicked()
  buttondisabled()

  if (comptbank == 0) {
    bank()
  }

  if (compteurtour == 5 && comptbank == 0) {
    boxexchange()
  }

}



//execution
associatesumtobuttons()
var interval = setInterval(main, 1000)


//nextsteps


//règles dès le départs
