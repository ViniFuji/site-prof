//criar uma variável para manipular o XML
xmlhttp = new XMLHttpRequest();

//efetuar a leitura do arquivo XMl
xmlhttp.open("GET", "xml/db_conteudo.xml",false);

//enviar o arquivo para leitura
xmlhttp.send();

//informar que o arquivo é um xml
xmlDoc = xmlhttp.responseXML;

//organiza os dados em um vetor
x = xmlDoc.getElementsByTagName("postagem");


function funcaoConteudo(){

    for(n=x.length-1;n>=0;n--){
    //for(n=0;n<x.length;n++){

    document.write("<tr>" +
    "<td>"+ x[n].getAttribute("codigo") + "</td>" + 
    "<td>"+ x[n].getElementsByTagName("titulo")[0].childNodes[0].nodeValue +"</td>" +
    "<td>"+ x[n].getElementsByTagName("corpo")[0].childNodes[0].nodeValue +"</td>" +
    "<td><img src='imgs/"+ x[n].getElementsByTagName("imagem_1")[0].childNodes[0].nodeValue +"' width='250'></td>" +
    "</tr>")
    }
}

function funcaoPostagem(){
    url = new URL(window.location.href);
    parametro = url.searchParams;
    n= parametro.get("noticia");

    
    
    //for(n=0;n<x.length;n++){

    document.write("<tr>" +
    "<td>"+ x[n].getAttribute("codigo") + "</td>" + 
    "<td>"+ x[n].getElementsByTagName("titulo")[0].childNodes[0].nodeValue +"</td>" +
    "<td>"+ x[n].getElementsByTagName("corpo")[0].childNodes[0].nodeValue +"</td>" +
    "<td><img src='imgs/"+ x[n].getElementsByTagName("imagem_1")[0].childNodes[0].nodeValue +"' width='250'></td>" +
    "</tr>")
    }
