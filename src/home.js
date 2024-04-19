/*
        <h1>Menu</h1>
        <div id="Description">
            <p>description by a patron</p>
            <h3>Patron's name</h3>
        </div>
        <div id="Hours">
            <h2>hours</h2>
            <table>
                <tr>Mon</tr>
                <tr>Tue</tr>
                <tr>Wed</tr>
                <tr>Thu</tr>
                <tr>Fri</tr>
                <tr>Sat</tr>
                <tr>Sun</tr>
            </table>
        </div>
        <div id="Adress">
            <h2>Where ?</h2>
            <p>adress</p>
        </div>
*/

export default function homePage(){

    const CONTENT = document.getElementById("Content");
    CONTENT.innerHTML = "";

    const NAME = document.createElement("h1");
    NAME.textContent = "Restaurant's Name";

    const DESCRIPTION = document.createElement("div");
    DESCRIPTION.id = "Description";
    const HOURS = document.createElement("div");
    HOURS.id = "Hours";
    const ADDRESS = document.createElement("div");
    ADDRESS.id = "Adress";

    const DESC_CONTENT = document.createElement("p");
    DESC_CONTENT.textContent = "description by a patron";
    const DESC_SIGN = document.createElement("h3");
    DESC_SIGN.textContent = "Patron's name";

    const HOURS_TITLE = document.createElement("h2");
    HOURS_TITLE.textContent = "hours";
    const HOURS_TABLE = document.createElement("table");

    const ADDRESS_TITLE = document.createElement("h2");
    ADDRESS_TITLE.textContent = "Where ?";
    const ADDRESS_PLACE = document.createElement("p");
    ADDRESS_PLACE.textContent = "adress";


    DESCRIPTION.appendChild(DESC_CONTENT);
    DESCRIPTION.appendChild(DESC_SIGN);

    HOURS.appendChild(HOURS_TITLE);
    HOURS.appendChild(HOURS_TABLE);

    ADDRESS.appendChild(ADDRESS_TITLE);
    ADDRESS.appendChild(ADDRESS_PLACE);

    const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    WEEKDAYS.forEach((day) =>{
        const ROW = document.createElement("tr");
        ROW.textContent = day;
        HOURS_TABLE.appendChild(ROW);
    })

CONTENT.appendChild(NAME);
CONTENT.appendChild(DESCRIPTION);
CONTENT.appendChild(HOURS);
CONTENT.appendChild(ADDRESS);
}