const btn = document.getElementById('btn');
const body = document.querySelector('body');
const color = ['blue', 'green', 'red', 'yellow', 'purple', 'pink', 'orange'];
const color_value = document.getElementById('colorR');


body.style.backgroundColor = '';
color_value.innerHTML = '--------';
btn.addEventListener('click', function(){
    let color_key = '';
        const index = Math.floor(Math.random() * color.length);
        color_key = color[index];
    color_value.innerHTML = color_key;
    document.getElementById('myColor').value = color_key;
    body.style.background= color_key;
    body.style.transition = '1s';
});
