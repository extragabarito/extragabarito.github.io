const answerForm = document.getElementById('check-answers-form')
const selectionWrapper = document.querySelector('.selection-wrapper')

function createQuestions(eachCount) {
    const checkBubbles = document.createElement('div')
    const questionNumber = document.createElement('div')
    const questionWrapper = document.createElement('div')
    const labelA = document.createElement('label')
    const questionA = document.createElement('input')
    const labelB = document.createElement('label')
    const questionB = document.createElement('input')
    const labelC = document.createElement('label')
    const questionC = document.createElement('input')
    const labelD = document.createElement('label')
    const questionD = document.createElement('input')
    const labelE = document.createElement('label')
    const questionE = document.createElement('input')
    const answerBundleA = document.createElement('button')
    const answerBundleB = document.createElement('button')
    const answerBundleC = document.createElement('button')
    const answerBundleD = document.createElement('button')
    const answerBundleE = document.createElement('button')

    const labelNone = document.createElement('label')
    const noAnswer = document.createElement('input')
    const noAnswerBundle = document.createElement('button')


    checkBubbles.className = "check-bubbles"
    answerForm.appendChild(checkBubbles)

    questionNumber.className = "question-number"
    checkBubbles.appendChild(questionNumber)
    questionNumber.innerHTML = "Questão " + (eachCount + 1)
    
    questionWrapper.classList.add("question-wrapper")
    questionWrapper.classList.add("targetResponse" + (eachCount + 1))
    checkBubbles.appendChild(questionWrapper)

    for (let step = 0; step < 5; step++) {

        answerBundleA.className = "answer-bundle"
        answerBundleA.id = ("bundle" + (eachCount + 1) + "A")
        // answerBundleA.type = "button"
        questionWrapper.appendChild(answerBundleA)

        labelA.htmlFor = ("answer-a" + (eachCount + 1))
        labelA.innerHTML = "A"
        labelA.className = "labels"
        questionA.type = "radio"
        questionA.value = "A"
        questionA.classList.add('answer-a')
        questionA.classList.add('targetanswers')
        questionA.id = ("answer-a" + (eachCount + 1))
        questionA.name = ("answers" + (eachCount + 1))
        answerBundleA.type = "button"
        answerBundleA.innerHTML = "A"
        answerBundleA.appendChild(labelA)
        labelA.appendChild(questionA)

        answerBundleB.className = "answer-bundle"
        answerBundleB.id = ("bundle" + (eachCount + 1) + "B")
        // answerBundleB.type = "button"
        questionWrapper.appendChild(answerBundleB)
    
        labelB.htmlFor = ("answer-b" + (eachCount + 1))
        labelB.innerHTML = "B"
        labelB.className = "labels"
        questionB.type = "radio"
        questionB.value = "B"
        questionB.classList.add('answer-b')
        questionB.classList.add('targetanswers')
        questionB.id = ("answer-b" + (eachCount + 1))
        questionB.name = ("answers" + (eachCount + 1))
        answerBundleB.type = "button"
        answerBundleB.innerHTML = "B"
        answerBundleB.appendChild(labelB)
        labelB.appendChild(questionB)

        answerBundleC.className = "answer-bundle"
        answerBundleC.id = ("bundle" + (eachCount + 1) + "C")
        // answerBundleC.type = "button"
        questionWrapper.appendChild(answerBundleC)
    
        labelC.htmlFor = ("answer-c" + (eachCount + 1))
        labelC.innerHTML = "C"
        labelC.className = "labels"
        questionC.type = "radio"
        questionC.value = "C"
        questionC.classList.add('answer-C')
        questionC.classList.add('targetanswers')
        questionC.id = ("answer-c" + (eachCount + 1))
        questionC.name = ("answers" + (eachCount + 1))
        answerBundleC.type = "button"
        answerBundleC.innerHTML = "C"
        answerBundleC.appendChild(labelC)
        labelC.appendChild(questionC)

        answerBundleD.className = "answer-bundle"
        answerBundleD.id = ("bundle" + (eachCount + 1) + "D")
        // answerBundleD.type = "button"
        questionWrapper.appendChild(answerBundleD)
    
        labelD.htmlFor = ("answer-d" + (eachCount + 1))
        labelD.innerHTML = "D"
        labelD.className = "labels"
        questionD.type = "radio"
        questionD.value = "D"
        questionD.classList.add('answer-d')
        questionD.classList.add('targetanswers')
        questionD.id = ("answer-d" + (eachCount + 1))
        questionD.name = ("answers" + (eachCount + 1))
        answerBundleD.type = "button"
        answerBundleD.innerHTML = "D"
        answerBundleD.appendChild(labelD)
        labelD.appendChild(questionD)

        answerBundleE.className = "answer-bundle"
        answerBundleE.id = ("bundle" + (eachCount + 1) + "E")
        // answerBundleE.type = "button"
        questionWrapper.appendChild(answerBundleE)
    
        labelE.htmlFor = ("answer-e" + (eachCount + 1))
        labelE.innerHTML = "E"
        labelE.className = "labels"
        questionE.type = "radio"
        questionE.value = "E"
        questionE.classList.add('answer-e')
        questionE.classList.add('targetanswers')
        questionE.id = ("answer-e" + (eachCount + 1))
        questionE.name = ("answers" + (eachCount + 1))
        answerBundleE.type = "button"
        answerBundleE.innerHTML = "E"
        answerBundleE.appendChild(labelE)
        labelE.appendChild(questionE)

        noAnswer.classList.add("no-answer")
        noAnswer.type = "radio"
        noAnswer.value = "N"
        noAnswer.checked = true
        noAnswerBundle.classList.add("noanswer-bundle")
        noAnswerBundle.classList.add('clicked-bundle')
        noAnswerBundle.type = "button"
        noAnswerBundle.innerHTML = "-"
        noAnswerBundle.id = ( "noanswer" + (eachCount + 1))
        labelNone.htmlFor = ( "noanswer" + (eachCount + 1))
        labelNone.className = "labels"
        questionWrapper.appendChild(noAnswerBundle)
        noAnswerBundle.appendChild(labelNone)
        labelNone.appendChild(noAnswer)
    }
}

