precio = 400000;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

function incrementa() {
  let cantidad = document.querySelector(".cantidad");
  let num_cantidad = Number(cantidad.textContent);
  let nuevo_valor = num_cantidad + 1;
  cantidad.innerHTML = nuevo_valor;
  total(nuevo_valor);
}

function decrementa() {
  let cantidad = document.querySelector(".cantidad");
  let num_cantidad = Number(cantidad.textContent);
  let nuevo_valor = num_cantidad - 1;
  if (nuevo_valor > 0) {
    cantidad.innerHTML = nuevo_valor;
    total(nuevo_valor);
  } else {
    cantidad.innerHTML = 0;
    total(0);
  }
}

function total(nuevo_valor) {
  let total_pagar = precio * nuevo_valor;
  document.querySelector(".valor-total").innerHTML = total_pagar;
}
