import {cpuTemperature, cpuCurrentSpeed} from 'systeminformation'

const cpuInfo = async () => {
    const cpuTemperatureData = await cpuTemperature()
    const cpuCurrentSpeedData = await cpuCurrentSpeed()
    const cpuInformation = {cpuTemperature: cpuTemperatureData, cpuCurrentSpeed: cpuCurrentSpeedData}
    return cpuInformation
}

export default cpuInfo()

