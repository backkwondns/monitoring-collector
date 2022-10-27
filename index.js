import './libs/env.js'
import {exec} from 'child_process';
import {existsSync} from 'fs';

import information from "./libs/device/collectInterval.js"
import collectOnce from "./libs/device/collectOnce.js";
import {fetchPost} from "./libs/fetch.js";

(async function () {
    const device= await collectOnce()
    if (!process.env.CLIENT_NAME) console.error('\'CLIENT_NAME\' is require on .env file')
    if (device.platform === 'darwin' && !existsSync('./node_modules/osx-temperature-sensor')) {
        exec('npm install osx-temperature-sensor -D')
    }
    const clientName = process.env.CLIENT_NAME
    const key = Math.random().toString(36).substr(2, 11);
    const initResult = await fetchPost('/api/resource/init', {key, device, client:clientName})
    if (initResult.statusCode === 200) {
        console.log(`Enter Address -> '${initResult.address}'\nEnter Client  -> '${clientName}'\nEnter Key     -> '${key}'`)
        setInterval(async () => fetchPost('/api/resource/collect', await information(device.platform)), 10000)
    } else console.error('Error Occurred')
    // fetchPost('/api/resource/collect', await information(device.platform))
})()



