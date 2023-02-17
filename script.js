    buttonHeight = 50;
       buttonWidth = 150;

       maxWidth = window.innerWidth -buttonWidth;
                                   
       maxHeight = window.innerHeight -buttonHeight;
window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('button')

    button.addEventListener('click',() => alert('you have to marry me!'))

    button.addEventListener('mouseover' , () =>{
        button.style.left = Math.floor(Math.random() *( maxWidth + 1)) + 'px';
        button.style.top = Math.floor(Math.random() *( maxHeight + 1)) + 'px';
    })
});