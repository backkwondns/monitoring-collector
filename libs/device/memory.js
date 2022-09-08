import {mem} from "systeminformation";

const memInfo = async () => {
    const memData = await mem()
    const unit = Object.keys(memData).map((key) => memData[key] / 1000000)
    const memInformation = {total: unit[0], free: unit[1], used: unit[2], active: unit[3], available: unit[4]}
    return memInformation
}

export default memInfo()