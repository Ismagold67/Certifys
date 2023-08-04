function msg(){
    const Msg = document.querySelector('.msg')
    Msg.style.display = 'flex'
    Msg.style.transition = '3s'
}
setTimeout(msg , 1000)
function msgClose(){
    const Msg = document.querySelector('.msg')
    Msg.style.display = 'none'
}
setTimeout(msgClose, 7000)