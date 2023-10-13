////win contenedores
const contenedorQuestionWin = document.querySelector('.contenedorQuestionGanador');
const pinfoQuestionWin = document.querySelector('.userNameQuestionLuser');
const contenedorPadrePlus = document.querySelector('.usersContainer');
let todasLasPreguntas;
let nameHost;
let nameLuser;
let avatar;
let callback_infoGanador2; 
let callback_position2; 
let callback_ganador2;
/*
 nameLuser : "data"
*/
function peticionQuestionFor(info){
	let verficadorChild = true;
	callback_infoGanador2 = info.infoGanador;
callback_position2 = info.position;
callback_ganador2 = info.ganador;
		contenedorQuestionWin.style.display = "block";
		// contenedorQuestionWin.style.display = "1000";
	document.querySelector('.gamesByDcode').style.display = "none";
	
	nameHost = info.nameGanador
	nameLuser = info.namePerdedor
	avatar = info.infoGanador.jugadorX
  let headers = {
  	method : "post",
  	body : JSON.stringify({"funcion" : "question","name" : `${nameHost}`}),
  	headers : {"Content-Type" : "application/json"}
  	
  }
  fetch('http://testgranada.sytes.net',headers)
  .then(dataServer => dataServer.json())
  .then(async (respuestaJson) => {
  	 let jsonParse = await JSON.parse(respuestaJson);
  	 let objetoArray = await Object.keys(jsonParse)
  	  todasLasPreguntas = await jsonParse;
  	  funcionContenedorVirificador();
  	  if(verficadorChild){

if(contenedorPadrePlus.childNodes.length < objetoArray.length ){
  	  for(let i = 0; i < objetoArray.length; i++){
  	  	    let fragmento = new DocumentFragment();
          let div = document.createElement('DIV'); div.classList.add('containerJSusers');
          let pHidden = document.createElement('P'); pHidden.classList.add('hiddenP'); pHidden.textContent = jsonParse[objetoArray[i]].pregunta;
          let pPregunta = document.createElement('P'); pPregunta.classList.add('nameUsers');pPregunta.textContent = jsonParse[objetoArray[i]].pregunta;
          let pStatusPregunta = document.createElement('P');pStatusPregunta.classList.add('statusUsers');pStatusPregunta.textContent = jsonParse[objetoArray[i]].status;
          let img = document.createElement('IMG'); img.src = jsonParse[objetoArray[i]].avatar;
          div.appendChild(pHidden);
          div.appendChild(pPregunta);
          div.appendChild(pStatusPregunta);
          div.appendChild(img);
          fragmento.appendChild(div);
          contenedorPadrePlus.appendChild(fragmento);
          if(i < objetoArray.length-1){ 
          	verficadorChild = false;
   
       }
  	  }
  	}
  	}
  })
}
/*
	infoPreguntas = jsonParse.pregunta.Online
  preguntaCorrecta = jsonParse.pregunta.Online.respuestaCorrecta;
  question.textContent   = jsonParse.pregunta..pregunta;
  questionOne.textContent= jsonParse.pregunta..respuestas1;questionOne.setAttribute('value',jsonParse.pregunta.Online.respuestas1)
  questionTwo.textContent= jsonParse.pregunta..respuestas2;questionTwo.setAttribute('value',jsonParse.pregunta.Online.respuestas2)
  questionTwo.textContent= jsonParse.pregunta..respuestas3;questionTree.setAttribute('value',jsonParse.pregunta.Online.respuestas3)*/

