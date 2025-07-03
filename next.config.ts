const nextConfig = {
  webpack(config:any) {
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'static/files',
            publicPath: '/_next/static/files',
          },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;
