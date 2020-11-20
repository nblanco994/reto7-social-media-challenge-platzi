const root = document.documentElement;
let styles = getComputedStyle(root);

const container = document.getElementsByClassName('colorContainer');
const toggle = styles.getPropertyValue("--Toggle");
const toggle_darkMode = styles.getPropertyValue("--Toggle_DARKMODE");
const light_theme_BG = styles.getPropertyValue("--BG");

function dashboardTheme() {
		if (light_theme_BG == styles.getPropertyValue("--BG")){
      document.body.classList.toggle("darkTheme");
      root.style.setProperty("--Image_Togle", toggle_darkMode);
      root.getElementsByClassName("slider_test")[0].style.backgroundImage = toggle_darkMode;

    } else {
      root.getElementsByClassName("slider_test")[0].style.backgroundImage = "";
    }
}