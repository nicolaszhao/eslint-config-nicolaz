module.exports = {
  rules: {

    // Enforce that <img> JSX elements use the alt prop.
    'jsx-a11y/alt-text': 'warn',

    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['to'],
      aspects: ['noHref', 'invalidHref', 'preferButton'],
    }]
  }
};
