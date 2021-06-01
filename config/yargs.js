
const id  = {
    demand: true,
    desc: "ID del Post"
}

const title = {
    demand: true,
    alias: "t",
    desc: "Titulo del Post"
}

const argv = require("yargs")
    .command("create", "Crea un nuevo Post", {
        title
    })
    .command("read", "Lee un Post", {
        id
    })
    .command("update", "Actualiza un Post", {
        id,
        title
    })
    .command("delete", "Elimina un Post", {
        id
    })
    .argv

    module.exports = {
        argv
    }