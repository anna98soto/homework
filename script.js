//se necesita saber el genero
//se necesita saber la edad
//si es hombre mayor se necesita saber si ya hizo el servicio militar, y vacuna contra el sifilis
//si es mujer mayo se necesita saber cuantos embarazos ha tenido, y cuantos hijos ha tenido no se puede tener menos 1 hijo
//menor de edad, si se vacuno contra el sarampion

//generos posibles [masculino, femenino]
let genero = "";
let edad = 0;
let embarazos = 0;
let hijos = 0;
let servicioMilitarHecho = false;
let vacunaSifilis = false;
let vacunaSarampion = false;

const edadInput = document.getElementById("edad");
const sarampionDiv = document.getElementById("sarampion");

const checkMasculino = document.getElementById("check-masculino");
const checkFemenino = document.getElementById("check-femenino");

const divMasculino = document.getElementById("hombre");
const divFemenino = document.getElementById("mujer");

const hijosInput = document.getElementById("hijos");
hijosInput.value = hijos;
const embarazosInput = document.getElementById("embarazos");
embarazosInput.value = hijos;

divMasculino.hidden = true;
divFemenino.hidden = true;

edadInput.value = edad;

hijosInput.addEventListener("change", (e) => {
  if (e.target.value < 0) {
    hijosInput.value = 0;
  } else {
    hijos = parseInt(e.target.value);
  }
});
embarazosInput.addEventListener("change", (e) => {
  if (e.target.value < 0) {
    embarazosInput.value = 0;
  } else {
    embarazos = parseInt(e.target.value);
  }
});
checkMasculino.addEventListener("change", (e) => {
  const checked = e.target.checked;
  if (checked) {
    genero = "masculino";
    checkFemenino.checked = false;
  } else {
    genero = "";
  }
  verificarMostrarInputs();
});

checkFemenino.addEventListener("change", (e) => {
  const checked = e.target.checked;
  if (checked) {
    genero = "femenino";
    checkMasculino.checked = false;
  } else {
    genero = "";
  }
  verificarMostrarInputs();
});

edadInput.addEventListener("change", (e) => {
  if (e.target.value < 0) {
    edadInput.value = 0;
  }
  edad = parseInt(e.target.value);
  verificarMostrarInputs();
});

const verificarMostrarInputs = () => {
  if (genero === "femenino" && edad >= 18) {
    divFemenino.hidden = false;
  } else {
    divFemenino.hidden = true;
  }
  if (genero === "masculino" && edad >= 18) {
    divMasculino.hidden = false;
  } else {
    divMasculino.hidden = true;
  }
  if (edad < 18) {
    sarampionDiv.hidden = false;
  } else {
    sarampionDiv.hidden = true;
  }
};
