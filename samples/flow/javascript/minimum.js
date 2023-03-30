const { getEnvironment, setEnvironment, EnvironmentMonitor } = _process;
const { myFancyVariable } = getEnvironment();
setEnvironment({
    myFancyVariable: 'mySuperFancyVariable'
});
EnvironmentMonitor.on('myFancyVariable-update', async (newEnv) => {
    console.log(newEnv.myFancyVariable)
})