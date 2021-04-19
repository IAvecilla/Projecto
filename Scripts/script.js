const body = document.getElementsByTagName("BODY")[0];
const btn = document.querySelector(".btnTheme");

function save (strKey,strValue) {
    localStorage.setItem(strKey, strValue);
}

btn.onclick = () => {
    body.classList.toggle("dark_theme");
    if (localStorage["class"]) {
        localStorage.removeItem("class");
    } else {
        save("class","dark_theme");
    }
}

if (!localStorage.getItem("class")) {
    body.classList.remove("dark_theme");
} else {
    body.classList.add("dark_theme");
}


