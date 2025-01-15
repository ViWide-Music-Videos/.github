const languageButtons = document.querySelectorAll('.language-switcher button');
const translatableElements = document.querySelectorAll('[data-lang-ru]');

function switchLanguage(lang) {
  localStorage.setItem('selectedLanguage', lang);
  languageButtons.forEach(button =>
    button.classList.toggle('active', button.id === `lang-${lang}`)
  );
  translatableElements.forEach(el => {
    el.textContent = el.getAttribute(`data-lang-${lang}`);
  });
  document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLanguage = localStorage.getItem('selectedLanguage') || 'ru';
  switchLanguage(savedLanguage);
});

languageButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedLang = button.id === 'lang-ru' ? 'ru' : 'en';
    switchLanguage(selectedLang);
  });
});

// AdressBar Theme
function updateThemeColor() {
  const themeColor = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? '#1D2025'
    : '#F6F6F6';
  const themeMetaTag = document.querySelector('meta[name="theme-color"]');
  if (themeMetaTag) {
    themeMetaTag.setAttribute('content', themeColor);
  }
}

// Вызов функции при загрузке страницы и при изменении темы
document.addEventListener('DOMContentLoaded', updateThemeColor);
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateThemeColor);
