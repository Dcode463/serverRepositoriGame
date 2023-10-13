const servidor = `http://testgranada.sytes.net`;
const input = document.getElementById('userName');
const img = document.getElementById('userAvatar');
window.addEventListener('load',()=>{
	document.querySelector('.loadderViajeAlServer').style.display = "none";
	document.querySelector('.subBody').style.display = "block";
	audioStartUp.play()
})
{
  const h1Animation = document.querySelector('.h1AnimationStart');
  const pAnimationStart = document.querySelector('.pAnimationStart');
  const p1AnimationStart = document.querySelector('.p1AnimationStart');
  const p2AnimationStart = document.querySelector('.p2AnimationStart');
  const p3AnimationStart = document.querySelector('.p3AnimationStart');
  const p4AnimationStart = document.querySelector('.p4AnimationStart');
  const p6AnimationStart = document.querySelector('.clickEnter');
  animation()
async function animation (){
	
	const pAnimation = await setTimeout(()=>{
     pAnimationStart.style.opacity = "1"
	},500);
	const p1Animation = await setTimeout(()=>{
     p1AnimationStart.style.opacity = "1"
	},700);
	const p2Animation = await setTimeout(()=>{
     p2AnimationStart.style.opacity = "1"
	},800);
	const p3Animation = await setTimeout(()=>{
     p3AnimationStart.style.opacity = "1"
	},900);
	const p4Animation = await setTimeout(()=>{
     p4AnimationStart.style.opacity = "1"
	},1000);

	const p6Animation = await setTimeout(()=>{
     p6AnimationStart.style.opacity = "1";
     p6AnimationStart.classList.add("animationFlitEnter")
	},1500);
}
}

	{
  const p7AnimationStart = document.querySelector('.clickEnterResponsive');
const contenedorLogin = document.querySelector('.LoginUserGame');
const contenedorStartAnimation = document.querySelector('.startAnimation')
const body = document.querySelector('body');
const responsive = document.getElementById('responsiveDiv');
let p6AnimationStart = document.querySelector('.clickEnter');
const clickEnterAnimacion = document.querySelector('.clickEnter');
const contenedorStartAnimationGet = contenedorStartAnimation.getAttribute('style');
if (contenedorStartAnimation.style.display === "block") {
	  body.addEventListener('keydown', (e)=>{
	  	audioStartUp.pause()
	  	if (e.key === "Enter" && p6AnimationStart.style.opacity === "1" ) {
transitionLOgin();
async function transitionLOgin (){  

// contenedorStartAnimation.style.opacity = "0";
    p6AnimationStart.style.display = "none";
    p7AnimationStart.style.display = "none"
    contenedorStartAnimation.style.transform = "scale(1900%)";
    const temStartAnimation = await setTimeout(()=>{
	contenedorStartAnimation.style.display = "none";
},500)
 const temStartAnimation2  = await setTimeout(()=>{contenedorLogin.style.opacity = "1";},1000) 
}
}
});	
	  if(contenedorStartAnimation.style.display === "block"){
  document.querySelector('html').addEventListener('click', (e)=>{
  	audioStartUp.pause()
transitionLOgin();
 
async function transitionLOgin (){  
	
// contenedorStartAnimation.style.opacity = "0";
    p6AnimationStart.style.display = "none";
    p7AnimationStart.style.display = "none"
    contenedorStartAnimation.style.transform = "scale(1900%)";
    const temStartAnimation = await setTimeout(()=>{
	contenedorStartAnimation.style.display = "none";
},200)
 const temStartAnimation2  = await setTimeout(()=>{contenedorLogin.style.opacity = "1";},1000) 
}
})
}

}

}

