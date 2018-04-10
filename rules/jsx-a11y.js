module.exports = {
  rules: {

    // Enforce that <img> JSX elements use the alt prop.
    'jsx-a11y/alt-text': 2,

    'jsx-a11y/anchor-is-valid': ['error', {
      aspects: ['invalidHref']
    }]
  }
};