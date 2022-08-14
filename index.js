const path = require('path')
const {appendFileAsync, writeFileAsync} = require('./helper')

const siteArt = [[12345, 199],[13345, 199],[32345, 199],[123457, 1991]]
const warhouseArt = ['12345-1f1w', '12345-2342','32345~ffs', '12345', '32345']

let warhouseTemp = []


    // TODO
    //
    // добавить проверку на дубликаты на артикула с базы сайта

for (let i = 0; i < warhouseArt.length; i++) {
    let re = /(^[0-9]+)(.*)/
    let str = `${warhouseArt[i]}`
    let regExp = str.replace(re, '$1')

    warhouseTemp.push([+regExp, warhouseArt[i]])
}


let temp = []

for (let i = 0; i < warhouseTemp.length; i++) {
    for (let j = 0; j < siteArt.length; j++) {
        if (warhouseTemp[i][0] === siteArt[j][0]) {
            let sql = "UPDATE `oc_product` SET `price` = " + "'" + `${siteArt[j][1]}` + "'" + " WHERE `model` LIKE " + "'" + `${warhouseArt[i]}` + "%';" + ""
            temp.push([warhouseArt[i], siteArt[j][1], sql])
        }
    }
    
}

console.log(temp)


for (let i = 0; i < temp.length; i++) {
    writeFileAsync(path.resolve(__dirname, 'updateList.txt'), '')
        .then(() => appendFileAsync(path.resolve(__dirname, 'updateList.txt'), `${temp[i][2]}` + '\n'))
        .catch(err => console.log('err'))
}

// writeFileAsync(path.resolve(__dirname, 'log.txt'), '')
//     .then(() => appendFileAsync(path.resolve(__dirname, 'log.txt'), 'test_string' + '\n'))
//     .catch(err => console.log('err'))

// removeFileAsync(path.resolve(__dirname, 'text.txt'))
//     .then(() => console.log('File was removed'))