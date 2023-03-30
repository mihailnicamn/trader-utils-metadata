import axios from "axios"
const { getEnvironment, setEnvironment } = _process;
const updateToken = async () => {
    return { data: { refreshToken, accessToken, client_id, update_at } } = await axios.get('url_to_renew_the_token', {
        ...getEnvironment()
    })
}
/* 
* avoid using setTimeout on big intervals 😉
* TimeoutOverflowWarning: <BigNumber> does not fit into a 32-bit signed integer.
*/
setInterval(async () => {
    if (Date.now() >= update_at) {
        const { refreshToken, accessToken, client_id, update_at } = await updateToken()
        setEnvironment({ refreshToken, accessToken, client_id, update_at })
    }
}, 1000 * 60)