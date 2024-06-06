// validation.js
document.getElementById("registerForm").addEventListener("submit", function(event) {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var genero = document.querySelector('input[name="genero"]:checked');
    var dataNascimento = document.getElementById("data_nascimento").value;
    var cidade = document.getElementById("cidade").value;
    var estado = document.getElementById("estado").value;
    var endereco = document.getElementById("endereco").value;

    if (!nome || !email || !telefone || !genero || !dataNascimento || !cidade || !estado || !endereco) {
        alert("Por favor, preencha todos os campos.");
        event.preventDefault();
    }
});
