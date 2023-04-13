const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalContainer = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.js-modal-close')

function showBuyTicket(){
    modal.classList.add('open')
}

function hideBuyTicket(){
    modal.classList.remove('open')
}

for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click',showBuyTicket)
}

modalClose.addEventListener('click',hideBuyTicket)

modal.addEventListener('click', hideBuyTicket)

modalContainer.addEventListener('click',function(event){
    event.stopPropagation()
})


// responsive mobile
//open/close menu
const header = document.getElementById('header');
const mobileMenu = document.getElementById('mobile-menu');
const headerHeight = header.clientHeight; 


mobileMenu.onclick = function(){
    let isClosed = header.clientHeight === headerHeight;
    if(isClosed){
        header.style.height = 'auto';
    }else{
        header.style.height = null;
    }
}

//auto close when choose
const menuItems = document.querySelectorAll('#nav li a[href*="#"');
for(let i = 0; i < menuItems.length; i++){
    let menuItem = menuItems[i];
    menuItem.onclick = function(){
        header.style.height = null;
    }
}
