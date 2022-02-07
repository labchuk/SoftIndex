module.exports = (req,res) => {
    res.writeHead(200,{
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })

    res.send = (data) => {
        res.end(JSON.stringify(data))
    }
}