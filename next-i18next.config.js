const path = require('path');

const NODE_ENV = process.env.NODE_ENV;

const reloadOnPrerender = (() => {
  if (NODE_ENV === 'development') {
    return true;
  }

  return false;
})();

// Doc: https://github.com/isaachinman/next-i18next#options 
module.exports = {
  i18n: {
    defaultLocale: 'vi-VN',
    locales: ['vi-VN', 'en-US'],
  },
  defaultNS: 'common',
  localeExtension: 'json',
  reloadOnPrerender,
  localePath: path.resolve('./src/locales'),
};
