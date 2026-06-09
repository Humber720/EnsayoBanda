document.getElementById("formulario").addEventListener("submit", function(e) {
e.preventDefault();

const nombre = document.getElementById("nombre").value;
const curso = document.getElementById("curso").value;
const comentario = document.getElementById("comentario").value;
const asistencia = document.querySelector('input[name="asistencia"]:checked').value;

const mensaje = document.getElementById("mensaje");
mensaje.innerHTML = "✅ Gracias por confirmar su participación será registrado";
mensaje.style.color = "white";

// 🔥 VENTANA EMERGENTE
alert("✅ Gracias por confirmar su participación será registrado");

fetch("https://script.google.com/macros/s/AKfycbx0h9ZUebvG0euM3fRMNbaVrE-pmL3TVU3_nz0-NJ5101z2xo1tqexsHFEeZXJv4qI6wQ/exec", {
method: "POST",
headers: {
"Content-Type": "application/x-www-form-urlencoded"
},
body: new URLSearchParams({
nombre: nombre,
curso: curso,
asistencia: asistencia,
comentario: comentario
})
});

this.reset();
});
