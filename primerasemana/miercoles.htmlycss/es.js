document.addEventListener('DOMContentLoaded', function() {
    const loginFormContainer = document.getElementById('login-form-container');
    const registerFormContainer = document.getElementById('register-form-container');
    const toggleRegisterBtn = document.getElementById('toggle-register');
    const toggleLoginBtn = document.getElementById('toggle-login');

    toggleRegisterBtn.addEventListener('click', function() {
        loginFormContainer.classList.add('hidden');
        registerFormContainer.classList.remove('hidden');
    });

    toggleLoginBtn.addEventListener('click', function() {
        loginFormContainer.classList.remove('hidden');
        registerFormContainer.classList.add('hidden');
    });
  
});
document.getElementById('login-form').addEventListener('submit', function(event) {
    // Evita que se envíe el formulario de forma predeterminada
    event.preventDefault();

    // Tu código para procesar el inicio de sesión aquí

    // Redirige a la página de menú
    document.getElementById('enlace-redireccion').click();
});