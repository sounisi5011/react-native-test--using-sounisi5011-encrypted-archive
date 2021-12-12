module.exports = {
  resolver: {
    extraNodeModules: {
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('readable-stream'),
    },
    // @sounisi5011/ts-utils-is-property-accessible uses the `.cjs` extension.
    // It may not work because of this.
    // If the build fails, please add 'cjs' in resolver.sourceExts config.
    // see https://github.com/thysultan/stylis.js/issues/233#issuecomment-663635896
    sourceExts: [ 'ts', 'tsx', 'js', 'jsx', 'json', 'cjs'],
  },
};

// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- //
// The code below is for merging the expo default config into the new settings.
// It is not needed for normal metro.config.js files.
// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- //

const { getDefaultConfig } = require('@expo/metro-config');
const defaultConfig = getDefaultConfig(__dirname);
const newConfig = module.exports;
defaultConfig.resolver.sourceExts = [...new Set([...defaultConfig.resolver.sourceExts, ...newConfig.resolver.sourceExts])];
Object.assign(defaultConfig.resolver.extraNodeModules, newConfig.resolver.extraNodeModules);
module.exports = defaultConfig;