function funcionContenedorVirificador(){
	const contenedoresPreguntas = document.querySelectorAll('.containerJSusers');
contenedoresPreguntas.forEach(e=>{
	e.addEventListener('click',()=>{
		 let contenedorSiguienteHijo = e.firstElementChild;
		 let headers = { 
		 method : "post",
		 body : JSON.stringify({
		 "pregunta" : `${todasLasPreguntas[e.firstElementChild.textContent].pregunta}`,
		 "respuesta1" : `${todasLasPreguntas[e.firstElementChild.textContent].respuestas1}`,
		 "respuesta2" : `${todasLasPreguntas[e.firstElementChild.textContent].respuestas2}`,
		 "respuesta3" : `${todasLasPreguntas[e.firstElementChild.textContent].respuestas3}`,
		 "respuestaCorrecta" : `${todasLasPreguntas[e.firstElementChild.textContent].respuestaCorrecta}`,
		 "funcion" : "conectionQuestionUser",
         "name" : `${nameHost}`,
         "status" : `listo`,
         "userConection" : `${nameLuser}`,
     }),
	 "headers" : {"Content-Type" : "application/json"}
         		 }
		 fetch('http://testgranada.sytes.net',headers)
		 .then(dataServer=> dataServer.json())
		 .then(json => {
	
		 	if(json.mensaje === "ok"){ 
		 		startVerificarRespuestaForluser()
       contenedorPadrePlus.innerHTML = `<div class="loaderQuestionGanador"></div><label style="color:white;margin: 5px;">Espara que responda</label>`;
		 	 }
		 })
	})
})	
}
startVerificarRespuestaForluser=()=>{
	 let headers = { 
	"method" : "post",
	"body" : JSON.stringify({
  "funcion" : "verificacionServerQuestion",
   "name" :`${nameLuser}`
	}),
	"headers" : {"Content-Type" : "application/json"}
	 }
	 fetch('http://testgranada.sytes.net',headers)
	 .then(servidorJson => servidorJson.json())
	 .then(async(json) =>{
	 	let jsonParse = await JSON.parse(json)
	 		console.log(jsonParse.Online)
	 	if(jsonParse.Online.status === "respondiendo" || jsonParse.Online.status === "listo") setTimeout(()=>{startVerificarRespuestaForluser()},1000)
	 		else if(jsonParse.Online.status === "gano"){
	 			document.getElementById('statusQuestionWinP').textContent = "Te robaron la corona";
  document.querySelector('.corona1').style.display = "none";
  document.getElementById('animationCorrect1').style.display = "none";
    document.querySelector('.contenedorQuestionGanador').style.display = "none"

    document.querySelector('.contenedorQuestionGanador').style.display = "none"

    document.querySelector('.intermedioViajeAlchat').style.display = "block";
       setTimeout(()=>{
    document.querySelector('.intermedioViajeAlchat').style.display = "none";
    inicializarGamesChat(callback_infoGanador2,callback_ganador2,callback_position2)
    },500)
  // document.getElementById('statusQuestionWinIMG').src = avatar;
	 		}
	 			 else if(jsonParse.Online.status === "perdio") {
	 			 	document.getElementById('statusQuestionWinP').textContent = "Ganaste la corona";
  document.querySelector('.corona1').style.display = "block";
  document.getElementById('animationCorrect1').style.display = "block";
    document.querySelector('.contenedorQuestionGanador').style.display = "none"

    document.querySelector('.contenedorQuestionGanador').style.display = "none"

    document.querySelector('.intermedioViajeAlchat').style.display = "block";
  // document.getElementById('statusQuestionWinIMG').src = avatar;
    setTimeout(()=>{
    document.querySelector('.intermedioViajeAlchat').style.display = "none";
    inicializarGamesChat(callback_infoGanador2,callback_ganador2,callback_position)
    },1000)
	 			 }
	 })
}
////////////////////////////////////contenedores
const contenedorQuestionLuser = document.querySelector('.contenedorQuestionPerdedor');
const infoPQuestionLuser = document.getElementById('userNameQuestionGanador');
let question = document.getElementById('question');
let questionOne = document.getElementById('questionOne');
let questionTwo = document.getElementById('questionTwo');
let questionTree = document.getElementById('questionTree');
let inputQuestion = document.getElementById('questionTreeInput')
let inputQuestion1 = document.getElementById('questionTreeInput1')
let inputQuestion2 = document.getElementById('questionTreeInput2')
let loadingQuestionLuser = document.querySelector('.loaderQuestionPerdedor');
let animationCorrect = document.getElementById('animationCorrect')
let callback_infoGanador;
let callback_ganador;
let callback_position;
let nameGanadorVercionLuser;
let namePerdedorVercionLuser;
let preguntaCorrecta;
let infoPreguntas;

