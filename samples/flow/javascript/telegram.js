import axios from "axios"
const { EnvironmentMonitor } = _process;
const { TELEGRAM_TOKEN, TELEGRAM_CHAT_ID } = process.env;
const sendMessage = async (message) => {
    return axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        chat_id: TELEGRAM_CHAT_ID,
        text: message
    })
}
EnvironmentMonitor.on('myFancyVariable-update', async (newEnv) => {
    await sendMessage(\`Enviroment Updated today \${new Date()} for \${newEnv.INSTANCE_ID}\`)
})