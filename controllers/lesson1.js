const leoRoute = (req, res) => {
    res.send('Hello Leo');
};

const alfredRoute = (req, res) => {
    res.send('Hello Alfred');
};

module.exports = {
    leoRoute,
    alfredRoute,
};