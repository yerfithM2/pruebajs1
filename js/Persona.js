class Persona{

    constructor(id,nombre,email,clave,rol){
        this.id=id;
        this.nombre=nombre;
        this.email=email;
        this.clave=clave;
        this.rol=rol;
    }

    creaObjeto(){
      //input H.... para saber que estoy trayendo del html

      const idH=document.getElementById("cc").value;
      persona.id=idH;

      persona.leaObjeto();
    }
    leaObjeto(){
        document.getElementById("tablaD").innerHTML+=
        "<tr><td>"+persona.id+"</td></tr>";
    }
}