// // /*Envio de peticion "newuser*/
asyncFunction();
async function asyncFunction (){

const buttonEnvioPeticionNewUserOne = document.getElementById('buttonEnvioPeticionNewUser')	;
let pStatus = document.getElementById('statusConectionUsers');


////////////////////////////////////////////////////////////////////
buttonEnvioPeticionNewUserOne.addEventListener('click',()=>{
const promiseVerificacionInput = new Promise(resolve=>{
  let whatInputStatus = true;
  if (input.value.length === 0) resolve({ 
     status : "error",
     TypeError : "Ingrese un nombre valido por favor"
    });  if (input.value === " ") resolve({ 
     status : "error",
     TypeError : "Ingrese un nombre valido por favor, ingreso un espacio y no es valido"
    });
    if(input.value.length > 8) resolve({
    	 status :"error",
    	 TypeError : `Has ingresado <b style="color:red;">${input.value.length}</b>, solo es aceptable 8 caracteres` 
    })
for(let i=0; i < input.value.length; i++){
	if(input.value.charAt(i) === "/" ||  input.value.charAt(i) === "\\" || input.value.charAt(i) === ":" || input.value.charAt(i) === "*" 
		|| input.value.charAt(i) === "?" || input.value.charAt(i) === `"` || input.value.charAt(i) === "<" || input.value.charAt(i) === ">" 
         || input.value.charAt(i) === "|"  || input.value.charAt(i) === " ")
		{ 
			whatInputStatus = false
			resolve({ 
           status : "error",
           TypeError : `Ups, has ingresado el caracter <b style="color:red;">${input.value.charAt(i)}</b> y no es aceptable <b style="color:grey;">(Asegurate de no escribir un espacio)</b>`
         })
     }
}
if(whatInputStatus){
elementoHtml()
 resolve({
	status : "ok",
	exito : "OK, vamos"
})
}
})
promiseVerificacionInput.then(data => { 
	 if(data.status === "error") pStatus.innerHTML = data.TypeError
	 else if(data.status === "ok"){
	 	pStatus.innerHTML = data.exito
	 	  document.querySelector('.loginPrompt').style.display = "block";
	 	  document.querySelector('.statusRepositori').style.display = "block";
	 	  document.querySelector('.LoginUserGame').style.display = "none";
	const peticionUsuarios = new XMLHttpRequest();

	 peticionUsuarios.addEventListener('load', async ()=>{ 
	 	let pStatus = document.getElementById('PstatusRepositori');
        let respuestaServer = await JSON.parse(peticionUsuarios.response);
        let respuestaAndConvert = await JSON.parse(respuestaServer);
        let respuestaAndConvertArray = Object.keys(respuestaAndConvert)
       const verificacionUsers = respuestaAndConvertArray.some(user => user === input.value) 
       console.log(verificacionUsers)
       if (verificacionUsers){
       pStatus.textContent = "Ya tienes un repositorio";
                  document.querySelector('.statusRepositori').style.opacity = "0";
             const time0 =   setTimeout(()=>{
               	document.querySelector('.contenedorJson').style.opacity = "1";                 
               }, 100)
              const time1 =  setTimeout(()=>{
               	document.querySelector('.contenedorJson').style.display = "block";
              },500)
               const time2 =  setTimeout(()=>{document.querySelector('.statusRepositori').style.display = "none";startInterface()},1000);
       }else if(verificacionUsers === false){ 
 let headers = {
 	 method : "post",
 	 body : JSON.stringify({
 	 	"funcion" : "newUser",
		"status" : "offline",
		"name" : `${input.value}`,
		"avatar" : `${img.src}`,
    "friends" : [],
    "trofeos" : " "
 	 }),
 	 headers : {
 	 	"Content-Type" : "application/json"
 	 }
 }   
 fetch(servidor, headers)
 .then(respuestaServer => respuestaServer.json())
 .then(respuestaJson => pStatus.textContent = respuestaJson.mensaje)
       	 pStatus.textContent = "creando repositorio";
       	 const peticionRepositori =  new XMLHttpRequest();
       	 peticionRepositori.addEventListener('readystatechange',  ()=>{
       	     if (pStatus.readyState === 1)  pStatus.textContent = "verificando servidor"; 
             else if (pStatus.readyState === 2)  pStatus.textContent = "enviando peticion"; 
             else if (pStatus.readyState === 3)  pStatus.textContent = "peticion escuchada"; 
       	 })
          peticionRepositori.addEventListener('load', async () =>{ 
          	let respuesta = await JSON.parse(peticionRepositori.response)
              pStatus.textContent = respuesta.mensaje;
              console.log(respuesta)
              if (respuesta.mensaje === "ok" ) {
              	elementoHtml()
               document.querySelector('.statusRepositori').style.opacity = "0";
             const time0 =   setTimeout(()=>{
               	document.querySelector('.contenedorJson').style.opacity = "1";                 
               }, 100)
              const time1 =  setTimeout(()=>{
               	document.querySelector('.contenedorJson').style.display = "block";
              },500)
               const time2 =  setTimeout(()=>{document.querySelector('.statusRepositori').style.display = "none";startInterface()},1000);
              }
              else if(respuesta.mensaje === "error"){
              	  document.querySelector('.LoginUserGame').style.display = "none";
	 	          document.querySelector('.errorSever').style.display = "block";
              }
           });
          peticionRepositori.open('POST', servidor);
          peticionRepositori.setRequestHeader('Content-Type', 'application/json;charset=UTF8')
          peticionRepositori.send(JSON.stringify({
          	 "name" : input.value,
          	  "funcion" : "createNewRepositori",
          	  "nameRepositori" : input.value
          }))
       }
	  })
	 peticionUsuarios.open('POST', servidor);
	 peticionUsuarios.setRequestHeader('Content-Type', 'application/json;charset=UTF8')
	 peticionUsuarios.send(JSON.stringify({
	 	  "funcion":"requestUsers",
	 	  "name" : input.value,
	 }))

}
})
})
}
function startInterface(){
		 let headers = { 
		 method : "post",
		 body : JSON.stringify({
		 "pregunta" : " ",
		 "respuestas1" : " ",
		 "respuestas2" : " ",
		 "respuestas3" : " ",
		 "respuestaCorrecta" : " ",
		 "funcion" : "conectionQuestionUser",
         "name" : `${input.value}`,
         "status" : "",
         "userConection" : `${input.value}`,
     }),
	 "headers" : {"Content-Type" : "application/json"}
         		 }
		 fetch('http://testgranada.sytes.net',headers)
		 .then(dataServer=> dataServer.json())
		 .then(json => {})
		const promesaVerificacionServidor = new Promise((resolve)=>{ /////////////////promesaServerReponse//////////////////////////
	
	let headers = {
		 method : "post",
		 body: JSON.stringify({
		 	"funcion" : "requestUsers", "name" : `${input.value}`
		 }),
		 headers:{"Content-Type" : "application/json"}
	}
	fetch(servidor, headers)
	.then(respuestaServer => respuestaServer.json())
	.then(async (respuestaJsonOne) => {
		let respuestaJson = await JSON.parse(respuestaJsonOne)
	const peticionNewUser = new XMLHttpRequest();
	// let respuesta = JSON.parse(peticionNewUser.response);
	const data = {
		"funcion" : "newUser",
		"status" : "online",
		 "name" : `${input.value}`,
		 "avatar" : `${img.src}`,
      "friends" : [],
      "trofeos" : 0 

	}
	// alert(respuestaJson)
	let arrayAGuardar = respuestaJson[`${input.value}`].friends
	let guardarTrofeos = respuestaJson[`${input.value}`].trofeos
  data.friends = arrayAGuardar[0];
  data.trofeos = guardarTrofeos;
	peticionNewUser.addEventListener('load', ()=>{
	let imgUserNav = document.getElementById('imgNavUsers');
	imgUserNav.setAttribute("src", img.src);
	imgUserNav.setAttribute("class", input.value)
	let respuesta = JSON.parse(peticionNewUser.response);
	pStatus.textContent = respuesta.mensaje;
   resolve(peticionNewUser.response);

		  // if () {}
	})
   peticionNewUser.open('POST',servidor);
   peticionNewUser.setRequestHeader("Content-Type","application/json;charset=UTF8")
   peticionNewUser.send(JSON.stringify(data));
})//requestUser json
// {


// window.addEventListener('blur',async ()=>{
// 		let headers = {
// 		 method : "post",
// 		 body: JSON.stringify({
// 		 	"funcion" : "requestUsers", "name" : `${input.value}`
// 		 }),
// 		 headers:{"Content-Type" : "application/json"}
// 	}
// 	fetch(servidor, headers)
// 	.then(respuestaServer => respuestaServer.json())
// 	.then(respuestaJsonOne => {
// 		let respuestaJson = JSON.parse(respuestaJsonOne)
// 	let time =  setTimeout(()=>{
// 	let peticionNewUser =  new XMLHttpRequest();
// 			let data = {
// 		"funcion" : "newUser",
// 		"status" : "offline",
// 		 "name" : `${input.value}`,
// 		 "avatar" : `${img.src}`,
//       "friends" : [] 
// 	}
// 			let arrayAGuardar = respuestaJson[`${input.value}`].friends
//          data.friends = arrayAGuardar[0];
// 	peticionNewUser.addEventListener('load', async ()=>{
// 		let respuesta = await JSON.parse(peticionNewUser.response);
		
// 		  pStatus.textContent = await respuesta.mensaje;
// 	})
//    peticionNewUser.open('POST',servidor);
//    peticionNewUser.setRequestHeader("Content-Type","application/json;charset=UTF8")
//    peticionNewUser.send(JSON.stringify(data));
// 	},5000)
// })//requestUser json

// })
// }

// {
// window.addEventListener('focus',(e)=>{
// 		let headers = {
// 		 method : "post",
// 		 body: JSON.stringify({
// 		 	"funcion" : "requestUsers", "name" : `${input.value}`
// 		 }),
// 		 headers:{"Content-Type" : "application/json"}
// 	}
// 	fetch(servidor, headers)
// 	.then(respuestaServer => respuestaServer.json())
// 	.then(respuestaJsonOne => {
// 		let respuestaJson = JSON.parse(respuestaJsonOne)

// 	let peticionNewUser = new XMLHttpRequest();
// 	let data = {
// 		"funcion" : "newUser",
// 		"status" : "online",
// 		 "name" : `${input.value}`,
// 		 "avatar" : `${img.src}`,
//      "friends" : []
      
// 	}
// 	let arrayAGuardar = respuestaJson[`${input.value}`].friends
// 	data.friends = arrayAGuardar[0];
// 	peticionNewUser.addEventListener('load', ()=>{
// 		let respuesta = JSON.parse(peticionNewUser.response);
// 		  pStatus.textContent = respuesta.mensaje

       
// 	})
//    peticionNewUser.open('POST',servidor);
//    peticionNewUser.setRequestHeader("Content-Type","application/json;charset=UTF8")
//    peticionNewUser.send(JSON.stringify(data));
// e.returnValue = "Seguro?"
// 	})//requestUser json

// })
// }
	})
		promesaVerificacionServidor.then(async (datosRecibidos) => {
	const respuestaServer = JSON.parse(datosRecibidos);
if(respuestaServer.mensaje === "Error"){
	 document.querySelector('.errorSever').style.display = "block";
	 	 document.querySelector('.subBody').style.display = "none";
}
})
}
	

