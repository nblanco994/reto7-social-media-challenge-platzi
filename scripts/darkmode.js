const root = document.documentElement;
let styles = getComputedStyle(root);

const toggle = styles.getPropertyValue("--Toggle");
const light_theme_BG = styles.getPropertyValue("--BG");

function dashboardTheme() {
		if (light_theme_BG == styles.getPropertyValue("--BG")){
      document.body.classList.toggle("darkTheme");
    }
}