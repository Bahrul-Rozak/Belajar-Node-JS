function getHalaman(request, response) {
    response.send("halaman-website dengan http " + request.method);
}

function setHalaman(request, response) {
    response.send("halaman-website dengan http " + request.method);
}

function updateHalaman(request, response) {
    response.send("halaman-website dengan http " + request.method);
}

function deleteHalaman(request, response) {
    response.send("halaman-website dengan http " + request.method);
}

module.exports = {
    getHalaman,
    setHalaman,
    updateHalaman,
    deleteHalaman,
};