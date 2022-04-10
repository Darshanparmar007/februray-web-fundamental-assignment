const button = document.querySelector('button')
button.addEventListener('click' , input)

function input(){
    var type = document.getElementById('demo').value;
    alert(type);
}