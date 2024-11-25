let mode = 'light';

function darkMode(){
    if (mode == 'light'){
        document.body.style.background = "Black";
        document.body.style.color = "White"
        document.getElementById('switchBtn').style.color = 'White'
        document.getElementById('switchBtn').style.backgroundColor = '#3C3D37'
        mode = 'dark'
    } else {
        document.body.style.background = 'White';
        document.body.style.color = "Black"
        document.getElementById('switchBtn').style.color = 'Black'
        document.getElementById('switchBtn').style.backgroundColor = 'White'
        mode = 'light'
    }
    console.log(mode)
}