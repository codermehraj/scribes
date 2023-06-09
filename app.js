const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions(){
    // button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    // activing the sections
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;

        if(id){

            // unselect all button
            sectBtns.forEach((btn) => {
                btn.classList.remove('active');
            })

            e.target.classList.add('active');

            // hide other sections
            sections.forEach((sections) => {
                sections.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');

        }
    })

    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', ()=>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })

}

PageTransitions();