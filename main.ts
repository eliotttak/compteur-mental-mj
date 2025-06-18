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
radio.onReceivedString(function (value) {
    arrayValue = value.split(":")
    name = arrayValue[0]
    if (executionStatus == "waiting_for_players") {
        if (name == "l" && arrayValue[1] == connectCode) {
            if (!(includes(players, arrayValue[2]))) {
                players.push(arrayValue[2])
            }
            basic.clearScreen()
            basic.pause(50)
            showConnectCode(connectCode)
            // acc:SERIAL:PLAYER_NUMBER :
            // 
            // E.G. acc:12345678:3
            radio.sendString("acc:" + arrayValue[2] + ":" + players.indexOf(arrayValue[2]) + 1)
        }
    }
})
let name = ""
let createConnectCode_result = ""
let showConnectCode_y = 0
let showConnectCode_x = 0
let connectCode = ""
let executionStatus = ""
let players: string[] = []
let arrayValue: string[] = []
function forEach<T>(a: Array<T>, callback: (element : T, index : number) => any) {
    for (let index = 0; index < a.length; index++) {
        callback(a[index], index)
    }
}
const includes = <T>(array: Array<T>, element: T) => array.indexOf(element) !== -1

radio.setGroup(1)
players = []
executionStatus = "waiting_for_players"
connectCode = createConnectCode()
showConnectCode(connectCode)
