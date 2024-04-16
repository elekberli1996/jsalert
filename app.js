const btn=document.querySelector(".btn");
const alert_boxs=document.querySelector(".alert_boxs");

const add=()=>{
    let number=Math.trunc(Math.random()*4+1);
    let a=Math.trunc(Math.random()*255);
    let b=Math.trunc(Math.random()*255);
    let c=Math.trunc(Math.random()*255);
    const element=document.createElement("div");
    element.classList.add("alert_box");
    element.textContent=`message ${number}`;
    console.log(`color:rgb(${a},${b},${c})`);
   
     element.setAttribute("style",`color:rgb(${a},${b},${c})`)
    alert_boxs.append(element);
   

    setTimeout(() => {
          alert_boxs.lastChild.remove();
    }, 3200);

   


}

btn.addEventListener("click",add);