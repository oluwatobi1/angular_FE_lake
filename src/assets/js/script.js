let chooseImage = document.querySelector('#chooseImage');
let previewImage = document.querySelector('#previewImage');
let uploadImage = document.querySelector('#submitImage');

chooseImage.addEventListener('change', ()=> {
    preview_image();   
    removeProgressBar()
});


let preview_image=()=>{

    let reader = new FileReader();
    
    reader.onload = ()=>{
    previewImage.src = reader.result;
    }

    if(event.target.files[0]){
        reader.readAsDataURL(event.target.files[0]);
    }
    else{
        previewImage.src = 'https://via.placeholder.com/200x100/000000/FFFFFF/?text=upload image here'
        removeProgressBar();
    }
}

uploadImage.addEventListener('click', (event)=>{
    event.preventDefault();
    removeProgressBar()

    if(chooseImage.value){
        createProgressBar()
        move()   
    }
    else{
        console.log('Kindly upload an image for processing')
    }

})

let createProgressBar=()=>{
    let submitImageBtn = document.querySelector('#submitImage')

    let outerBar = document.createElement('div')
        outerBar.id = 'myProgress'
    
    let innerBar = document.createElement('div')
        innerBar.id = 'myBar';
        innerBar.innerText = '0%'
    
    outerBar.appendChild(innerBar)
    
    submitImageBtn.insertAdjacentElement('beforebegin', outerBar);
}

let removeProgressBar=()=>{
    let bar = document.querySelector('#myProgress');
        if(bar){
            bar.parentNode.removeChild(bar)
        }
}

let move=()=>{

    let i = 0;

    if (i == 0) {
        i = 1;
        let elem = document.getElementById("myBar");
        let width = 0;

        let frame=()=>{
            if (width >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width  + "%";
            }
        }

        let id = setInterval(frame, 10);

    }
}