peticionQuestionFor2=(info)=>{
	animationCorrect.style.display = "none"
document.querySelector('.gamesByDcode').style.display = "none";
loadingQuestionLuser.style.display = "block";
nameGanadorVercionLuser = info.nameGanador;
namePerdedorVercionLuser = info.namePerdedor;
callback_infoGanador = info.infoGanador;
callback_position = info.position;
callback_ganador = info.ganador;
avatar = info.infoGanador.avatarGanador;
let headers = {
	 "method" : "post",
	 "body" : JSON.stringify({
	 	"funcion" : "verificacionServerQuestion",
	 	"name" : `${nameGanadorVercionLuser}`
	 }),
	 "headers" : {"Content-Type" : "application/json"}
}
fetch('http://testgranada.sytes.net',headers)
.then(dataserver => dataserver.json())
.then(async(dataJson) => {
	let jsonParse = await JSON.parse(dataJson)
	if(jsonParse.Online.pregunta === " "){
		setTimeout(()=>{
			peticionQuestionFor2(info)
		},1000)
	}
	else if(jsonParse.Online.pregunta != " " && jsonParse.Online.status === "listo"){
	infoPreguntas = jsonParse.Online
   console.log(jsonParse.Online)
  preguntaCorrecta = jsonParse.Online.respuestaCorrecta; 
  question.textContent   = jsonParse.Online.pregunta;
  questionOne.textContent= jsonParse.Online.respuestas1;inputQuestion.checked = false;   inputQuestion.setAttribute('value',jsonParse.Online.respuestas1);
  questionTwo.textContent= jsonParse.Online.respuestas2;inputQuestion1.checked = false;   inputQuestion1.setAttribute('value',jsonParse.Online.respuestas2);
  questionTree.textContent= jsonParse.Online.respuestas3;inputQuestion2.checked = false;  inputQuestion2.setAttribute('value',jsonParse.Online.respuestas3);
  loadingQuestionLuser.style.display = "none";
  contenedorQuestionLuser.style.display = "block";
  iniciarVerificacion();
  					 let headers = { 
		 method : "post",
		 body : JSON.stringify({
		 "pregunta" : " ",
		 "respuestas1" : " ",  
		 "respuestas2" : " ",
		 "respuestas3" : " ",
		 "respuestaCorrecta" : " ",
		 "funcion" : "conectionQuestionUser",
         "name" : `${nameGanadorVercionLuser}`,
         "status" : `respondiendo`,
         "userConection" : `${nameGanadorVercionLuser}`,
     }),
	 "headers" : {"Content-Type" : "application/json"}
     }
     fetch('http://testgranada.sytes.net',headers)
     .then(serverJson => serverJson.json())
     .then(json => {
   if(json.mensaje === "ok")   	console.log("avisando que estas eligiendo ...")
     })
	}
})
}
function iniciarVerificacion(){
	let checkBox = document.querySelectorAll('.inputCheckbox')
	checkBox.forEach(e=>{
			e.addEventListener('change',()=>{
				let status;
				if(e.value === preguntaCorrecta){status = "gano"; 
  document.getElementById('statusQuestionWinP').textContent = "Ganaste la corona";
  document.querySelector('.corona1').style.display = "block";
  document.getElementById('animationCorrect1').style.display = "block";
  // document.getElementById('statusQuestionWinIMG').src = avatar;
				animationCorrect.style.display = "block";correctoQuestion.play();}
					else { status = "perdio";
  document.getElementById('statusQuestionWinP').textContent = "Te robaron la corona";
  document.querySelector('.corona1').style.display = "none";
  document.getElementById('animationCorrect1').style.display = "none";
  // document.getElementById('statusQuestionWinIMG').src = avatar;
					 animationCorrect.style.display = "none";}
					 let headers = { 
		 method : "post",
		 body : JSON.stringify({
		 "pregunta" : " ",
		 "respuestas1" : " ",  
		 "respuestas2" : " ",
		 "respuestas3" : " ",
		 "respuestaCorrecta" : " ",
		 "funcion" : "conectionQuestionUser",
         "name" : `${nameGanadorVercionLuser}`,
         "status" : `${status}`,
         "userConection" : `${nameGanadorVercionLuser}`,
     }),
	 "headers" : {"Content-Type" : "application/json"}
     }
     fetch('http://testgranada.sytes.net',headers)
     .then(serverJson => serverJson.json())
     .then(async(jsonP) => {
     	let json = await jsonP;
   if(json.mensaje === "ok"){
   	setTimeout(()=>{
  // contenedorQuestionLuser.style.opacity = "0";
  setTimeout(()=>{
  contenedorQuestionLuser.style.display = "none";
  document.querySelector('.intermedioViajeAlchat').style.display = "block";
  setTimeout(()=>{
  document.querySelector('.intermedioViajeAlchat').style.display = "none";
    inicializarGamesChat(callback_infoGanador,callback_ganador,callback_position)
  },1000)
  })
   	},500)
   }  

        })
	})
	})
}