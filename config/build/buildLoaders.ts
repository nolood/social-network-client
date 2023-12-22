import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { type BuildOptions } from "./types/types";
import ReactRefreshTypeScript from "react-refresh-typescript";
import { type Configuration } from "webpack";

export const buildLoaders = (
  options: BuildOptions,
): Configuration["module"]["rules"] => {
  const isDev = options.mode === "development";

  const svgrLoader = {
    test: /\.svg$/,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          icon: true,
        },
      },
      "url-loader",
    ],
  };

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  };

  const cssLoaderWithModules = {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
      },
    },
  };

  const cssLoader = {
    test: /\.css$/i,
    use: ["style-loader", "css-loader"],
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      cssLoaderWithModules,
      "sass-loader",
    ],
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: [
      {
        loader: "ts-loader",
        options: {
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
        },
      },
    ],
    exclude: /node_modules/,
  };

  const fontsLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: "asset/resource",
  };

  return [
    assetLoader,
    cssLoader,
    scssLoader,
    tsLoader,
    svgrLoader,
    fontsLoader,
  ];
};
