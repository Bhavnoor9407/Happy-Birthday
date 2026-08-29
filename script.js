const messages = [
"Hope You Have An Amazing Day!",
"Let's Celebrate!"
];
let i = 0;
const texti = document.getElementById("texti");
const final = document.getElementById("final");
const buttons = document.querySelector(".buttons");
const nobtn = document.getElementById("no");
setInterval(() => {

    texti.classList.add("hide");

    setTimeout(()=> {
       
        if (i>= messages.length){
            texti.style.display = "none";
            final.style.display = "block";
            buttons.style.display = "flex";
        }
        else{
        texti. textContent = messages[i];
        texti.classList.remove("hide");
        }
        i++;
    }, 500);

}, 3000);
function bhagooo(){
    const btn = document.getElementById('no')
    const x = Math.floor(Math.random()*300)+1
    const y = Math.floor(Math.random()*300)+1
    btn.style.top=x+"px"
    btn.style.left=y+"px"
}
document.addEventListener("mousemove",(event) =>{
    const rect = nobtn.getBoundingClientRect();
    const btnX = rect.left + rect.width/2;
    const btnY = rect.top + rect.height/2;
    const distance = Math.sqrt((event.clientX-btnX)**2 + (event.clientY-btnY)**2)
    if (distance<38){
        bhagooo();
    }
});
function Iloose() {
const btn = document.getElementById("no");
if (btn.textContent === "Noo"){
    btn.textContent = "Still Noo..😭";
}
else {
    alert("Are you really sure? ");
}
}