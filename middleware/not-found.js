const notFound = () => {
    res.status(404).send("Route not Found ")
}

module.exports = notFound