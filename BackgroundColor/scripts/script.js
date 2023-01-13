// setting the date dynamicaly
console.log('hello');
const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();

// adding scroll toggle to scroll up arrow
const backToTop = document.querySelector('.back-to-top')
window.addEventListener("scroll",function(){
   const scrollHeight = window.pageYOffset;
   if (scrollHeight> 500){
    backToTop.classList.add('show-back-to-top');
   }
   else{
    backToTop.classList.remove('show-back-to-top');
   }
})


// setting collo vairbale
const colors = ['#ffffff', '#00c1b5', '#ff6519', '#ffbe00', '#1d3fbb', '#E30512'];
// adding bacground color to eacj section of the page
const listAll = document.querySelectorAll('.scroll-link');

window.addEventListener('scroll', function(){
    const y = window.pageYOffset;
    if (y >3233){
        document.body.style.backgroundColor =colors[5];
        listAll.style.color=colors[0]
    }
    else if (y> 2600 &&y < 3233 )
    { document.body.style.backgroundColor =colors[4]
        listAll.style.color=colors[0]
        // TRYING TO CHANGE THE COLOR
    //     const listAll = document.querySelectorAll('.scroll-link');
    //    listAll.forEach( function(links){
    //     links.style.color = colors[0]
    //    })
    //    OR USING 

        // for (i = 0; i < listAll.length; i++){
        //     listAll[i].style.color = colors[0]
        //     console.log(listAll[i].style.color);
        // }
    }
    else if (y> 2000 && y < 2600)
    { document.body.style.backgroundColor =colors[3]}
    else if (y> 1285 && y < 2000){
        document.body.style.backgroundColor =colors[2];
    } 
    else if (y > 430 &&y < 1284){
        document.body.style.backgroundColor =colors[1];} 
    else if (y < 430){
        document.body.style.backgroundColor =colors[0];
        listAll.style.color='black'
    }  
})


// const scrollLinks = document.querySelectorAll('.scroll-link');
// const scrollSection = document.querySelectorAll('.section1');

// scrollLinks.forEach(function(section) {

//     section.addEventListener('click', function(e) {
//         e.preventDefault();
//         const elementId = e.currentTarget.getAttribute('href').slice(1);
//         const sectionId = document.getElementById(elementId);
//         console.log(sectionId);
            
//         let position = sectionId.offsetTop;
//         window.scrollTo({
//             left:0,
//             top: position,
//         });
//     });
// });

