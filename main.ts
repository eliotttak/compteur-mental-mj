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
input.onButtonPressed(Button.AB, function () {
    if (executionStatus == "waiting_for_players" && players.length >= 2) {
        basic.clearScreen()
        executionStatus = ""
    }
})
radio.onReceivedValue(function (name, value) {
    if (executionStatus == "waiting_for_players") {
        if (name == "r_login" && value == parseFloat(connectCode)) {
            players.push(radio.receivedPacket(RadioPacketProperty.SerialNumber))
            basic.clearScreen()
            basic.pause(50)
            showConnectCode(connectCode)
            // SERIAL + "." + PLAYER_NUMBER :
            // 
            // E.G. 12345678.3 FOR BE CONVERTED INTO NUMBER
            radio.sendString("accepted:" + radio.receivedPacket(RadioPacketProperty.SerialNumber) + ":" + players.length)
        }
    }
})
let createConnectCode_result = ""
let showConnectCode_y = 0
let showConnectCode_x = 0
let connectCode = ""
let executionStatus = ""
let players: number[] = []
radio.setGroup(1)
players = []
executionStatus = "waiting_for_players"
connectCode = createConnectCode()
showConnectCode(connectCode)
