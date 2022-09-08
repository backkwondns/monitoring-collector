import {osInfo} from "systeminformation";

const deviceType = async () => {
    const result = await osInfo()
    const deviceInformation = {
        platform: result.platform,
        osVersion: `${result.distro} ${result.release}`,
        osName: result.codename,
        hostname: result.hostname,
        arch: result.arch
    }
    return deviceInformation
}

export default deviceType()

