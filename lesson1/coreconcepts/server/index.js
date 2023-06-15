require("ignore-styles");

require("@babel/register")({
  ignore: [/(node_module)/],
  presets: [
    "@babel/preset-env",
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
  plugins: [
    [
      "transform-assets",
      {
        extensions: ["css", "svg"],
        name: "static/media/[name].6ce24c58023cc2f8fd88fe9d219db6c6.[ext]",
      },
    ],
  ],
});

require("./server");
