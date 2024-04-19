/*
<h1>Menu</h1>
        <div id="Appetizers">
            <p>list of dppetizers & prices logic</p>
        </div>
        <div id="Main Course">
            <p>list of main courses & prices logic</p>
        </div>
        <div id="Desserts">
            <p>list of desserts & prices logic</p>
        </div>
*/

export default function menu(){
    
const CONTENT = document.getElementById("Content");
CONTENT.innerHTML = "";

const MENU_TITLE = document.createElement("h1");
const APPETIZERS_DIV = document.createElement("div");
const MAIN_COURSE_DIV = document.createElement("div");
const DESSERTS_DIV = document.createElement("div");

APPETIZERS_DIV.id = "Appetizers";
MAIN_COURSE_DIV.id = "MainCourse";
DESSERTS_DIV.id = "Desserts";

MENU_TITLE.textContent = "Menu";
const APPETIZERS_TEXT = document.createElement("p");
APPETIZERS_TEXT.textContent = "list of appetizers & prices logic";
const MAIN_COURSE_TEXT = document.createElement("p");
MAIN_COURSE_TEXT.textContent = "list of main courses & prices logic";
const DESSERTS_TEXT = document.createElement("p");
DESSERTS_TEXT.textContent = "list of desserts & prices logic";

APPETIZERS_DIV.appendChild(APPETIZERS_TEXT);
MAIN_COURSE_DIV.appendChild(MAIN_COURSE_TEXT);
DESSERTS_DIV.appendChild(DESSERTS_TEXT);

CONTENT.appendChild(MENU_TITLE);
CONTENT.appendChild(APPETIZERS_DIV);
CONTENT.appendChild(MAIN_COURSE_DIV);
CONTENT.appendChild(DESSERTS_DIV);
}