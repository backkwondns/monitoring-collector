import cpuInfo from './cpu.js'
import memInfo from './memory.js'
import fanInfo from './fan.js'

const collectInfo = async (platformType) => {
    const cpu = await cpuInfo
    const mem = await memInfo
    const information = {cpu, mem, data: new Date()}
    if(platformType ==='linux') information["fans"] = fanInfo
    return information
}
export default collectInfo
