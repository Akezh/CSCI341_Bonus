const proxy = require("http-proxy-middleware");

module.exports = function(app: any) {
    app.use(
        proxy("/api/ranking/deaths", {
            target: "http://127.0.0.1:8000/",
            secure: false,
            changeOrigin: true
        })
    );
}