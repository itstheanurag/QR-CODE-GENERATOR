const wrapper = document.querySelector('.wrapper')
const qrInput = wrapper.querySelector(".form input")
const generateBtn = wrapper.querySelector('.form button')
const qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener('click', ()=>{
    let qrValue = qrInput.value;
    if(!qrValue || !qrValue.trim().length) return;
    generateBtn.innerText = 'Generating Qr Code...'
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImg.addEventListener('load', ()=>{
        wrapper.classList.add('active');
    })
    generateBtn.innerText = 'QR Code Generated'
    
})

qrInput.addEventListener('keyup', ()=>{
    if(!qrInput.value){
        wrapper.classList.remove("active")
    }
})