import { themeConfig } from "@themeConfig";

export const resolveVuetifyTheme = () => {
  const storedTheme =
    localStorage.getItem(`${themeConfig.app.title}-theme`) ||
    themeConfig.app.theme.value;

  return "dark";
  // return storedTheme === 'system'
  //   ? isDarkPreferred.value
  //     ? 'dark'
  //     : 'light'
  //   : storedTheme
};
