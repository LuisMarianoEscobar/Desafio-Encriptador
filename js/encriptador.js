//-----SEleccion deelementos//
const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".encriptar");
const aviso= document.querySelector(".texto-aviso");
const respuesta = document.querySelector(".evaluar");
const contenido= document.querySelector(".tarjeta-contenedor");
const btnCopiar= document.querySelector(".btn-copiar");
const btnDesencriptar=document.querySelector(".btn-desencriptar");





//---Boton deEncriptar---//
btnEncriptar.addEventListener("click",e=>  {
        e.preventDefault();
        let texto = txtEncriptar.value;
        let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );
        
        if (texto == "") {
            aviso.style.background= "#0A3871";
            aviso.style.color= "#FF0000";
            aviso.style.fontWeight= "800";
            aviso.textContent= "El campo de texto  no debe estar vacio"

            setTimeout(()=>{
                aviso.removeAttribute("style");
            }, 1500);

        }
        else if (texto !==txt) {
         aviso.style.background= "#0A3871";
            aviso.style.color= "#00FF00";
            aviso.style.fontWeight= "800";
            aviso.textContent= "No debe escribir acéntos ni caracteres especiales"

            setTimeout(()=>{
                aviso.removeAttribute("style");
            }, 1500);

        }
        else if ( texto !== texto.toLowerCase()){
            aviso.style.background= "#0A3871";
            aviso.style.color= "#FFFF00";
            aviso.style.fontWeight= "800";
            aviso.textContent= "El texto no debe contener mayúsculas"

            setTimeout(()=>{
                aviso.removeAttribute("style");
            }, 1500);
        }
        else {
        texto = texto.replace(/e/gi,"enter" );
        texto = texto.replace(/i/g,"imes" );
        texto = texto.replace(/a/gi,"ai" );
        texto = texto.replace(/o/gi,"ober" );
        texto = texto.replace(/u/gi,"ufat" );
        respuesta.innerHTML =texto;
        btnCopiar.style.visibility="inherit";
        contenido.remove();

        }
        
    });

    /*------Boton Desencriptar*/

    btnDesencriptar.addEventListener("click",e=>  {
        e.preventDefault();
        let texto = txtEncriptar.value;
        let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );
        
        if (texto == "") {
            aviso.style.background= "#0A3871";
            aviso.style.color= "#FF0000";
            aviso.style.fontWeight= "800";
            aviso.textContent= "El campo de texto  no debe estar vacio"

            setTimeout(()=>{
                aviso.removeAttribute("style");
            }, 1500);

        }
        else if (texto !==txt) {
         aviso.style.background= "#0A3871";
            aviso.style.color= "#00FF00";
            aviso.style.fontWeight= "800";
            aviso.textContent= "No debe escribir acéntos ni caracteres especiales"

            setTimeout(()=>{
                aviso.removeAttribute("style");
            }, 1500);

        }
        else if ( texto !== texto.toLowerCase()){
            aviso.style.background= "#0A3871";
            aviso.style.color= "#FFFF00";
            aviso.style.fontWeight= "800";
            aviso.textContent= "El texto no debe contener mayúsculas"

            setTimeout(()=>{
                aviso.removeAttribute("style");
            }, 1500);
        }
        else {
        texto = texto.replace(/enter/gi,"e" );
        texto = texto.replace(/ines/gi,"i" );
        texto = texto.replace(/ai/gi,"a" );
        texto = texto.replace(/ober/gi,"o" );
        texto = texto.replace(/ufat/gi,"u" );
        respuesta.innerHTML =texto;
        btnCopiar.style.visibility="inherit";
        contenido.remove();

        }
        
    });
 /*------Boton Copiar*/

 btnCopiar.addEventListener("click",e=>  {
    e.preventDefault();
    let copiar =respuesta;
    copiar.select();
    document.execCommand("copy");
 });
