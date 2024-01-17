function hitungLuas(){
    let sisi = document.getElementById("squareside").value;
    let luas=sisi*sisi;
   /*  alert("Luas Persegi = " + luas); */
    document.getElementById("hasil").innerHTML = "Luas Persegi = " + luas;
}

function kali(a, b){
    hasilKali = a * b;
    console.log("Hasil kali a*b = " + hasilKali);
}

function bagi(a,b){
    hasilBagi = a / b;
    return hasilBagi;
}


function reset() {
    document.getElementById("hasil").innerHTML = "";
  }
