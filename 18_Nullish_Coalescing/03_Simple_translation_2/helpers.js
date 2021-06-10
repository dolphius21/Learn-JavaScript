/*
 * @param {string} language
 */
const getTranslation = (language) => {
  return translations.welcome[language] ?? 'Welcome';
};
