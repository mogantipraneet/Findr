let a = 2;
let b = "abcd";
const res = a+b;



function changeName(){
    let xyz = document.getElementById("test");
xyz.innerHTML = "praneet"
}
let praneet=document.getElementById("lulli");

praneet.addEventListener("click",changeName)

/* better way
praneet.addEventListener("click", ()=>{
    changeName();
});
*/
