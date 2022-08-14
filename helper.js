const fs = require('fs');

const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, err => {
        if(err) {
            return reject(err.message)
        }
        resolve()
    }))
}

const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, err => {
        if(err) {
            return reject(err.message)
        }
        resolve()
    }))
}

const readFileAsync = async (path) => {
    return new Promise ((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
        if(err) {
            return reject(err.message)
        }
        resolve(data)
    }))
}

const removeFileAsync = async (path) => {
    return new Promise ((resolve, reject) => fs.rm(path, err => {
        if(err) {
            return reject(err.message)
        }
        resolve()
    }))
}

module.exports.writeFileAsync = writeFileAsync;
module.exports.appendFileAsync = appendFileAsync;
module.exports.readFileAsync = readFileAsync;
module.exports.removeFileAsync = removeFileAsync;