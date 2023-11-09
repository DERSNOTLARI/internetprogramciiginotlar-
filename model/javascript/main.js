// document.write("Okul Numarası: 224526007 <br>");
// document.write("Adınız:Nuhcan <br>");
// document.write("Soyadınız: ATAR <br>");
// document.write("Bölüm: Bilgisayar Teknolojileri<br>");
// document.write("Program: Bilgisayar Programcılığı <br>");

function hes(){
    vz = document.getElementById("vz").value;
    fn = document.getElementById("fn").value;

    ort = vz*0.4+fn*0.6;
    document.getElementById("ort").value=ort;
}

function bul(){
    cap = document.getElementById("cap").value;
    cevre = 2 * Math.PI * cap;
    alan = Math.PI * Math.pow(cap, 2);

    document.getElementById("cevre").value=cevre;
    document.getElementById("alan").value=alan;

    
}