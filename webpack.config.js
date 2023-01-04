const path = require('path');

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/react"],
            },
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader'
      }
    ],
  },
  resolve: {
    // これを指定しないと、node_moduleが見つからないとエラーが出る。
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    // これを定義しないと import 文で拡張子を書く必要が生まれる。
    extensions: [
      '.ts', '.tsx', '.js', 'jsx',
    ]
  }
};