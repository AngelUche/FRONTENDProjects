// VARIABLES FOR THE MODAL
const open = document.querySelector('.btn'),
    close = document.querySelector('.close'),
    modal = document.querySelector('.modulapopup'),
    mod = document.querySelector('.headerr');

// ADDING EVENT LISTNER
open.addEventListener('click',openModal);
close.addEventListener('click',closeModal);
mod.addEventListener('click', closeModal);

// CREATING OPEN MODAL FUNCTION
// REMOVING THE DEFAULT REFRESHING SETTING OF FORMS 
function openModal(e) {
    e.preventDefault();
    modal.style.display = "block";
}
// CREATING CLOSE MODAL FUNCTION
function closeModal() {
    modal.style.display = 'none';
}