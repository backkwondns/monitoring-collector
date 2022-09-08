import {readFileSync} from 'fs';

const dirString = '/sys/devices/pwm-fan';

const fanInfo = () => {
    try {
        return Number(readFileSync(`${dirString}/target_pwm`, 'utf-8'))
    } catch (error) {
        return null
    }
};

export default fanInfo();
