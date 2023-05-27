"use strict";

// Array de cuentas disponibles (por lo menos 3 cuentas)
let cuentas = [
  {
    nombre: 'Mali',
    saldo: 2000,
    password: '12345'
  },
  {
    nombre: 'Gera',
    saldo: 2900,
    password: '1234'
  },
  {
    nombre: 'Maui',
    saldo: 67000,
    password: '123'
  }
];

/* Mostrar nombre de titulares de la cuenta */
function mostrarNombresCuentas() {
  let select = document.getElementById("cuentas");

  if (select) {
    for (let i = 0; i < cuentas.length; i++) {
      let option = document.createElement("option");
      option.value = i;
      option.textContent = cuentas[i].nombre;
      select.appendChild(option);
    }
  }
}

mostrarNombresCuentas();


let cuentaSeleccionada;

function ingresar() {
  let select = document.getElementById("cuentas");
  let passwordInput = document.getElementById("password");
  let selectedAccount = select.value;
  let password = passwordInput.value;

  if (password === cuentas[selectedAccount].password) {
    cuentaSeleccionada = cuentas[selectedAccount];
    document.getElementById("opciones").style.display = "block";
  } else {
    alert("Password incorrecto. Intenta nuevamente.");
  }

  passwordInput.value = "";
}

function consultarSaldo() {
  alert("Saldo actual: $" + cuentaSeleccionada.saldo);
}

function ingresarMonto() {
  let monto = prompt("Ingrese el monto a ingresar:");

  if (monto !== null) {
    monto = parseFloat(monto);

    if (isNaN(monto)) {
      alert("Monto inválido. Intenta nuevamente.");
    } else {
      cuentaSeleccionada.saldo += monto;
      alert("Monto ingresado: $" + monto + "\nNuevo saldo: $" + cuentaSeleccionada.saldo);
    }
  }
}

function retirarMonto() {
  let monto = prompt("Ingrese el monto a retirar:");

  if (monto !== null) {
    monto = parseFloat(monto);

    if (isNaN(monto)) {
      alert("Monto inválido. Intenta nuevamente.");
    } else {
      if (monto > cuentaSeleccionada.saldo) {
        alert("Saldo insuficiente para retirar el monto solicitado.");
      } else if (monto > 7000) {
        alert("El monto máximo para retirar es de $7000.");
      } else if (monto < 100) {
        alert("El monto mínimo para retirar es de $100.");
      } else {
        cuentaSeleccionada.saldo -= monto;
        alert("Monto retirado: $" + monto + "\nNuevo saldo: $" + cuentaSeleccionada.saldo);
      }
    }
  }
}