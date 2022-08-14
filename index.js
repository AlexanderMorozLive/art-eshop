const siteArt = [[12345, 199],[13345, 199],[32345, 199],[123457, 1991]]
const warhouseArt = ['12345-1f1w', '12345-2342','32345~ffs', '12345', '32345']

let warhouseTemp = []


for (let i = 0; i < warhouseArt.length; i++) {
    let re = /(^[0-9]+)(.*)/
    let str = `${warhouseArt[i]}`
    let regExp = str.replace(re, '$1')

    warhouseTemp.push([+regExp, warhouseArt[i]])
}

console.log(warhouseTemp)

let temp = []

for (let i = 0; i < warhouseTemp.length; i++) {
    for (let j = 0; j < siteArt.length; j++) {
        if (warhouseTemp[i][0] === siteArt[j][0]) {
            console.log(warhouseArt[i])
            temp.push([warhouseArt[i], siteArt[j][1]])
        }
    }
    
}

console.log(temp)

//   console.log(array_diff(warhouseArt, siteArt));