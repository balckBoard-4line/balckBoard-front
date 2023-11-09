const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://3.34.99.5:8080",
      changeOrigin: true
    })
  );
};
