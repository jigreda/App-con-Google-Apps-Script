let codigoActual="";
let horaGeneracion=null;

function doGet() {
  return HtmlService.createHtmlOutputFromFile("asistencia");  
}

function generarCodigo(){
  codigoActual=Math.floor(Math.random()*(455-255+1)+255);
  horaGeneracion=new Date();
  PropertiesService.getScriptProperties().setProperties({
  codigo:codigoActual.toString(),
  marca:horaGeneracion.toISOString()
  });
  return codigoActual;
}

function verificarAsistencia(nombre, codigoIngresado){
  let props=PropertiesService.getScriptProperties().getProperties();
  let codigoValido = props.codigo;
  let tiempo=new Date(props.marca);
  let ahora=new Date();
  let diferenciaMinutos=(ahora-tiempo)/(1000*60);
  if(codigoIngresado===codigoValido && diferenciaMinutos <=60){
  }
}
