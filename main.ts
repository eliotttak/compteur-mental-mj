function showConnectCode (code: string) {
    showConnectCode_x = 0
    for (let showConnectCode_n of code) {
        showConnectCode_y = 4
        while (showConnectCode_y > 4 - parseFloat(showConnectCode_n)) {
            led.plot(showConnectCode_x, showConnectCode_y)
            showConnectCode_y += -1
        }
        showConnectCode_x += 1
    }
}
function createConnectCode () {
    createConnectCode_result = ""
    for (let index = 0; index < 5; index++) {
        createConnectCode_result = "" + createConnectCode_result + randint(1, 5)
    }
    return createConnectCode_result
}
let createConnectCode_result = ""
let showConnectCode_y = 0
let showConnectCode_x = 0
let executionStatus = "waiting_for_players"
showConnectCode(createConnectCode())