function triggerCreation() {
    for (let count = 0; count < 90; count++) {
        createQuestions(count)
    }
}

function clickedButton(currentID) {
    let targetBundle = document.getElementById(currentID)
    let targetInput = targetBundle.firstElementChild.firstElementChild
    let targetParent = targetBundle.parentElement
    let targetNodes = targetParent.childNodes
    for (let tn = 0; tn < targetNodes.length; tn++) {
        if (targetNodes[tn].checked) {
            targetNodes[tn].checked = false
        }
        if (targetNodes[tn].classList.contains('clicked-bundle')) {
            targetNodes[tn].classList.remove('clicked-bundle')
        }
    }
    targetBundle.classList.add('clicked-bundle')
    targetInput.checked = true
}

document.addEventListener('click', function(e){
    if(e.target && e.target.type == "button"){
        clickedButton(e.target.id)
    }
});

const wholeDisplay = document.querySelector('.check-display')

///////////////////////////////////////////////////////////////////////////

const oficialsList = ["presencial1", "testNull", "presencial2", "sas1ING", "sas1ESP"]
const sas1ListING = ["E", "E", "C", "E", "D", "E", "B", "A", "D", "E", "E", "B", "B", "D", "B", "B", "D", "D", "B", "B", "B", "A", "C", "A", "C", "A", "A", "A", "E", "A", "C", "E", "B", "B", "B", "D", "D", "C", "A", "D", "C", "D", "A", "C", "B", "A", "B", "E", "A", "A", "D", "E", "E", "D", "E", "E", "D", "C", "C", "C", "B", "C", "B", "C", "A", "E", "E", "E", "D", "A", "D", "A", "D", "C", "E", "E", "B", "C", "A", "E", "D", "E", "C", "A", "D", "A", "D", "C", "D", "B"]
const sas1ListESP = ["C", "A", "E", "D", "A", "E", "B", "A", "D", "E", "E", "B", "B", "D", "B", "B", "D", "D", "B", "B", "B", "A", "C", "A", "C", "A", "A", "A", "E", "A", "C", "E", "B", "B", "B", "D", "D", "C", "A", "D", "C", "D", "A", "C", "B", "A", "B", "E", "A", "A", "D", "E", "E", "D", "E", "E", "D", "C", "C", "C", "B", "C", "B", "C", "A", "E", "E", "E", "D", "A", "D", "A", "D", "C", "E", "E", "B", "C", "A", "E", "D", "E", "C", "A", "D", "A", "D", "C", "D", "B"]
const presencial2List = ["D", "C", "D", "B", "A", "A", "B", "A", "D", "E", "D", "E", "C", "A", "B", "B", "D", "A", "D", "D", "C", "B", "E", "B", "A", "A", "B", "D", "C", "E", "C", "E", "D", "D", "C", "B", "A", "D", "C", "B", "B", "A", "E", "E", "A", "A", "A", "E", "D", "C", "A", "D", "E", "A", "B", "B", "C", "B", "E", "B", "A", "E", "E", "D", "B", "A", "C", "B", "C", "C", "C", "C", "E", "D", "A", "E", "E", "D", "D", "D", "C", "D", "C", "E", "D", "E", "D", "C", "A", "A"]
const testList = ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"]
const presencial1List = ["A", "B", "D", "D", "N", "D", "D", "E", "C", "B", "C", "C", "A", "B", "C", "C", "C", "D", "D", "E", "D", "B", "E", "D", "A", "E", "D", "B", "B", "A", "D", "B", "D", "E", "D", "A", "D", "E", "B", "C", "B", "C", "A", "D", "C", "D", "D", "B", "B", "A", "C", "E", "B", "B", "B", "A", "E", "D", "E", "A", "A", "B", "B", "B", "C", "D", "D", "A", "D", "B", "B", "E", "B", "B", "C", "D", "E", "D", "E", "B", "C", "C", "D", "B", "A", "A", "B", "B", "A", "C"]

