let selectElem = document.getElementById('themetoggle');

selectElem.addEventListener('change', function(){

    let theme = selectElem.value;
    console.log(theme);

    let byui_logo = document.querySelector('img');

    //document.getElementById('css-sheet').href = "mission-css.css";

    if (theme == 'light')
    {
        // originally, i would just have two seperate css files for light & dark modes
        //document.getElementById('css-sheet').href = "mission-css-light.css";
        // but, this is better

        byui_logo.setAttribute('src', 'https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp');

        console.log('can u see me?');

        document.querySelector('body').style.backgroundColor = "white";
        document.querySelector('h1').style.color = "black";
        document.getElementById('ms-p').style.color = "black";
        document.querySelector('ol').style.color = "black";
    }

    else if (theme == 'dark')
    {
        byui_logo.setAttribute('src', 'https://wddbyui.github.io/wdd131/images/byui-logo-white.png');

        console.log('but can u see me?');

        //document.getElementById('css-sheet').href = "mission-css-dark.css";

        document.querySelector('body').style.backgroundColor = "black";
        document.querySelector('h1').style.color = "white";
        document.getElementById('ms-p').style.color = "white";
        document.querySelector('ol').style.color = "white";
    }
})