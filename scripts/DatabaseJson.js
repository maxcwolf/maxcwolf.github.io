
const Database = Object.create(null, {
    load: {
        value: (callback) => { 
            $.ajax({
                "url": "https://personal-site-3a80d.firebaseio.com/.json",
                "method": "GET"
            }).then(db => {
                callback(db) //this is what will be passed in from my writers

            })
        }
    }
})

module.exports = Database