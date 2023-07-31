import { caste } from "./js1";
import { name } from "./js1";

const arry = ["one","two","three"];
console.log(arry)

const ar = ["this will be replace with  html string"];
document.getElementById('arryintostring').innerHTML = ar.toString()


let arrfunction = (name,age) => {
    return `This is ${name} - ${age}`;
}
console.log(arrfunction('RAQEEB',22))

let letfunciton = (name,age) => `This is name ${name} - ${age}`;
console.log(letfunciton('Saneel',22))

// a function from another file 

const exfunc = (caste());
// consol.log(name);
document.body.innerHTML = name;