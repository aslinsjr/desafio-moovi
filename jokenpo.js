var prompt = require('prompt-sync')()

let computerPlay = ""
let userPlay = ""
let score = 0
let menu = 0
let result = "PERDEU"
let register = []

function wellcomeTemplate() {
    const template = `
                                                                          ##
                                                                         #  #
          ##  #######   #######  ##     ## ######## ##    ## ########   #######  
          ## ##     ## ##     ## ##     ## ##       ###   ## ##     ## ##     ## 
          ## ##     ## ##     ## ##     ## ##       ####  ## ##     ## ##     ## 
          ## ##     ## ##     ## ##     ## ######   ## ## ## ########  ##     ## 
    ##    ## ##     ## ##  ## ## ##     ## ##       ##  #### ##        ##     ## 
    ##    ## ##     ## ##    ##  ##     ## ##       ##   ### ##        ##     ## 
     ######   #######   ##### ##  #######  ######## ##    ## ##         #######  `

    console.clear()
    console.log(template)
    twoSpace()
    console.log("                                                                  Score: " + score)
    twoSpace()
}

function loserTemplate() {

    const template = ` 
    
    Você
    
    ########  ######## ########  ########  ######## ##     ## 
    ##     ## ##       ##     ## ##     ## ##       ##     ## 
    ##     ## ##       ##     ## ##     ## ##       ##     ## 
    ########  ######   ########  ##     ## ######   ##     ## 
    ##        ##       ##   ##   ##     ## ##       ##     ## 
    ##        ##       ##    ##  ##     ## ##       ##     ## 
    ##        ######## ##     ## ########  ########  #######  
                                                    
`

    console.log(template)

}

function winnerTemplate() {

    const template = ` 
    
    Você
    
     ######      ###    ##    ## ##     ##  #######  ##     ## 
    ##    ##    ## ##   ###   ## ##     ## ##     ## ##     ## 
    ##         ##   ##  ####  ## ##     ## ##     ## ##     ## 
    ##   #### ##     ## ## ## ## ######### ##     ## ##     ## 
    ##    ##  ######### ##  #### ##     ## ##     ## ##     ## 
    ##    ##  ##     ## ##   ### ##     ## ##     ## ##     ## 
     ######   ##     ## ##    ## ##     ##  #######   #######   
                                                    
`

    console.log(template)

}

function drawTemplate() {

    const template = ` 
    
    Você
    
    ######## ##     ## ########     ###    ########  #######  ##     ## 
    ##       ###   ### ##     ##   ## ##      ##    ##     ## ##     ## 
    ##       #### #### ##     ##  ##   ##     ##    ##     ## ##     ## 
    ######   ## ### ## ########  ##     ##    ##    ##     ## ##     ## 
    ##       ##     ## ##        #########    ##    ##     ## ##     ## 
    ##       ##     ## ##        ##     ##    ##    ##     ## ##     ## 
    ######## ##     ## ##        ##     ##    ##     #######   #######  
                                                    
`

    console.log(template)

}

function twoSpace() {
    console.log()
    console.log()
}

function divisor() {
    console.log("===========================================================================================")
}

function appMenu() {

    console.log("          o que deseja fazer?")
    twoSpace()
    console.log("          1 - Nova Partida")
    console.log("          2 - Resultados")
    console.log("          3 - Sair")
    console.log()
    return menu = parseInt(prompt("          "))
}

function getUserPlay() {
    userPlay = ""

    wellcomeTemplate()

    console.log("          Escolha sua jogada:")
    console.log()
    console.log("          1 - Pedra")
    console.log("          2 - Papel")
    console.log("          3 - Tesoura")
    twoSpace()
    userPlay = prompt("          ")

    while (userPlay !== "1" && userPlay !== "2" && userPlay !== "3") {
        wellcomeTemplate()

        console.log("          Digite uma opção válida:")
        console.log()
        console.log("          1 - Pedra")
        console.log("          2 - Papel")
        console.log("          3 - Tesoura")
        twoSpace()
        userPlay = prompt("          ")
    }

    if (userPlay === "1") {
        userPlay = "Pedra"
    }

    if (userPlay === "2") {
        userPlay = "Papel"
    }

    if (userPlay === "3") {
        userPlay = "Tesoura"
    }

    return userPlay
}

function getComputerPlay() {
    computerPlay = ""

    const array = ["Pedra", "Papel", "Tesoura"]

    return computerPlay = array[Math.floor(Math.random() * 3)]
}

function getResult() {

    result = "PERDEU"

    if (userPlay === computerPlay) {
        return result = "EMPATOU"
    }

    if (userPlay === "Pedra" && computerPlay === "Tesoura") {
        return result = "VENCEU", score = score + 1
    }

    if (userPlay === "Papel" && computerPlay === "Pedra") {
        return result = "VENCEU", score = score + 1
    }

    if (userPlay === "Tesoura" && computerPlay === "Papel") {
        return result = "VENCEU", score = score + 1
    }

    return result, score
}

function printingResult() {

    wellcomeTemplate()

    console.log("          A sua jogada foi: " + userPlay)
    console.log()
    console.log("          A jogada da casa foi: " + computerPlay)

    if (result === "PERDEU") {
        loserTemplate()
    } else if (result === "VENCEU") {
        winnerTemplate()
    } else {
        drawTemplate()
    }

    getRegister()
}

function getRegister() {

    const date = new Date()
    const seconds = date.getSeconds()
    const minutes = date.getMinutes()
    const hours = date.getHours()
    const day = date.getDate()
    const month = date.getMonth() + 1;
    const year = date.getFullYear()

    register.push({
        userPlay: userPlay,
        computerPlay: computerPlay,
        result: result,
        hour: `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`,
        date: `${day < 10 ? "0" + day : day}/${month < 10 ? "0" + month : month}/${year}`,
    })

    return register
}

function newGame() {

    while (menu == 1) {

        getUserPlay()

        getComputerPlay()

        getResult()

        printingResult()

        appMenu()
    }

}

function showingResults() {
    if (menu == 2) {

        console.clear()
        wellcomeTemplate()
        divisor()
        console.log()

        if (register.length > 0) {
            for (let index = 0; index < register.length; index++) {
                const element = register[index];

                console.log(`          ${index + 1}° Rodada - Resultado: ${element.result}`)
                console.log(`          Usuário escolheu ${element.userPlay} e a Casa escolheu ${element.computerPlay}`)
                console.log(`          Horário: ${element.hour} Data: ${element.date}`)
                console.log()

                divisor()

            }
        } else {
            console.clear()
            wellcomeTemplate()
            divisor()

            console.log()
            console.log("          Ainda não há registros de partidas!")
            console.log()

            divisor()

        }

        twoSpace()
        appMenu()   

    }

    
}

function app() {

    wellcomeTemplate()

    appMenu()

    while(menu != 3) {
        newGame()

        showingResults()
    }
    
    console.clear()
}

app()

