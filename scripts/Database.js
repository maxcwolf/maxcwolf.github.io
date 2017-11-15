const Database = Object.create(null, {
    load: {
        value: () => JSON.parse(localStorage.getItem("Database")) || {}
    },
    save: {
        value: (db) => {
            localStorage.setItem("Database", JSON.stringify(db));
        }
    }
})

module.exports = Database