const fs = require("fs");

let posts = []


const create = (title) => {

    try {
        load()
        
    } catch (err) {}



    let post = {
        id: 1 + posts.length,
        title
    }

    posts.push(post)

    save()

    return post
}

const read = (id) => {
    try {
        load()
        
    } catch (err) {}

    let post = posts.find(post => post.id == id)

    return post
}


const update = (id, title) => {
    try {
        load()
    } catch (err) { }

    let index = posts.findIndex(post => post.id == id)

    if (index !== -1){
        posts[index].title = title
        save()
        return posts[index]
    } 

    return false
}



const destroy = (id) => {
    try {
        load()
        
    } catch (err) {}

    let index = posts.findIndex(post => post.id == id)

    if (index !== -1){
        posts.splice(index, 1)
        save()
        return true
    } 

    return false
}


const save = () => {
    let json = JSON.stringify(posts)
    fs.writeFile("posts/db.json", json, (err) => {
        if (err) throw new Error("No se puede grabar el archivo")
    })
}



const load = () => {
    posts = require("./db.json")
}

module.exports = {
    create,
    read,
    update,
    destroy
}