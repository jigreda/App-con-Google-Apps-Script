let codigoActual="";
let horaGeneracion=null;

function doGet() {
  return HtmlService.createHtmlOutputFromFile("asistencia");  
}

function generarCodigo(){
  codigoActual=Math.floor(Math.random()*(455-255+1)+255);
  horaGeneracion=new Date();
  PropertiesService.getScriptProperties().setProperties({
  });
}
