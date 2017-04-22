
var todos=document.querySelectorAll(".tecla");
for (var i = 0; i < todos.length; i++) {
  todos[i].addEventListener("click",press);
}
var pantalla=document.querySelector("#display");

function press()
{
  switch(this.id)
  {
    case "menos":
      pantalla.append("-");
      break;
    case "por":
      pantalla.append("*");
      break;
    case "mas":
      pantalla.append("+");
      break;
    case "dividido":
      pantalla.append("/");
      break;
    case "igual":
      result();
      break;
    case "punto":
      pantalla.append(",");
      break;
    case "on":
      pantalla.innerHTML="0";
      break;
    default:
      pantalla.append(this.id);
      break;

  }
  function result()
  {
    var resultado=pantalla.innerHTML;
    pantalla.innerHTML=eval(resultado);

  }
  
}