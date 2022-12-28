const openModel =document.querySelector('.question-tag');
const closeModel = document.querySelector('.small-humburger');
const modal = document.querySelector('.modal-container');


// modal.addEventListener('click', openChat);
openModel.addEventListener('click', openChat);
closeModel.addEventListener('click', closeChat);

function openChat(){
    modal.style.display = 'block';
}
function closeChat(){
    modal.style.display = 'none';
}