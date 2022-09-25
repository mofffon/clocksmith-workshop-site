
const start = () =>{
    document.querySelectorAll(".directions").forEach(
        elem => elem.addEventListener("click", 
            (e) => { e.preventDefault(); document.forms[0].submit() }, false));
}

window.addEventListener("load", start, false);