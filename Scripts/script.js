const body = document.getElementsByTagName("BODY")[0];
const btn = document.querySelector(".btnTheme");

btn.onclick = () => {
    if (body.classList.contains("dark_theme")){
        body.classList.remove("dark_theme");
    } else {
        body.classList.add("dark_theme");
    }
}




