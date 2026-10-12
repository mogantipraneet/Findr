
let path = "";
let q=document.getElementById("uploadimage");
let n=document.getElementById("container");
function post(){
    let d=document.createElement("div");
    let i=document.createElement("img");
    i.src=path;
    d.appendChild(i)
    n.appendChild(d)
    n.appendChild(document.createElement("hr"))

}



q.addEventListener("change", (e)=>{
    const file = e.target.files[0];
    if(file){
        path = URL.createObjectURL(file);
    }
})
let p=document.getElementById("btn");
p.addEventListener("click",post);