////////ElementHTML
function elementoHtml(){
const load = document.querySelector('.load');
const loader = document.querySelector('.loader')
const peticionUser = new XMLHttpRequest();  ////////
const pstatus = document.getElementById('pStatus');
const usersP = document.getElementById('users');
const pstatusConection = document.getElementById('statusConection');
const contenedorStatus = document.querySelector('.contenedorStatusServer')
peticionUser.addEventListener('readystatechange',()=>{
	if (peticionUser.status === 0) pstatus.textContent = "Ups, el servidor esta desconectado, espere un momento";
		 if (peticionUser.readyState === 1) pstatus.textContent = "Buscando servidor";
		  if (peticionUser.readyState === 2) pstatus.textContent = "Entrando a servidor";
		    if(peticionUser.readyState === 3) pstatus.textContent= "Descargando Respuesta";
		    if(peticionUser.status === 200 || peticionUser.status === 201) {
		    	pstatusConection.innerHTML= `Conectado a <h6>${servidor}</h6>`;
                contenedorStatus.style.display = "none";
 		    	load.style.display = "inline-block";
		    	loader.style.display = "none";
		    	loader.style.position = "absolute";
		    }
})
peticionUser.addEventListener('load', ()=>{
	 try{
	 	const respuestaDeServidorUser = JSON.parse(peticionUser.response)
	 	if (respuestaDeServidorUser.datos === "error") pstatusConection.innerHTML = `Respuesta del servidor ${respuestaDeServidorUser.error}`;
	 	if (respuestaDeServidorUser.datos === "error" && respuestaDeServidorUser.funcion === "closed"){
	 	if (respuestaDeServidorUser.funcion === "closed") {setTimeout(()=>{location.reload()},1000);}
	 }
	 		let respuestaServer = JSON.parse(peticionUser.response);
	 		let respuestaServerConvert = JSON.parse(respuestaServer);
	 		// let imgUserNav = document.getElementById('imgNavUsers');
	 		// let iAmigos = document.getElementById('pIAmigos');
	 		// imgUserNav.setAttribute("src", respuestaServerConvert[input.value].avatar);
	 		// iAmigos.textContent = respuestaServerConvert[input.value].friends[0].length
      startUsersFunctions(input.value)
	 		// console.log(respuestaServerConvert[input.value].name)
	 		// imgUserNav.setAttribute("class",respuestaServerConvert[input.value].name);
	 		let respuestaAndConvertArray = Object.keys(respuestaServerConvert);
	 		   let iAmigos = document.getElementById('pIAmigos');
            iAmigos.textContent = respuestaServerConvert[input.value].friends[0].length
	 		let respuestaAndConvertArrayConvertUser1 = respuestaAndConvertArray.filter(user => user != input.value  )
	 		let respuestaAndConvertArrayConvertUser = respuestaAndConvertArrayConvertUser1.filter(user => user != "nuevosDatos")
		     if(peticionUser.status === 200){
		     	const data = JSON.parse(peticionUser.response);
		     	pstatus.innerHTML= `Servidor <h6>${servidor}</h6>`;
		     	console.log(peticionUser.status) 
		     	// verificacionStatusFunction();
		     }
		 }catch(e){console.log(`Ups hay un error : ${e}`)}
})
try{
peticionUser.open('POST',servidor);
peticionUser.setRequestHeader("Content-Type","application/json;charset=UTF8")
peticionUser.send(JSON.stringify({
	"funcion" : "requestUsers",
	"name" : input.value,
}));
}catch(e) { console.error(e)}
}

