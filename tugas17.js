function ubahHuruf() {
  var kata1 = "Saya beLajar bahaSa peMrograman deNgan khUsuk";
  var kata2 =
    "Allen SedAng MemAncinG IkaN di SuNgai, DIA MEndapat IkAN GaBuS 3 Ekor dan LanGsuNg Dijual.";

  console.log(kata1.toLowerCase());
  console.log(kata1.toUpperCase());
  console.log(kata2.toLowerCase());
  console.log(kata2.toUpperCase());
}

ubahHuruf();

console.log("===============================");

function kodeAt() {
  var kalimat =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  var a = kalimat.charCodeAt(0);
  var b = kalimat.charCodeAt(1);
  var c = kalimat.charCodeAt(2);
  var d = kalimat.charCodeAt(3);
  var e = kalimat.charCodeAt(4);
  var f = kalimat.charCodeAt(5);

  console.log(a + "-" + b + "-" + c + "-" + d + "-" + e + "-" + f);
}

kodeAt();
