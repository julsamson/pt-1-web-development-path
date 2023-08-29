


const accordion = document.getElementById('accordion');

accordion.childNodes.forEach((child, index) => {

    child.addEventListener('click', function () {

        console.log("child:", child);

        for( let c of accordion.children) {

            console.log("c: ", c);
            
            const panel = c.querySelector('.accordion-panel');
            const icon = c.querySelector('.accordion-icon');
            const title = c.querySelector('.accordion-title');

            if( child === c ) {
                panel.classList.toggle('hidden');
                icon.querySelector('#plus').classList.toggle('hidden');
                icon.querySelector('#min').classList.toggle('hidden');
            }
            else {
                panel.classList.add('hidden');
                icon.querySelector('#plus').classList.remove('hidden');
                icon.querySelector('#min').classList.add('hidden');
            }
        }
    });

});