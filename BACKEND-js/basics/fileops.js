const { log } = require('console')
const fs = require('fs')
const os = require('os')


const in_FILE_PATH = __dirname + '/random.txt'
const out_FILE_PATH = __dirname + '/sorted.txt'

fs.readFile(in_FILE_PATH, function(err, data) {
    if(err) throw err
    // console.log(data.toString())

    let arr = data.toString().split(os.EOL)
    let sortedArr = arr.sort((a,b)=> a - b)
    console.log(arr)
    fs.writeFile(out_FILE_PATH,sortedArr.join(os.EOL),function(err, data){
        if(err) throw err
    })
})