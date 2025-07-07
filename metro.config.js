const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// HANYA perlu ini jika kamu pakai web
module.exports = withNativeWind(config, { input: './global.css' });
