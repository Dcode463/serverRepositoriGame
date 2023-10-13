// conection HTML Index 
const notificacionI = document.getElementById('Isolicitud');
let pChatAcedorVeriVersion = document.querySelector('.statusConectionUsersDiv2');
let pChatAcedorP = document.getElementById('statusConectionUsers2')
const contenedorChatSpan = document.getElementById('spanNoti');
let imglocal = document.getElementById('imgNavUsers')
let verificacionDerecursividad = true;
let users;
let serverlist;
// start functions
function startVerificacionNotificacionForUsers(user,servidor){
    serverlist = servidor;
    users = user
	const arrayNotifications = [];
    let headers = {
  method : "post",
 	body : JSON.stringify({
 		 "name" : `${user}`,
 		 "funcion" : "applicationCertification",
 	}),
 	headers:{"Content-Type" : "application/json"}
 }
let buttonCancelarBusquedaNotificacion = document.querySelectorAll('.cancelarVerificacionForNotificacion');
buttonCancelarBusquedaNotificacion.forEach(e=>{
e.addEventListener("click",()=>{
verificacionDerecursividad = false;
pChatAcedorP.innerHTML = "<p>Vericacion cancelada</p>";
setTimeout(()=>{
pChatAcedorP.innerHTML = "<p>Esperando tu prompt</p>"
       document.querySelector('.nav').style.opacity = "1";
   let buttonsOPacity = document.querySelectorAll('.buttonsNav')
   buttonsOPacity.forEach(e=>{
      e.style.display = "inline-block"
      verificacionDerecursividad = true
   })
},1000) 
})
})
 fetch(servidor,headers)
 .then(respuestaServer => respuestaServer.json())
 .then(respuestaJson => { 
 let respuestaModificadaJson = JSON.parse(respuestaJson);
 if (respuestaModificadaJson["Mensajes"].request === " " || respuestaModificadaJson["Mensajes"].request === "false" || respuestaModificadaJson["Mensajes"].request === undefined){
  if(verificacionDerecursividad){
contenedorChatSpan.style.display = "none";
 pChatAcedorVeriVersion.style.display = "inline-block";
setTimeout(()=>{startVerificacionNotificacionForUsers(user,servidor)},1000)
}
 }
 else if(respuestaModificadaJson["Mensajes"].request === "true"){
   callChatConection({
   	chat : respuestaModificadaJson["Mensajes"].chat,
   	nameUserChat : respuestaModificadaJson["Mensajes"].userName,
   	avatarUserChat : respuestaModificadaJson["Mensajes"].avatar 
   }/*pendiente en el servidor*/)
 }
 })
}
function callChatConection(invitacionInfo){
    notificacionRequestChat.play()
 const elementoAVerificar = document.querySelector('.chatSpan');
 if (contenedorChatSpan.contains(elementoAVerificar)) contenedorChatSpan.removeChild(elementoAVerificar)
 let fragmento = new DocumentFragment();
 let div = document.createElement('DIV'); div.classList.add('chatSpan');
 let img = document.createElement('IMG'); img.src = invitacionInfo.avatarUserChat;
 let p1 = document.createElement('P'); p1.innerHTML = invitacionInfo.nameUserChat;
 let p2 = document.createElement('P');p2.innerHTML = invitacionInfo.chat;
 let buttonTrue  = document.createElement('BUTTON'); buttonTrue.textContent = "Vamos"; buttonTrue.setAttribute('id','buttonTrueId'); buttonTrue.style.margin ="5px"
 let buttonFalse = document.createElement('BUTTON'); buttonFalse.textContent = "Negra"; buttonFalse.setAttribute('id','buttonFalseId'); buttonFalse.style.margin = "5px"
 div.appendChild(img);
 div.appendChild(p1);
 div.appendChild(p2);
 div.appendChild(buttonTrue);
 div.appendChild(buttonFalse);
 fragmento.appendChild(div);
 contenedorChatSpan.appendChild(fragmento) 
 contenedorChatSpan.style.display = "block";
 pChatAcedorVeriVersion.style.display = "none"
const buttonTrueElement = document.getElementById('buttonTrueId')
const buttonFalseElement = document.getElementById('buttonFalseId')
if (buttonFalseElement === undefined || buttonTrueElement === undefined) alert("error al aceptar invitacion")
 else if (buttonFalseElement != undefined || buttonTrueElement != undefined){
 	 buttonTrueElement.addEventListener('click', ()=>{
        //
    buttonTrueElement.style.background = "green"
    buttonTrueElement.style.color = "white"
 	  conectionUser({ 
   nameOnline : invitacionInfo.nameUserChat,
   avatarOnline : invitacionInfo.avatarUserChat,
   nameLocal : users,
   avatarLocal : imglocal.src  
 	  },serverlist)
 	 })
 	 // buttonFalseElement.addEventListener('click', ()=>{
 	 // let elementoChatJs = document.querySelector('.chatSpan')
   //   contenedorChatSpan.removeChild(elementoChatJs);
   //   contenedorChatSpan.style.display = "none";
   //   rechazoDeinvitacion()
 	 // })
 }
}
// function rechazoDeinvitacion(){
//   let elementoChatJs = document.querySelector('.chatSpan')
//   contenedorChatSpan.removeChild(elementoChatJs);
//   contenedorChatSpan.style.display = "none";
// /*funcion pendiente del servidor(eliminar lista de pendiente)*/
//     let headers = { 
//  method : "post",
//  body : JSON.stringify({
//  	 "funcion" :  "clearRequestUsers",
//  	 "name": `${users}`
//  }),
//  headers : {"Content-Type" : "application/json"}
//   }
//   fetch(serverlist,headers)
//   .then(dataServer => dataServer.json())
//   .then(jsonData => {
//   	const promesaVerificacionRespuestaServidor = new Promise(resolve => { 
//  if (jsonData.mensaje === "error") resolve({
//  	"status" : "error",
//  	"typeError" : `${jsonData.typeError}`
//  })
//  	else if(jsonData.mensaje === "ok") resolve({"status":"ok"})
//   })
// .then(data =>  { 
//  if(data.mensaje  === "error"){
//  	pChatAcedorVeriVersion.innerHTML= data.TypeError
//  }
//  else if(data.mensaje === "ok") {pChatAcedorVeriVersion.innerHTML="Has rechazado a tu amigo :(";setTimeout(()=>{pChatAcedorVeriVersion.innerHTML = "Esparando tu prompt"},2000)}
// })


//   })
// }