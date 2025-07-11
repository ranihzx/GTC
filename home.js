let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function() {
    proximaImagem();
}, 4000)

function proximaImagem() {
    document.getElementById("radio"+count).checked = false;
    count++;
    if(count > 4) {
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}