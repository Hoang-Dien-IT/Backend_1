exports.create = (req, res) => {
    res.send({ message: "create handler" });
};

exports.findAll = (req, res) => {
    res.send({ message: "findAll handler" });
};

exports.findOne = (req, res) => {
    res.send({ message: "findOne handler" });
};

exports.update = (req, res) => {
    res.send({ message: "update handler" });
};

exports.delete = (req, res) => {
    res.send({ message: "detele handler" });
};

exports.deleteAll = (req, res) => {
    res.send({ message: "deteleAll handler" });
};

exports.findallFavorite = (req, res) => {
    res.send({ message: "findallFavorite handler" });
};