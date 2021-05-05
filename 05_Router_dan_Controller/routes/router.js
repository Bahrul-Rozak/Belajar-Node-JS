const router = require("express").Router();

router.get("/", function(request, response) {
    response.send("Assalamualaikum");
});

router.get("/halaman-website", function(request, response) {
    response.send("halaman-website dengan http " + request.method);
});

router.post("/halaman-website", function(request, response) {
    response.send("halaman-website dengan http " + request.method);
});

router.put("/halaman-website", function(request, response) {
    response.send("halaman-website dengan http " + request.method);
});

router.delete("/halaman-website", function(request, response) {
    response.send("halaman-website dengan http " + request.method);
});

router.get("/halaman-website", (req, res) => {
    res.send("halaman-website dengan http " + req.query.detail + " dan " + req.query.produk);
});

router.get("/profile", (req, res) => {
    res.redirect("/login");
});

router.get("/login", (req, res) => {
    res.send("silahkan Login terlebih dahulu");
});

module.exports = router;