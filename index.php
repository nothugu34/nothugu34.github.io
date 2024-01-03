<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prueba 1</title>
</head>
<body>
    <section id="Eleccion">
        <p>¿Qué tipo de cuenta va registrar/logear?</p>
        <button id="botonCliente" onclick="showRegisterClient()">
            Cliente
        </button>
        <br>
        <button id="botonProveedor" onclick="showRegisterProveedor()">
            Proveedor
        </button>
    </section>

    <section id="Cliente" class="hidden">
        <article id="registerCliente">
            <form method="POST">
                <p>Bienvenido al apartado para registrarse como Cliente</p>
                <label for="txt1">Ingrese un usuario</label>
                <br>
                <input type="text" name="usuarioCliente" id="txt1" placeholder="Hugu34">
                <br><br>
                <label for="email1">Ingrese un email</label>
                <br>
                <input type="email" name="correoCliente" id="email1" placeholder="example@gmail.com">
                <br><br>
                <label for="regisClientPass1">Ingrese una contraseña</label>
                <br>
                <input type="password" id="regisClientPass1" name="contraseñaCliente" placeholder="12345">
                <br><br>
                <label for="regisClientPass2">Ingrese nuevamente su contraseña</label>
                <br>
                <input type="password" id="regisClientPass2" placeholder="12345">
                <br><br>
                <input type="submit" id="submit1">
                <br>
                <p id="paragraph1"></p>
            </form>
            <footer>
                ¿Ya tienes una cuenta? 
                <button id="buttonLoginClient">Logueate</button>
                <br><br>
                ¿Te equivocaste de opción y querías registrarte como Proveedor?
                <button id="buttonRegisterProveedorFromClient">Haz click aquí para cambiar a modo Proveedor</button>
            </footer>
        </article>

        <article id="loginCliente" class="hidden">
            <form method="POST">
                <p>¡Bienvenido de vuelta querido cliente!</p>
                <label for="txt2">Ingrese su nombre de usuario</label>
                <br>
                <input type="text" id="txt2" name="usuarioCliente">
                <br><br>
                <label for="loginClientPass">Ingrese su contraseña</label>
                <br>
                <input type="password" id="loginClientPass" name="contraseñaCliente">
                <br><br>
                <input type="submit" id="submit2">
                <br>
                <p id="paragraph2"></p>
            </form>
            <footer>
                ¿No tienes una cuenta? 
                <button id="buttonRegisterClient">Regístrate</button>
                <br><br>
                ¿Te equivocaste de opción y querías loguearte como Proveedor?
                <button id="buttonLoginProveedorFromClient">Haz click aquí para cambiar a modo Proveedor</button>
            </footer>
        </article>
    </section>

    <section id="Proveedor" class="hidden">
        <article id="registerProveedor">
            <form method="POST">
                <p>Bienvenido al apartado para registrarse como Proveedor</p>
                <label for="txt3">Ingrese un usuario</label>
                <br>
                <input type="text" name="usuarioProveedor" id="txt3" placeholder="Hugu34">
                <br><br>
                <label for="email2">Ingrese un email</label>
                <br>
                <input type="email" name="correoProveedor" id="email2" placeholder="example@gmail.com">
                <br><br>
                <label for="regisProvPass1">Ingrese una contraseña</label>
                <br>
                <input type="password" id="regisProvPass1" name="contraseñaProveedor" placeholder="12345">
                <br><br>
                <label for="regisProvPass2">Ingrese nuevamente su contraseña</label>
                <br>
                <input type="password" id="regisProvPass2" placeholder="12345">
                <br><br>
                <input type="submit" id="submit3">
                <br>
                <p id="paragraph3"></p>
            </form>
            <footer>
                ¿Ya tienes una cuenta? 
                <button id="buttonLoginProveedor">Logueate</button>
                <br><br>
                ¿Te equivocaste de opción y querías registrarte como Cliente?
                <button id="buttonRegisterClientFromProveedor">Haz click aquí para cambiar a modo Cliente</button>
            </footer>
        </article>

        <article id="loginProveedor" class="hidden">
            <form method="POST">
                <p>¡Bienvenido de vuelta querido proveedor!</p>
                <label for="txt4">Ingrese su nombre de usuario</label>
                <br>
                <input type="text" id="txt4" name="usuarioProveedor">
                <br><br>
                <label for="loginProvPass">Ingrese su contraseña</label>
                <br>
                <input type="password" name="contraseñaProveedor" id="loginProvPass">
                <br><br>
                <input type="submit" id="submit4">
                <br>
                <p id="paragraph4"></p>
            </form> 
            <footer>
                ¿No tienes una cuenta? 
                <button id="buttonRegisterProveedor">Regístrate</button>
                <br><br>
                ¿Te equivocaste de opción y querías loguearte como Cliente?
                <button id="buttonLoginClientFromProveedor">Haz click aquí para cambiar a modo Cliente</button>
            </footer>
        </article>
    </section>

    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
</body>
</html>