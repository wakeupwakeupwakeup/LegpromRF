const test = 'justifyapi'
const prod = 'api.legpromrf'


const apiHOST = `https://${test}.ru/auth/`
export const apiEndpoints = {
    verification: apiHOST + 'send_verification',
    register: apiHOST + 'register',
    login: apiHOST + 'login',
    logout: apiHOST + 'logout',
    yandexReg: apiHOST + 'yandex/register',
    yandexLogin: apiHOST + 'yandex/login'
}