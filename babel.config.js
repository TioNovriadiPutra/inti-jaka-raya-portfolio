module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        require.resolve("babel-plugin-module-resolver"),
        {
          root: ["./src"],
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@hooks": "./src/hooks",
            "@navigation": "./src/navigation",
            "@pages": "./src/pages",
            "@routes": "./src/routes",
            "@store": "./src/store",
            "@themes": "./src/themes",
            "@utils": "./src/utils",
            "@containers": "./src/containers",
          },
        },
      ],
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
    ],
  };
};
