/*
<h1>Menu</h1>
        <div id="Who we are">
            <p>blablabla</p>
        </div>
        <div id="Where to find us">
            <p>adress again, maybe with a map and some pointers & hints</p>
        </div>
        <div id="Our values">
            <p>blablabla</p>
        </div>
*/

export default function ABOUT() {

    const CONTENT = document.getElementById("Content");
    CONTENT.innerHTML = "";

    const ABOUT_TITLE = document.createElement("h1");
    const WHO_WE_ARE_DIV = document.createElement("div");
    const WHERE_TO_FIND_US_DIV = document.createElement("div");
    const OUR_VALUES_DIV = document.createElement("div");
  
    WHO_WE_ARE_DIV.id = "WhoWeAre";
    WHERE_TO_FIND_US_DIV.id = "WhereToFindUs";
    OUR_VALUES_DIV.id = "OurValues";
  
     ABOUT_TITLE.textContent = "About Us";
    const WHO_WE_ARE_TEXT = document.createElement("p");
    WHO_WE_ARE_TEXT.textContent = "blablabla";
    const WHERE_TO_FIND_US_TEXT = document.createElement("p");
    WHERE_TO_FIND_US_TEXT.textContent = "adress again, maybe with a map and some pointers & hints";
    const OUR_VALUES_TEXT = document.createElement("p");
    OUR_VALUES_TEXT.textContent = "blablabla";
  
    WHO_WE_ARE_DIV.appendChild(WHO_WE_ARE_TEXT);
    WHERE_TO_FIND_US_DIV.appendChild(WHERE_TO_FIND_US_TEXT);
    OUR_VALUES_DIV.appendChild(OUR_VALUES_TEXT);
  
    CONTENT.appendChild(ABOUT_TITLE);
    CONTENT.appendChild(WHO_WE_ARE_DIV);
    CONTENT.appendChild(WHERE_TO_FIND_US_DIV);
    CONTENT.appendChild(OUR_VALUES_DIV);
  }
