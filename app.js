const txt = document.getElementById("textarea");
const total_count = document.getElementById("total-counter");
const rem_count = document.getElementById("remaining-counter");

txt.addEventListener("keyup",function(){
    update();
});

update();

function update(){
    total_count.innerText = txt.value.length;
    rem_count.innerText = txt.getAttribute("maxLength") - txt.value.length;
}