///////////////////////////////////////////////////////////////////////////

const selection  = document.querySelector('select')

function formValidation(userAnswers) {
    var userScore = 0
    var answerTable = []

    if (selection.value == "presencial1") {
        var selectionGabarito = presencial1List
    } else if (selection.value == "presencial2") {
        var selectionGabarito = presencial2List
    } else if (selection.value == "testNull") {
        var selectionGabarito = testList
    } else if (selection.value == "sas1ING") {
        var selectionGabarito = sas1ListING
    } else if (selection.value == "sas1ESP") {
        var selectionGabarito = sas1ListESP
    }


    for (let sg = 0; sg < selectionGabarito.length; sg++) {
        if (selectionGabarito[sg] == userAnswers[sg]) {
            userScore++
            var answerStatus = "correct"
        } else {
            var answerStatus = "wrong"
        }
        let answerInside = []
        answerInside.push(selectionGabarito[sg])
        answerInside.push(userAnswers[sg])
        let answerOutside = []
        answerOutside.push(answerInside)
        answerOutside.push(answerStatus)
        answerTable.push(answerOutside)
    }

    setTimeout(calculateScore, 2500, userScore, answerTable)
}

function formSetup() {
    const doneCheckRemove = document.querySelector('.check')
    const doneMessageRemove = document.querySelector('.done-message')
    const doneCheckPlaceholderRemove = document.querySelector('.check-placeholder')
    doneCheckRemove.remove()
    doneMessageRemove.remove()
    doneCheckPlaceholderRemove.remove()
}

function calculateScore(userScore, answerTable) {
    const userPercentage = ((userScore/90) * 100).toFixed(1)
    const userPCT = userPercentage + "%"
    const displayScorePlaceholder = document.createElement('div')
    const displayScore = document.createElement('div')
    const displayPercentagePlaceholder = document.createElement('div')
    const displayPercentage = document.createElement('div')
    const displayMessage = document.createElement('div')
    const scoreQuestions = document.createElement('div')
    const pctRendimento = document.createElement('div')
    const messageList  = [["Desempenho Insatisfatório", "verybad-performance"], ["Desempenho Abaixo da Média", "bad-performance"], ["Desempenho Mediano", "medium-performance"], ["Desempenho Bom", "good-performance"], ["Desempenho Excelente", "excelent-performance"]]

    if (userPercentage < 30) {
        var messageIndex = 0
    } else if (userPercentage >= 30 && userPercentage < 60) {
        var messageIndex = 1
    } else if (userPercentage >= 60 && userPercentage < 70) {
        var messageIndex = 2
    } else if (userPercentage >= 70 && userPercentage < 80) {
        var messageIndex = 3
    } else if (userPercentage >= 80 && userPercentage <= 100) {
        var messageIndex = 4
    }

    displayPercentagePlaceholder.className = "display-pct-placeholder"
    displayPercentage.className = "display-pct"
    displayPercentage.innerHTML = userPCT
    displayScorePlaceholder.className = "display-score-placeholder"
    displayScore.className ="display-score"
    displayScore.innerHTML = userScore + " de 90"
    displayMessage.className = messageList[messageIndex][1]
    displayMessage.innerHTML = messageList[messageIndex][0]
    scoreQuestions.className = "score-questions"
    scoreQuestions.innerHTML = "questões"
    pctRendimento.className = "pct-rendimento"
    pctRendimento.innerHTML = "aproveitamento"
    wholeDisplay.appendChild(displayMessage)
    wholeDisplay.appendChild(displayScorePlaceholder)
    wholeDisplay.appendChild(displayPercentagePlaceholder)
    displayScorePlaceholder.appendChild(displayScore)
    displayScorePlaceholder.appendChild(scoreQuestions)
    displayPercentagePlaceholder.appendChild(displayPercentage)
    displayPercentagePlaceholder.appendChild(pctRendimento)

    const appendDisplay = document.querySelector('.append-data')
    const resultsHeader = document.createElement('div')
    const resultsInfo = document.createElement('div')
    const infoNumber = document.createElement('div')
    const infoRight = document.createElement('div')
    const infoSent = document.createElement('div')

    resultsHeader.innerHTML = "Gabarito"
    resultsHeader.className = "results-header"
    appendDisplay.append(resultsHeader)

    resultsInfo.className = "results-info"
    appendDisplay.append(resultsInfo)

    infoNumber.innerHTML = "Nº"
    infoNumber.className = "info-number"
    resultsInfo.append(infoNumber)

    infoRight.innerHTML = "Respostas"
    infoRight.className = "info-right"
    resultsInfo.append(infoRight)

    infoSent.innerHTML = "Escolhidas"
    infoSent.className = "info-sent"
    resultsInfo.append(infoSent)

    for (at = 0; at < answerTable.length; at++) {
        let resultsBubble = document.createElement('div')
        let resultsNumber = document.createElement('div')
        let resultsRight = document.createElement('div')
        let resultsSent = document.createElement('div')

        resultsBubble.className = "results-bubble"
        var resultsRightDisplay = answerTable[at][0][0]
        var resultsSentDisplay = answerTable[at][0][1]

        if (resultsSentDisplay == "N") {
            var resultsSentDisplay = "-"
        }
        if (resultsRightDisplay == "N") {
            var resultsRightDisplay = "-"
        }

        resultsNumber.innerHTML = (at + 1)
        resultsRight.innerHTML = resultsRightDisplay
        resultsSent.innerHTML = resultsSentDisplay

        resultsNumber.classList.add("results-number")
        resultsRight.classList.add("results-right")
        resultsSent.classList.add("results-sent")
        if (answerTable[at][1] == "wrong") {
            resultsSent.classList.add("status-wrong")
        }

        appendDisplay.append(resultsBubble)
        resultsBubble.append(resultsNumber)
        resultsBubble.append(resultsRight)
        resultsBubble.append(resultsSent)
    }
}



