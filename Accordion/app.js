const accordions = document.getElementsByClassName('context-bx');


for (let i = 0; i < accordions.length; i++) {
    const accordion = accordions[i];


    accordion.addEventListener('click', function () {

        this.classList.toggle('active');

        const content = this.querySelector('.content');

        if (content.style.height) {
            content.style.height = null;
        } else {
            content.style.height = content.scrollHeight + 'px';
        }
    });
}








// for (let i = 0; i<accordion.length; i++) {
//     accordion[i].addEventListener('click', function(){
//         this.classList.toggle('active')
//     })
    
// }