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
function bhagooo() {

    const btn = document.getElementById("no");

    const padding = 20;

    const maxX = window.innerWidth - btn.offsetWidth - padding;
    const maxY = window.innerHeight - btn.offsetHeight - padding;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    btn.style.left = x + "px";
    btn.style.top = y + "px";
}
document.addEventListener("mousemove",(event) =>{
    const rect = nobtn.getBoundingClientRect();
    const btnX = rect.left + rect.width/2;
    const btnY = rect.top + rect.height/2;
    const distance = Math.sqrt((event.clientX-btnX)**2 + (event.clientY-btnY)**2)
    if (distance<36){
        bhagooo();
    }
});
function Iloose() {
    const btn = document.getElementById("no");
    if (btn.textContent === "Noo"){
        btn.textContent = "Still Noo..😭";
    }
    else {
        document.getElementById("popup").style.display = "flex";
    }
}
function closePopup() {
        document.getElementById("popup").style.display = "none";
        partyTime();
}
function newPopup() {
        document.getElementById("popup").style.display = "none";
        document.getElementById("popup2").style.display = "flex";
}
function closePopup2() {
        document.getElementById("popup2").style.display = "none";
        partyTime();
}
function partyTime() {
    const confetti = document.getElementById("party");
    for (let i = 0; i < 40; i++) {

        const confetti = document.createElement("div");

        confetti.classList.add("confetti");

        confetti.textContent = "🎉";

        confetti.style.left = Math.random() * 100 + "%";

        confetti.style. animationDuration =(1.5 + Math.random() * 1.5) + "s";

        confetti.style. animationDelay =Math.random() * 0.5 + "s";

        party.appendChild(confetti);

        setTimeout(()=> {
        confetti.remove();
        }, 3500);
    }
}
