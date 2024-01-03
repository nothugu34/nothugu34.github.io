const Eleccion = document.getElementById("Eleccion");
const registerCliente = document.getElementById("registerCliente");
const loginCliente = document.getElementById("loginCliente");
const registerProveedor = document.getElementById("registerProveedor");
const loginProveedor = document.getElementById("loginProveedor");
const Cliente = document.getElementById("Cliente");
const Proveedor = document.getElementById("Proveedor");

const botonCliente = document.getElementById("botonCliente");
botonCliente.addEventListener("click", showRegisterClient);
const buttonRegisterClient = document.getElementById("buttonRegisterClient");
buttonRegisterClient.addEventListener("click", showRegisterClient);
const buttonRegisterClientFromProveedor = document.getElementById("buttonRegisterClientFromProveedor");
buttonRegisterClientFromProveedor.addEventListener("click", showRegisterClient);
function showRegisterClient(){
    Eleccion.classList.add("hidden");
    Proveedor.classList.add("hidden");
    Cliente.classList.remove("hidden");
    loginCliente.classList.add("hidden");
    registerCliente.classList.remove("hidden");
}

const buttonLoginClient = document.getElementById("buttonLoginClient");
buttonLoginClient.addEventListener("click", showLoginClient);
const buttonLoginClientFromProveedor = document.getElementById("buttonLoginClientFromProveedor");
buttonLoginClientFromProveedor.addEventListener("click", showLoginClient);
function showLoginClient(){
    Eleccion.classList.add("hidden");
    Proveedor.classList.add("hidden");
    Cliente.classList.remove("hidden");
    registerCliente.classList.add("hidden");
    loginCliente.classList.remove("hidden");
}

const botonProveedor = document.getElementById("botonProveedor");
botonProveedor.addEventListener("click", showRegisterProveedor);
const buttonRegisterProveedor = document.getElementById("buttonRegisterProveedor");
buttonRegisterProveedor.addEventListener("click", showRegisterProveedor);
const buttonRegisterProveedorFromClient = document.getElementById("buttonRegisterProveedorFromClient");
buttonRegisterProveedorFromClient.addEventListener("click", showRegisterProveedor);
function showRegisterProveedor(){
    Eleccion.classList.add("hidden");
    Cliente.classList.add("hidden");
    Proveedor.classList.remove("hidden");
    loginProveedor.classList.add("hidden");
    registerProveedor.classList.remove("hidden");
}

const buttonLoginProveedor = document.getElementById("buttonLoginProveedor");
buttonLoginProveedor.addEventListener("click", showLoginProveedor);
const buttonLoginProveedorFromClient = document.getElementById("buttonLoginProveedorFromClient");
buttonLoginProveedorFromClient.addEventListener("click", showLoginProveedor);
function showLoginProveedor(){
    Eleccion.classList.add("hidden");
    Cliente.classList.add("hidden");
    Proveedor.classList.remove("hidden");
    registerProveedor.classList.add("hidden");
    loginProveedor.classList.remove("hidden");
}

const submit1 = document.getElementById("submit1");
submit1.addEventListener("click", function(event){
    registrarCliente(event);
})
function registrarCliente(event){
    const usuarioCliente = document.getElementById("txt1").value;
    const correoCliente = document.getElementById("email1").value;
    const passwordCliente = document.getElementById("regisClientPass1").value;
    const passwordClienteConfirm = document.getElementById("regisClientPass2").value;
    const paragraph1 = document.getElementById("paragraph1");
    if(usuarioCliente === "" || correoCliente === "" || passwordCliente === "" || passwordClienteConfirm === ""){
        event.preventDefault();
        paragraph1.innerHTML = "Por favor complete todos los campos"
        return;
    }
    if(passwordCliente !== passwordClienteConfirm){
        event.preventDefault();
        paragraph1.innerHTML = "Las contraseñas no coinciden";
        return;
    }
}

const submit2 = document.getElementById("submit2");
submit2.addEventListener("click", function(event){
    logearCliente(event);
})
function logearCliente(event){
    const usuarioCliente = document.getElementById("txt2").value;
    const passwordCliente = document.getElementById("loginClientPass").value;
    const paragraph2 = document.getElementById("paragraph2");
    if(usuarioCliente === "" || passwordCliente === ""){
        event.preventDefault();
        paragraph2.innerHTML = "Por favor complete todos los campos";
        return;
    }

}

const submit3 = document.getElementById("submit3");
submit3.addEventListener("click", function(event){
    registrarProveedor(event);
})
function registrarProveedor(event){
    const usuarioProveedor = document.getElementById("txt3").value;
    const correoProveedor = document.getElementById("email2").value;
    const passwordProveedor = document.getElementById("regisProvPass1").value;
    const passwordProveedorConfirm = document.getElementById("regisProvPass2").value;
    const paragraph3 = document.getElementById("paragraph3");
    if(usuarioProveedor === "" || correoProveedor === "" || passwordProveedor === "" || passwordProveedorConfirm === ""){
        event.preventDefault();
        paragraph3.innerHTML = "Por favor complete todos los campos"
        return;
    }
    if(passwordProveedor !== passwordProveedorConfirm){
        event.preventDefault();
        paragraph3.innerHTML = "Las contraseñas no coinciden";
        return;
    }
}
const submit4 = document.getElementById("submit4");
submit4.addEventListener("click", function(event){
    logearProveedor(event);
})
function logearProveedor(event){
    const usuarioProveedor = document.getElementById("txt4").value;
    const passwordProveedor = document.getElementById("loginProvPass").value;
    const paragraph4 = document.getElementById("paragraph4");
    if(usuarioProveedor === "" || passwordProveedor === ""){
        event.preventDefault();
        paragraph4.innerHTML = "Por favor complete todos los campos";
        return;
    }
}