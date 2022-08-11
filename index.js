const siteArt = [[12345, 199],[13345, 199],[32345, 199],[12345, 1991]]
const warhouseArt = ['12345-1f1w', '12345-2342','32345~ffs', '12345', '32345']

let warhouseTemp = []


for (let i = 0; i <= warhouseArt.length; i++) {
    // .
}

let temp = []

for (let i = 0; i <= warhouseArt.length; i++) {
    for (let j = 0; j < siteArt.length; j++) {
        if (+warhouseArt[i] === siteArt[j][0]) {
            console.log(warhouseArt[i])
            temp.push([warhouseArt[i], siteArt[j][1]])
        }
    }
    
}

console.log(temp)

//   console.log(array_diff(warhouseArt, siteArt));