function formPrepare() {
    let chosenList = []
    for (let fb = 0; fb < 90; fb++) {
        let targetResponse = document.querySelector((".targetResponse" + (fb + 1)))
        let targetNodes = targetResponse.childNodes
        for (let tgn = 0; tgn < 6; tgn++) {
            let targetChild = targetNodes[tgn].firstElementChild.firstElementChild
            targetResponse.firstElementChild
            if (targetNodes[tgn].classList.contains('clicked-bundle')) {
                let chosenValue = targetChild.value
                chosenList.push(chosenValue)
            }
        }
    }
    formValidation(chosenList)
}

function loaderDone() {
    const loaderRemove = document.querySelector('.loader')
    const loaderMessageRemove = document.querySelector('.loader-message')
    loaderRemove.remove()
    loaderMessageRemove.remove()
    const doneCheckPlaceholder = document.createElement('div')
    doneCheckPlaceholder.className = "check-placeholder"
    const doneCheck = document.createElement('div')
    doneCheck.className = "check"
    const doneMessage = document.createElement('div')
    doneMessage.innerHTML = "Pontuação calculada!"
    doneMessage.className = "done-message"
    wholeDisplay.appendChild(doneCheckPlaceholder)
    doneCheckPlaceholder.appendChild(doneCheck)
    wholeDisplay.appendChild(doneMessage)
    setTimeout(formSetup, 1000)
}

function cleanBar() {
    const wholeRemovable = document.querySelector('.check-removable')
    wholeRemovable.remove()
    const checkFooter = document.querySelector('.check-footer')
    checkFooter.remove()
    const loaderMessage = document.createElement('div')
    loaderMessage.className = "loader-message"
    loaderMessage.innerHTML = "Validando o gabarito..."
    const loader = document.createElement('div')
    loader.className = "loader"
    loader.innerHTML = "Loading..."
    wholeDisplay.appendChild(loader)
    wholeDisplay.appendChild(loaderMessage)
    setTimeout(loaderDone, 1500)
}


function formSent() {
    formPrepare()
    cleanBar()
}


function selectionSetup() {
    if (oficialsList.includes(selection.value)) {
        var IIO = "oficial"
    } else {
        var IIO = "notOficial"
    }

    if (IIO == "oficial") {
        var IIOMessage = "* Oficial"
    } else {
        var IIOMessage = "* Extraoficial"
    }

    const typeIIO = document.querySelector('.message-iio')
    typeIIO.innerHTML = IIOMessage
}


document.addEventListener( "DOMContentLoaded", triggerCreation());
document.addEventListener( "DOMContentLoaded", selectionSetup());
