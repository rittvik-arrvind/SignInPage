var scriptURL = "https://script.google.com/macros/s/AKfycbwSeKB7NUsDAQavTgwV3_iTsGLCt1WE_h5MZJ1zx3iyX-3gKP_08ZYII__RYeySa0tb7w/exec"

var form = document.forms['google-sheet']

form.addEventListener('submit', e=>{
e.preventDefault()
fetch(scriptURL,{method: 'POST', body: new FormData(form)}).then(response =>
document.getElementById('form_alert').innerHTML = "Data was stored").catch(error =>
document.getElementById('form_alert').innerHTML = "Data was not stored")
})