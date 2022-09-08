import './libs/env.js'
import {exec} from 'child_process';
import {existsSync} from 'fs';

import information from "./libs/device/collectInterval.js"
import collectOnce from "./libs/device/collectOnce.js";
import {fetchPost} from "./libs/fetch.js";

(async function () {
    const deviceData = await collectOnce()

    if (deviceData.platform === 'darwin' && !existsSync('./node_modules/osx-temperature-sensor')) {
        exec('npm install osx-temperature-sensor -D')
    }
    setInterval(async ()=>fetchPost('/api/collect', await information(deviceData.platform)),10000 )
    // fetchPost('/api/collect', await information(deviceData.platform))
})()



