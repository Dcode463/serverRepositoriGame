
//request
/*
   nameOnline : invitacionInfo.nameUserChat,
   avatarOnline : invitacionInfo.avatarUserChat,
   nameLocal : users,
   avatarLocal : imglocal.src  
*/
const subBodyJson = document.querySelector('.contenedorJson');
const elementoDeEspera = document.querySelector('.loadingConectionUsers');
const elementoDeEsperaPStatus = document.getElementById('statusConectionUsersP');
let pChatAcedorVeriVersion2 = document.querySelector('.statusConectionUsersDiv2');
let pChatAcedorVeriVersion2Status = document.getElementById('statusConectionUsers2')
const contenedorChatSpan2 = document.getElementById('spanNoti');
let subBody2 = document.querySelector('.subBody');
let loaderViajeHaciaElServidor2 = document.querySelector('.loadderViajeAlServer');
let avatarOnlineVariable;
let nameUserOnlineVariable;
let avatarLocalVariable;
let nameLocalVariable;
let serverConectionVersion;
function conectionUser(infoUsers,servidor){
/* nameOnline : invitacionInfo.nameUserChat,
   avatarOnline : invitacionInfo.avatarUserChat,
   nameLocal : users,
   avatarLocal : imglocal.src  */
   nameLocalVariable = infoUsers.nameLocal;
 avatarOnlineVariable = infoUsers.avatarOnline;
 nameUserOnlineVariable = infoUsers.nameOnline;
 // avatarOnlineVariable = infoUsers.nameLocal;
 avatarLocalVariable = infoUsers.avatarLocal;
 serverConectionVersion = servidor;
 let headers = { 
  method : "post",
  body : JSON.stringify({
  	  	"funcion" : "conectionUsers",
	 	"name" : `${infoUsers.nameLocal}`,
        "userConection" : `${infoUsers.nameLocal}`,
        "chat" : ` `,
        "avatar" : `${infoUsers.avatarLocal}`,
        "request" : "false",
        "respuestaRequest" : "ok",
        "Datagames":{
    "status" : "esperando",
    "data" : [
      [" "," "," "],
      [" "," "," "],
      [" "," "," "]
    ]
  }
  }),
  headers:{"Content-Type" : "application/json"}
 }
fetch(servidor,headers)
.then(respuestaServer => respuestaServer.json())
.then(respuestaJson => {
   console.log(respuestaJson)
	if (respuestaJson.mensaje === "ok" ){
 setTimeout(()=>{
    viajerAlServer()
 },1000)
   }
})
}
let cuentaRegresiva2 = 3;
function viajerAlServer(){
 cuentaRegresiva2--
 contenedorChatSpanOne.style.display = "none"
 pChatAcedorDiv.style.display = "block";
 pChatAcedorVeriVersion2Status.style.display = "block"
 pChatAcedorVeriVersion2.style.display = "block";
  pChatAcedorVeriVersion2Status.innerHTML = `Preparando viaje al servidor nodeGames en ${cuentaRegresiva2}`;
 if(cuentaRegresiva2 > 0 ) setTimeout(()=>{
   viajerAlServer()
 },1000)
 if(cuentaRegresiva2 === 0){
contenedorChatSpan2.style.display ="none";
subBodyJson.style.display = "none"
subBody2.style.display = "none";
loaderViajeHaciaElServidor.style.display = "block";
document.getElementById('imagesViajeAlSever').src= "Games/loaderImages/7.gif"
setTimeout(()=>{startDataGamesXO({
   nameUserLocal : nameLocalVariable,
   nameUserOnline : nameUserOnlineVariable,
   avatarLocal : avatarLocalVariable,
   avatarOnline : avatarOnlineVariable,
   status : "nook"
},false,false,serverConectionVersion)},1000)
 }
}