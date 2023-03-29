import {ComponentWithBackReference, Prototype} from "./prototype";
import Database from "./singleton";

console.log("---SINGLETON---");

const db11=Database.getInstance()
const db12=Database.getInstance()


if(db11==db12){
  console.log('Si es la misma instancia')
}else{
  console.log("Las instancias son distintas")
}

console.log('---PROTOTPE---')

const p1=new Prototype()
p1.primitive='this is a test'
p1.component=new Date()
p1.circularReference=new ComponentWithBackReference(p1)

const p2=p1.clone()

if(p1.primitive==p2.primitive){
  console.log('el dato primitvo se ha mantenido despues de la clonacion')
}else{
  console.log("El dato primitivo es incorrecto")
}

if(p1.component==p2.component){
  console.log("el componente simple no ha sido clonado")
}else{
  console.log("El componete simple ha sido clonado")
}

if(p1.circularReference===p2.circularReference){
  console.log('El componente con referencia no ha sido clonado')
}else{
  console.log("El componente con referencia ha sido cloando")
}

if(p1.circularReference.prototype===p2.circularReference.prototype){
  console.log('Componente con referencia esta linkeado al objeto original')
}else{
  console.log('Componente con referencia esta linkeado al clon')
}

