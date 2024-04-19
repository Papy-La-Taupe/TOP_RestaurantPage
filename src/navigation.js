import HOMEPAGE from './home.js';
import MENU from './menu.js';
import ABOUT from './about.js';

export default function navigation(){
    const NAVBAR = document.getElementById("NavBar");
    NAVBAR.addEventListener('click', (e)=>{
        const SELECTED = e.target.id;
        if (e.target.tagName === 'BUTTON') { // Vérifiez si l'élément cliqué est un bouton avant de récupérer son ID
            switch (SELECTED) {
                case "Home":
                    HOMEPAGE();
                    break;
                case "Menu":
                    MENU();
                    break;
                case "About":
                    ABOUT();
                    break;
            }
            navigation();
        }
        
    });
}