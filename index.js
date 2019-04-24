const cluster = require('cluster')
const express = require('express')

if (cluster.isMaster) {
    // const cpuCount = require('os').cpus().length
    const cpuCount = 2
    // Create a worker for each CPU
    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork()
    }
} else {
    const app = express()
    app.get('/', (req, res) => {
        res.send(`Worker ${cluster.worker.id}`)
    })
    app.listen(8080, () => {
        console.log(`Worker ${cluster.worker.id} listening on port 8080`)
    })
}
