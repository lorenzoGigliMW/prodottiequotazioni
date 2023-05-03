//const withPlugins = require('next-compose-plugins');
//const withSass = require('@zeit/next-sass');
//const withCSS = require('@zeit/next-css');
const webpack = require('webpack');

//module.exports = withPlugins(
//   [
//   [
//     withCSS,
//     withSass({
//       cssModules: true,
//     }),
//   ],
// ],
 //{
  webpack: (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin({
      NODE_ENV: process.env.NODE_ENV,
    }));

    if (process.env.NODE_ENV === 'production') {
      // Configurazione per la produzione
      // ...
    } else if (process.env.NODE_ENV === 'pre-production') {
      // Configurazione per la pre-produzione
      // ...
    } else {
      // Configurazione per lo sviluppo
      // ...
    }

    return config;
  }
//}
//);