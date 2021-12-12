module.exports = {
  resolver: {
    extraNodeModules: {
      stream: require.resolve('readable-stream'),
    }
  },
};

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- //
// The code below is for merging the expo default config into the new settings.
// It is not needed for normal metro.config.js files.
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- //

const { getDefaultConfig } = require('@expo/metro-config');
const defaultConfig = getDefaultConfig(__dirname);
const newConfig = module.exports;
Object.assign(defaultConfig.resolver.extraNodeModules, newConfig.resolver.extraNodeModules);
module.exports = defaultConfig;
