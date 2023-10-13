/*
info = {
	verificacionHost : true,
	jugadorX : {
		name : ---,
		avatar : ---
	}
	jugadorO : {
		name : ---,
		avatar : --
	}
}
*/
let  coronaPng = document.querySelector('.coronaPng')
let corona =  document.querySelector('.corona')
let avatarPerdedorWin2 = document.getElementById('imgPerdedor')
const contenedorWin = document.querySelector('.cajaGanador');
const contenedorNowin = document.querySelector('.cajaPerdedor')
const contenedorGameXO = document.querySelector('.gamesByDcode');
const severVerificacion = "http://testgranada.sytes.net";
const containerWIN = document.querySelector('.containerWIN');
const buttonVolverAjugar = document.getElementById('buttonVolverAjugarXO');
const imgGanador = document.getElementById('imgGanador');
const userWin = document.getElementById('userWin')
const userWin2 = document.getElementById('userWin2')
const buttonEnvioPromtsChats = document.getElementById('shareInputText');
const infoWin = document.querySelector('.infoWin')
const imgSpanNOtification = document.getElementById('imgSpanNOtification');
let whatHOst;
let infoCallback;
async function verificacionWIN(info,infoForCallback){
infoCallback = infoForCallback;
let retornar;
let headers = {
	"method" : "post",
	"body" : JSON.stringify({
		"funcion" : "applicationCertification",
		"name" : `${info.jugadorX.name}` 
	}),
	"headers" : {"Content-Type" : "application/json"}
}
fetch(severVerificacion,headers)
.then(dataserver => dataserver.json())
.then( async (respuestJson) => {
let jsonParse = await JSON.parse(respuestJson);
let dataArray = await jsonParse.Mensajes.Datagame.data;
const promesaVerificacionWIN =  new Promise(resolve => {
////////////////////////////////////horizontal
     if(dataArray[0][0] != " " && dataArray[0][0] === dataArray[0][1] && dataArray[0][1] === dataArray[0][2]) resolve({status : true, position : "Horizontal[0]",ganador : dataArray[0][0]})
else if(dataArray[1][0] != " " && dataArray[1][0] === dataArray[1][1] && dataArray[1][1] === dataArray[1][2]) resolve({status : true, position : "Horizontal[1]",ganador : dataArray[1][0]})
else if(dataArray[2][0] != " " && dataArray[2][0] === dataArray[2][1] && dataArray[2][1] === dataArray[2][2]) resolve({status : true, position : "Horizontal[2]",ganador : dataArray[2][0]})
/////////////////////////////////vertical
else if(dataArray[0][0] != " " && dataArray[0][0] === dataArray[1][0] && dataArray[1][0] === dataArray[2][0]) resolve({status : true, position : "vertical[0]",ganador : dataArray[0][0]})	
else if(dataArray[0][1] != " " && dataArray[0][1] === dataArray[1][1] && dataArray[1][1] === dataArray[2][1]) resolve({status : true, position : "vertical[1]",ganador : dataArray[0][1]})	
else if(dataArray[0][2] != " " && dataArray[0][2] === dataArray[1][2] && dataArray[1][2] === dataArray[2][2]) resolve({status : true, position : "vertical[2]",ganador : dataArray[0][2]})
///////////////////////////////diagonal
else if(dataArray[0][0] != " " && dataArray[0][0] === dataArray[1][1] && dataArray[1][1] === dataArray[2][2]) resolve({status : true, position : "diagonal[0]",ganador : dataArray[0][0]})	
else if(dataArray[0][2] != " " && dataArray[0][2] === dataArray[1][1] && dataArray[1][1]=== dataArray[2][0]) resolve({status : true, position : "diagonal[2]",ganador : dataArray[0][2]})	
else if(dataArray[0][0] != " " && dataArray[0][1] != " " && dataArray[0][2] != " " && 
        dataArray[1][0] != " " && dataArray[1][1] != " " && dataArray[1][2] != " " &&
        dataArray[2][0] != " " && dataArray[2][1] != " " && dataArray[2][2] != " "
 	){
 	resolve({status: true, position : "empate", ganador :"empate"})}

else {
	resolve({
		status : false
	})
}
})
.then(resultado => {

if(resultado.status === true){
iniciarContenedorWIN(info,resultado.ganador,resultado.position)
}
})
})
}
iniciarContenedorWIN=(infoGanador,ganador,position)=>{ 
whatHOst = infoGanador.verificacionHost;

if(ganador === "X"){
	if (whatHOst) {
			peticionQuestionFor2({
		nameGanador : infoGanador.jugadorX.name,
		avatarGanador : infoGanador.jugadorX.avatar,
		namePerdedor : infoGanador.jugadorO.name,
		avatarPerdedor : infoGanador.jugadorO.avatar,
		infoGanador : infoGanador,
		ganador : ganador,
		position : position  
	})
		}else{
				peticionQuestionFor({
		nameGanador : infoGanador.jugadorO.name,
		avatarGanador : infoGanador.jugadorO.avatar,
		namePerdedor : infoGanador.jugadorX.name,
		avatarPerdedor : infoGanador.jugadorX.avatar,
		infoGanador : infoGanador,
		ganador : ganador,
		position : position  
	})
		}
}else{
		if (whatHOst) {
			peticionQuestionFor({
		nameGanador : infoGanador.jugadorX.name,
		avatarGanador : infoGanador.jugadorX.avatar,
		namePerdedor : infoGanador.jugadorO.name,
		avatarPerdedor : infoGanador.jugadorO.avatar,
		infoGanador : infoGanador,
		ganador : ganador,
		position : position  
	})
		}else{
				peticionQuestionFor2({
		nameGanador : infoGanador.jugadorO.name,
		avatarGanador : infoGanador.jugadorO.avatar,
		namePerdedor : infoGanador.jugadorX.name,
		avatarPerdedor : infoGanador.jugadorX.avatar,
		infoGanador : infoGanador,
		ganador : ganador,
		position : position  
	})
		}
}
}
function inicializarGamesChat(infoGanador,ganador,position){
	alert(infoGanador)
audioSuperMarioGalaxi2.pause()
whatHOst = infoGanador.verificacionHost;
const contenedorPadrePlus = document.querySelector('.usersContainer').innerHTML = " ";
	let buttonNumber1 = document.getElementById('buttonsNumber1')
let buttonNumber2 = document.getElementById('buttonsNumber2')
let buttonNumber3 = document.getElementById('buttonsNumber3')
let buttonNumber4 = document.getElementById('buttonsNumber4')
let buttonNumber5 = document.getElementById('buttonsNumber5')
let buttonNumber6 = document.getElementById('buttonsNumber6')
let buttonNumber7 = document.getElementById('buttonsNumber7')
let buttonNumber8 = document.getElementById('buttonsNumber8')
let buttonNumber9 = document.getElementById('buttonsNumber9')
	if(position === "Horizontal[0]"){
	buttonNumber1.style.background = "#3f6ad5";	 
	buttonNumber2.style.background = "#3f6ad5";	 
	buttonNumber3.style.background = "#3f6ad5";	 
	}else if(position === "Horizontal[1]"){
	buttonNumber4.style.background = "#3f6ad5";	 
	buttonNumber5.style.background = "#3f6ad5";	 
	buttonNumber6.style.background = "#3f6ad5";	 
	}else if(position === "Horizontal[2"){
	buttonNumber7.style.background = "#3f6ad5";	 
	buttonNumber8.style.background = "#3f6ad5";	 
	buttonNumber9.style.background = "#3f6ad5";	 	
	}else if(position === "vertical[0]"){
	buttonNumber1.style.background= "#3f6ad5";	 
	buttonNumber4.style.background= "#3f6ad5";	 
	buttonNumber7.style.background= "#3f6ad5";	 
	}else if(position === "vertical[1]"){
	buttonNumber2.style.background = "#3f6ad5";	 
	buttonNumber5.style.background = "#3f6ad5";	 
	buttonNumber8.style.background = "#3f6ad5";	 	
	}else if(position === "vertical[2]"){
	buttonNumber3.style.background = "#3f6ad5";	 
	buttonNumber6.style.background = "#3f6ad5";	 
	buttonNumber9.style.background = "#3f6ad5";	 		
	}else if(position === "diagonal[0]"){
	buttonNumber1.style.background = "#3f6ad5";	 
	buttonNumber5.style.background = "#3f6ad5";	 
	buttonNumber9.style.background = "#3f6ad5";	 		
	}else if(position === "diagonal[1]"){
	buttonNumber3.style.background = "#3f6ad5";	 
	buttonNumber5.style.background = "#3f6ad5";	 
	buttonNumber7.style.background = "#3f6ad5";	 
	}else if(position === "empate"){
	buttonNumber1.style.background = "red";	 
	buttonNumber2.style.background = "red";	 
	buttonNumber3.style.background = "red";	 
	buttonNumber4.style.background = "red";	 
	buttonNumber5.style.background = "red";	 
	buttonNumber6.style.background = "red";	 
	buttonNumber7.style.background = "red";	 
	buttonNumber8.style.background = "red";	 
	buttonNumber9.style.background = "red";	 
	}
setTimeout(()=>{
	buttonNumber1.style.background = "black";	 
	buttonNumber2.style.background = "black";	 
	buttonNumber3.style.background = "black";	 
	buttonNumber4.style.background = "black";	 
	buttonNumber5.style.background = "black";	 
	buttonNumber6.style.background = "black";	 
	buttonNumber7.style.background = "black";	 
	buttonNumber8.style.background = "black";	 
	buttonNumber9.style.background = "black";	 
  
},1500)	

	if(ganador === "X"){
		volverAjugar(infoGanador)
		if (infoGanador.verificacionHost === false) buttonVolverAjugar.style.display = "none" 
contenedorGameXO.style.display = "none";
contenedorWin.style.display = "block"; //
contenedorNowin.style.display = "block";
if(whatHOst){
		imgGanador.src = infoGanador.jugadorX.avatar;
		avatarPerdedorWin2.src = infoGanador.jugadorO.avatar;
		userWin2.textContent = infoGanador.jugadorO.name;
	userWin.textContent = infoGanador.jugadorX.name;
	corona.setAttribute("src","iconos/corona.png")
	coronaPng.setAttribute("src","iconos/cacasion.png")

inicarChatSpan({
nameConection : infoGanador.jugadorX.name,
infoAvtar : {
	name : infoGanador.jugadorO.name,
	avatar : infoGanador.jugadorO.avatar
} 
	})
}	
else { 
	imgGanador.src = infoGanador.jugadorO.avatar;
	avatarPerdedorWin2.src = infoGanador.jugadorX.avatar;
		userWin2.textContent = infoGanador.jugadorX.name;
	userWin.textContent = infoGanador.jugadorO.name;
	coronaPng.setAttribute("src","iconos/corona.png")
	corona.setAttribute("src","iconos/cacasion.png")

	inicarChatSpan({
nameConection : infoGanador.jugadorO.name,
infoAvtar : {
	name : infoGanador.jugadorX.name,
	avatar : infoGanador.jugadorX.avatar
} 
	})
}
setTimeout(()=>{
containerWIN.style.display  = "block"
},500)

	}
	else	if(ganador === "O"){
	   
		volverAjugar(infoGanador)
		if (infoGanador.verificacionHost === false) buttonVolverAjugar.style.display = "none" 
contenedorGameXO.style.display = "none";
contenedorWin.style.display = "block";
contenedorNowin.style.display = "block";
if(whatHOst){
	imgGanador.src = infoGanador.jugadorX.avatar;
	avatarPerdedorWin2.src = infoGanador.jugadorO.avatar;
		userWin2.textContent = infoGanador.jugadorO.name;
	userWin.textContent = infoGanador.jugadorX.name;
	corona.setAttribute("src","iconos/cacasion.png")
	coronaPng.setAttribute("src","iconos/corona.png")
inicarChatSpan({
nameConection : infoGanador.jugadorX.name,
infoAvtar : {
	name : infoGanador.jugadorO.name,
	avatar : infoGanador.jugadorO.avatar
} 
	})
}	
else {
		imgGanador.src = infoGanador.jugadorO.avatar;
		avatarPerdedorWin2.src = infoGanador.jugadorX.avatar;
		userWin2.textContent = infoGanador.jugadorX.name;
	userWin.textContent = infoGanador.jugadorO.name;
	coronaPng.setAttribute("src","iconos/cacasion.png")
	corona.setAttribute("src","iconos/corona.png")
	inicarChatSpan({
nameConection : infoGanador.jugadorO.name,
infoAvtar : {
	name : infoGanador.jugadorX.name,
	avatar : infoGanador.jugadorX.avatar
} 
	})
}
setTimeout(()=>{
containerWIN.style.display  = "block"
},500)

	}
	else if (ganador === "empate"){
			volverAjugar(infoGanador)
		if (infoGanador.verificacionHost === false) buttonVolverAjugar.style.display = "none" 
contenedorGameXO.style.display = "none";
contenedorWin.style.display = "block";
contenedorNowin.style.display = "block";
inicarChatSpan({
nameConection : infoGanador.jugadorO.name,
infoAvtar : {
	name : infoGanador.jugadorX.name,
	avatar : infoGanador.jugadorX.avatar
} 
	})
setTimeout(()=>{
containerWIN.style.display  = "block"
},500)
	imgGanador.src = "acedor.gif";
	userWin.textContent = "Son tan malos que ninguno pudo ganar jaja";
}
}
function volverAjugar(infoGanador){
	if(whatHOst){
buttonVolverAjugar.addEventListener('click',()=>{
		 let headers = {
		 	method : "post",
		 	body : JSON.stringify(
		 		{
  	  	"funcion" : "conectionUsers",
	 	"name" : `${infoGanador.jugadorX.name}`,
        "userConection" : `${infoGanador.jugadorX.name}`,
        "chat" : ` `,
        "avatar" : " ",
        "request" : "false",
        "respuestaRequest" : "ok",
        "Datagames":{
    "status" : "eligiendo",
    "data" : [
      [" "," "," "],
      [" "," "," "],
      [" "," "," "]
    ]
  }
  }
		 	),
		headers : {"Content-Type" : "application/json"}
		 }
	
fetch(severVerificacion,headers)
.then(dataserver => dataserver.json())
.then( async (dataRespuestaJsonP) => {
 let dataRespuestaJson = await dataRespuestaJsonP;
	if (dataRespuestaJson.mensaje === "error") {document.querySelector('.errorSever').style.display = "block"; contenedorGameXO.style.display = "none"}
 else{
 	 contenedorGameXO.style.display = "block";
	scriptJugadorConection(infoCallback)
 	 contenedorGameXO.style.opacity = "0";
 	 contenedorWin.style.display = "none";
      contenedorNowin.style.display = "none";
 	 setTimeout(()=>{contenedorGameXO.style.opacity = "1"},1000)

 }

})
})
}
else{
verificacionDeVolverAjugarForHots(infoGanador)
}
}
function verificacionDeVolverAjugarForHots(infoGanador){
	let headers = {
	method : "post",
	body : JSON.stringify({
		"funcion" : "applicationCertification",
		"name" : `${infoGanador.jugadorX.name}`
	}),
	headers : {"Content-Type" : "application/json"}
}
fetch(severVerificacion, headers)
.then(respuestaServer => respuestaServer.json())
.then( async (respuestJson) => {
	let respuestaParse = await JSON.parse(respuestJson)
	let dataArrayModi = await respuestaParse.Mensajes.Datagame.data;
	if(respuestJson.mensaje === "error"){
		document.querySelector('.errorSever').style.display = "block"; contenedorGameXO.style.display = "none";
	}
	else if(dataArrayModi[0][0] === " " && dataArrayModi[0][1] === " " && dataArrayModi[0][2] === " " && 
             dataArrayModi[1][0] === " " && dataArrayModi[1][1] === " " && dataArrayModi[1][2] === " " && 
             dataArrayModi[2][0] === " " && dataArrayModi[2][1] === " " && dataArrayModi[2][2] === " " 
		){

	contenedorGameXO.style.display = "block";
	contenedorGameXO.style.opacity = "0";
	contenedorWin.style.display = "none";
     contenedorNowin.style.display = "none";
 	 funcionJugadorHostRecopilacionDeDatos(infoCallback)

	setTimeout(()=>{contenedorGameXO.style.opacity = "1"},1000)	
	}
	else{
  setTimeout(()=>{verificacionDeVolverAjugarForHots(infoGanador)},500)
	}
})
}
// function agregarTrofeos(info){
//    let headers = {
//          method : "post",
//          body : JSON.stringify({
//          	"funcion" : "requestUsers",
//          	"name" : `${info.name}`
//          }),
//          headers : {"Content-Type" : "application/json"}   	 
//    }
//    fetch(severVerificacion,headers)
//    .then(recibidoServer => recibidoServer.json())
//    .then(respuestJsons => {
//    	let recibidoJson = JSON.parse(respuestJsons)
//    	alert(recibidoJson)
//    	alert(info.name)
//    	let array = [];
//    	let trofeosGuardar = 0;
//    	let imgGuardar;
//    	let nameGuardar;
//     imgGuardar = recibidoJson[`${info.name}`].avatar;
//     nameGuardar = recibidoJson[`${info.name}`].name;
//     array =  recibidoJson[`${info.name}`].friends;
//     trofeosGuardar = parseInt(recibidoJson[`${info.name}`].trofeos) + 1;
//     let data = {
//     		"funcion" : "newUser",
// 		"status" : "online",
// 		 "name" : `${input.value}`,
// 		 "avatar" : `${img.src}`,
//       "friends" : [],
//       "trofeos" : 0 
//     }
//     data.avatar  = imgGuardar;
//     data.name = nameGuardar;
//     data.friends = array[0];
//     data.trofeos = trofeosGuardar;
//     let headersEnvio = {
//  method  : "post",
//  body : JSON.stringify(data),
//  headers : {"Content-Type" : "application/json"}
//  }
//   fetch(severVerificacion,headersEnvio)
//  .then(exito => exito.json())
//  .then(exitoJson => {
//  	 console.log("trofeo agregado boludo siuuuuu")
//  })
//    })
// }