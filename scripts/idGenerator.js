//ID generator function to be called whenever IDs are needed. Just create a unique instance of it to start.
    //if objects containing IDs need to be edited be sure to include the id as a parameter in the factory and "(id === null) ? messagesIdGenerator.next().value : id"

const idGenerator = function* (startFrom = 0) {
    let id = 1

    while (true) {
        yield id + startFrom
        id++
    }
}

module.exports = idGenerator