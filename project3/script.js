const navLinks = document.querySelector('.nav-links'),
    hamburgerCon = document.querySelector('.hamburger-con'),
    modalBtn = document.querySelector('.video-con'),
    removeBtn = document.querySelector('.times'),
    playBtn = document.querySelector('.embeded-video-con'),
    iframeBtn = document.querySelector('iframe')
;
hamburgerCon.addEventListener('click', function (){
    hamburgerCon.classList.toggle('active'), navLinks.classList.toggle('active'),
    navLinks.classList.toggle('nav-link');
    console.log("hello");
});

// adding event listner to the image to display the youtube video
modalBtn.addEventListener('click', openModal)
removeBtn.addEventListener('click', closeModal)
// function to display youtube video
function openModal() {
 playBtn.style.display = 'block';
 removeBtn.style.display = 'block'; 
//  iframeBtn.allow += 'autoplay=0';
}

// functionto close the youtube vidoe
function closeModal() {
    removeBtn.style.display = 'none';
    playBtn.style.display = 'none';
    iframeBtn.allow -= 'autoplay';
}

// function pauseVideo() {
//     iframeBtn.pause();

// }
// function playVideo() {
//     iframeBtn.play();
// }