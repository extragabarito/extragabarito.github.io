const answerForm = document.getElementById('check-answers-form')
const wholeRemovable = document.getElementById('check-removable')
const selectionWrapper = document.querySelector('.selection-wrapper')
const selection  = document.getElementById('simulado-selection')
const bottomSubmission = document.getElementById("submission-answers")
const removableCover =  document.querySelector(".removable-cover")
const topSubmission = document.getElementById("top-submission")
const displayTypes = document.querySelector(".check-display-types")
const comebackBtn = document.querySelector(".comeback-btn")
const headingExpanded = document.querySelector(".heading-expanded")
const headingRescind = document.querySelector(".heading-rescind")
const forwardBtn = document.querySelector('.forward-btn')
const headingMain = document.querySelector(".check-heading")
const downloadTop = document.querySelector(".download-report-top")
const appendDisplay = document.querySelector('.append-data')
const infoHandler = document.querySelector(".information-handler")
const parallelWrapper = document.getElementById('parallel-wrapper')
const parallelHandler = document.querySelector('.parallel-handler')




function createQuestions(eachCount, initialValue) {
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


    checkBubbles.classList.add("check-bubbles")
    if (initialValue && eachCount > 1) {
        removableCover.classList.add("degrade-content")
        checkBubbles.classList.add("hidden-content")
        bottomSubmission.classList.add("hidden-content")
        selection.classList.add("hidden-content")
        topSubmission.classList.add("hidden-content")
        displayTypes.classList.add("hidden-content")
    }
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

function unleashQuestions() {
    var hiddens = document.querySelectorAll(".hidden-content")
    const unleashTrigger = document.getElementById("unleashTrigger")

    removableCover.remove()
    unleashTrigger.remove()

    for (let hd = 0; hd < hiddens.length; hd++) {
        hiddens[hd].classList.remove("hidden-content")
    }
}

function createParallel(answerTable) {
    const parallelDisplay = document.getElementById('parallel-display')
    for (let pc = 1; pc < 90 + 1; pc++) {
        const parallelBubble = document.createElement('div')
        const parallelQuestion = document.createElement('div')
        const parallelAnswer = document.createElement('select')
        const parallelValueA = document.createElement('option')
        const parallelValueB = document.createElement('option')
        const parallelValueC = document.createElement('option')
        const parallelValueD = document.createElement('option')
        const parallelValueE = document.createElement('option')
        const parallelValueNull = document.createElement('option')

        parallelBubble.classList.add('parallel-bubble')
        parallelQuestion.classList.add('parallel-question')
        parallelAnswer.classList.add('parallel-answer')
        parallelAnswer.classList.add('form-select')

        parallelBubble.id = "parallelBubble" + pc
        parallelQuestion.id = "parallelQuestion" + pc
        parallelAnswer.id = "parallelAnswer" + pc
        parallelAnswer.name = "parallelSelection" + pc

        parallelQuestion.innerHTML = "Questão " + pc

        parallelValueA.innerHTML = "A"
        parallelValueA.value = "A"

        parallelValueB.innerHTML = "B"
        parallelValueB.value = "B"

        parallelValueC.innerHTML = "C"
        parallelValueC.value = "C"

        parallelValueD.innerHTML = "D"
        parallelValueD.value = "D"

        parallelValueE.innerHTML = "E"
        parallelValueE.value = "E"

        parallelValueNull.innerHTML = "Nula"
        parallelValueNull.value = "N"

        parallelDisplay.appendChild(parallelBubble)
        parallelBubble.appendChild(parallelQuestion)

        parallelAnswer.appendChild(parallelValueA)
        parallelAnswer.appendChild(parallelValueB)
        parallelAnswer.appendChild(parallelValueC)
        parallelAnswer.appendChild(parallelValueD)
        parallelAnswer.appendChild(parallelValueE)
        parallelAnswer.appendChild(parallelValueNull)

        parallelBubble.appendChild(parallelAnswer)
    }
}

function triggerCreation() {
    let initialValue = true
    createParallel()
    for (let count = 0; count < 90; count++) {
        createQuestions(count, initialValue) 
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

const oficialsList = ["sas5ING","sas5ESP", "presencial6Cinza", "presencial6Branca"]
const exatasList = ["presencial6Cinza", "presencial6Branca"]
const humanasList = ["sas5ING","sas5ESP"]

const testExatas = [["Ciências da Natureza", [0, 44]], ["Ciências Matemáticas", [45, 89]]]
const testHumanas = [["Linguagens e Códigos", [0, 44]], ["Ciências Humanas", [45, 89]]]
const exatasStructure = [["Física", [0, 14]], ["Química", [15, 29]], ["Biologia", [30, 44]], ["Matemática", [45, 89]]]
const humanasStructure = [["Inglês", [0, 4]], ["Português", [5, 24]], ["Literatura", [25, 44]], ["História", [45, 59]], ["Geografia", [60, 74]], ["Filosofia", [75, 85]], ["Atualidades", [86, 89]]]

const sas5ListING = ["E", "B", "A", "C", "D", "E", "B", "A", "E", "E", "B", "A", "C", "D", "B", "C", "C", "A", "C", "C", "B", "A", "D", "B", "E", "B", "D", "C", "E", "E", "E", "D", "D", "E", "C", "C", "B", "C", "D", "B", "E", "D", "D", "B", "C", "E", "D", "C", "E", "E", "E", "E", "E", "D", "B", "D", "C", "A", "C", "B", "B", "C", "B", "A", "A", "E", "A", "D", "B", "D", "C", "C", "E", "E", "C", "E", "A", "C", "C", "B", "C", "C", "C", "D", "A", "E", "E", "E", "C", "D"]
const sas5ListESP = ["C", "D", "D", "C", "C", "E", "B", "A", "E", "E", "B", "A", "C", "D", "B", "C", "C", "A", "C", "C", "B", "A", "D", "B", "E", "B", "D", "C", "E", "E", "E", "D", "D", "E", "C", "C", "B", "C", "D", "B", "E", "D", "D", "B", "C", "E", "D", "C", "E", "E", "E", "E", "E", "D", "B", "D", "C", "A", "C", "B", "B", "C", "B", "A", "A", "E", "A", "D", "B", "D", "C", "C", "E", "E", "C", "E", "A", "C", "C", "B", "C", "C", "C", "D", "A", "E", "E", "E", "C", "D"]
const presencial6BrancaList = ["B", "C", "A", "E", "B", "N", "C", "C", "B", "B", "D", "A", "B", "C", "A", "E", "B", "A", "C", "B", "E", "B", "B", "D", "E", "D", "E", "C", "B", "E", "D", "C", "E", "E", "D", "C", "A", "B", "N", "D", "E", "C", "C", "B", "E", "B", "C", "B", "B", "B", "D", "D", "B", "A", "B", "C", "B", "E", "E", "B", "B", "A", "C", "B", "B", "D", "C", "A", "A", "C", "B", "A", "D", "E", "C", "C", "E", "B", "B", "C", "C", "C", "B", "A", "D", "A", "C", "E", "A", "B"]
const testList = ["N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"]
const presencial6CinzaList = ["A", "C", "D", "C", "B", "B", "C", "B", "A", "B", "E", "N", "C", "B", "A", "C", "B", "E", "B", "B", "A", "B", "D", "E", "D", "B", "C", "E", "E", "E", "C", "A", "D", "C", "B", "E", "E", "D", "C", "B", "C", "E", "E", "D", "N", "C", "B", "D", "A", "B", "C", "C", "B", "E", "B", "E", "C", "A", "D", "B", "B", "B", "B", "B", "B", "B", "D", "A", "D", "C", "D", "E", "B", "B", "A", "C", "A", "C", "E", "A", "B", "A", "C", "C", "E", "C", "B", "B", "C", "A"]

///////////////////////////////////////////////////////////////////////////

function preGame(answerTable) {
    for (let pg = 0; pg < answerTable.length; pg++) {
        var eachPreGame = answerTable[pg][0][1]
        var currentIDPG = "parallelAnswer" +(pg + 1)
        var insertPreGame = document.getElementById(currentIDPG)
        insertPreGame.value = eachPreGame
    }
}

function cleanedBarPG() {
    const loaderMessage = document.createElement('div')
    const loader = document.createElement('div')

    loaderMessage.className = "loader-message"
    loaderMessage.innerHTML = "Validando o gabarito..."
    loader.className = "loader"
    loader.innerHTML = "Loading..."
    wholeDisplay.appendChild(loader)
    wholeDisplay.appendChild(loaderMessage)
    setTimeout(loaderDone, 1500)
}

function clearedPreGame() {
    var childrenDisplay = wholeDisplay.lastElementChild; 
    while (childrenDisplay) {
        wholeDisplay.removeChild(childrenDisplay);
        childrenDisplay = wholeDisplay.lastElementChild;
    }
    var childrenAppend = appendDisplay.lastElementChild; 
    while (childrenAppend) {
        appendDisplay.removeChild(childrenAppend);
        childrenAppend = appendDisplay.lastElementChild;
    }
    formForward()
    cleanedBarPG()
}

function alterPreGame() {
    var alteredAnswers = []
    for (let aa = 0; aa < 90; aa++) {
        var currentIDAA = "parallelAnswer" +(aa + 1)
        var pregamedEach = document.getElementById(currentIDAA)
        let pregamedValue = pregamedEach.value
        alteredAnswers.push(pregamedValue)
    }
    clearedPreGame()
    formValidation(alteredAnswers)
}


function formValidation(userAnswers) {
    var userScore = 0
    var answerTable = []
    if (parallelHandler.childNodes == 0) {
        var selectionType = selection.value
    } else {
        var selectionType = parallelHandler.innerHTML
    }

    if (selectionType == "presencial6Cinza") {
        var selectionGabarito = presencial6CinzaList
    } else if (selectionType == "presencial6Branca") {
        var selectionGabarito = presencial6BrancaList
    } else if (selectionType == "testNull") {
        var selectionGabarito = testList
    } else if (selectionType == "sas5ING") {
        var selectionGabarito = sas5ListENG
    } else if (selectionType == "sas5ESP") {
        var selectionGabarito = sas5ListESP
    }

    if (exatasList.includes(selectionType) || exatasList.includes(parallelHandler.innerHTML)) {
        infoHandler.innerHTML = "exatas"
    } else {
        infoHandler.innerHTML = "humanas"
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

    downloadTop.disabled = false
    comebackBtn.disabled = false

    doneCheckRemove.remove()
    doneMessageRemove.remove()
    doneCheckPlaceholderRemove.remove()
}

function calculateScore(userScore, answerTable) {
    const userPercentage = ((userScore/90) * 100).toFixed(0)
    const userPCT = userPercentage + "%"
    const displayScorePlaceholder = document.createElement('div')
    const displayScore = document.createElement('div')
    const displayPercentagePlaceholder = document.createElement('div')
    const displayPercentage = document.createElement('div')
    const displayMessage = document.createElement('div')
    const scoreQuestions = document.createElement('div')
    const pctRendimento = document.createElement('div')
    const flexPlaceholderMain = document.createElement('div')
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

    flexPlaceholderMain.classList.add('flex-placeholder-main')
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
    wholeDisplay.appendChild(flexPlaceholderMain)
    flexPlaceholderMain.appendChild(displayScorePlaceholder)
    flexPlaceholderMain.appendChild(displayPercentagePlaceholder)
    displayScorePlaceholder.appendChild(displayScore)
    displayScorePlaceholder.appendChild(scoreQuestions)
    displayPercentagePlaceholder.appendChild(displayPercentage)
    displayPercentagePlaceholder.appendChild(pctRendimento)

    const resultsHeader = document.createElement('div')
    const resultsInfo = document.createElement('div')
    const infoNumber = document.createElement('div')
    const infoRight = document.createElement('div')
    const infoSent = document.createElement('div')

    const infoGraph = dashboardCreate(answerTable)
    createGraph(infoGraph)
    preGame(answerTable)

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

    for (let at = 0; at < answerTable.length; at++) {
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

  
function createGraph(infoGraph) {
    const graphLocation = document.querySelector(".graph-location")
    const graphDisplay = document.createElement('div')
    const indicatorWrapper = document.createElement('div')
    const indicatorZero = document.createElement('div')
    const indicatorHalf = document.createElement('div')
    const indicatorTop = document.createElement('div')
    const barIndicatorLow = document.createElement('div')
    const barIndicatorHigh = document.createElement('div')

    indicatorWrapper.classList.add('indicator-wrapper')

    graphDisplay.classList.add('graph-display')
    graphLocation.appendChild(indicatorWrapper)
    graphLocation.appendChild(graphDisplay)


    indicatorHalf.classList.add('indicator-half')
    indicatorHalf.classList.add('indicator-numbers')
    indicatorZero.classList.add('indicator-zero')
    indicatorZero.classList.add('indicator-numbers')
    indicatorTop.classList.add('indicator-top')
    indicatorTop.classList.add('indicator-numbers')

    barIndicatorLow.classList.add('bar-indicator')
    barIndicatorHigh.classList.add('bar-indicator')

    indicatorZero.innerHTML = 0
    indicatorHalf.innerHTML = 50
    indicatorTop.innerHTML = 100

    indicatorWrapper.appendChild(indicatorTop)
    indicatorWrapper.appendChild(barIndicatorHigh)
    indicatorWrapper.appendChild(indicatorHalf)
    indicatorWrapper.appendChild(barIndicatorLow)
    indicatorWrapper.appendChild(indicatorZero)

    if (infoGraph[0].length > 4) {
        var infoSize = infoGraph[0].length - 1
    } else {
        var infoSize = infoGraph[0].length
    }

    for (let nh = 0; nh < infoSize; nh++) {
        if (infoGraph[0][nh] == "Inglês") {
            nh++
        }
        const graphBubble =  document.createElement('div')
        const graphBar = document.createElement('div')
        const graphLegend = document.createElement('div')

        graphBubble.classList.add('graph-bubble')
        graphBar.classList.add('graph-bar')
        graphLegend.classList.add('graph-legend')

        graphBubble.id = "bubbleID" + nh
        graphBar.id = "barID" + nh
        graphLegend.id = "legendID" + nh

        var graphOT = infoGraph[0][nh].slice(0, 3)

        graphBar.style.height = infoGraph[1][nh] + "%"
        graphLegend.innerHTML = graphOT

        graphDisplay.appendChild(graphBubble)
        graphBubble.appendChild(graphBar)
        graphBubble.appendChild(graphLegend)
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

    const doneCheckPlaceholder = document.createElement('div')
    const doneCheck = document.createElement('div')
    const doneMessage = document.createElement('div')


    loaderRemove.remove()
    loaderMessageRemove.remove()
    doneCheckPlaceholder.className = "check-placeholder"
    doneCheck.className = "check"
    doneMessage.innerHTML = "Pontuação calculada!"
    doneMessage.className = "done-message"
    wholeDisplay.appendChild(doneCheckPlaceholder)
    doneCheckPlaceholder.appendChild(doneCheck)
    wholeDisplay.appendChild(doneMessage)
    setTimeout(formSetup, 1000)
}

function cleanBar() {
    const checkFooter = document.querySelector('.check-footer')

    const loaderMessage = document.createElement('div')
    const loader = document.createElement('div')

    headingMain.remove()
    wholeRemovable.remove('hidden-content-important')
    checkFooter.remove()


    headingExpanded.classList.remove("hidden-content-onconfer")
    comebackBtn.classList.remove("hidden-content-onconfer")
    downloadTop.classList.remove("hidden-content-onconfer")

    loaderMessage.className = "loader-message"
    loaderMessage.innerHTML = "Validando o gabarito..."
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
        var IIOMessage = "GABARITO OFICIAL"
    } else {
        var IIOMessage = "GABARITO EXTRAOFICIAL"
    }

    const typeIIO = document.querySelector('.check-display-title')
    const parallelHeading = document.querySelector('.parallel-heading')

    parallelHeading.innerHTML =IIOMessage
    typeIIO.innerHTML = IIOMessage

    let selectionInside = selection.value
    parallelHandler.innerHTML = selectionInside
}

function rescindAnswers() {
    appendDisplay.classList.add('hidden-content-important')
    wholeDisplay.classList.add('hidden-content-important')
    headingExpanded.classList.add('hidden-content-onconfer')
    headingRescind.classList.remove('hidden-content-forward')

    parallelWrapper.classList.remove('hidden-content-important')

}

function formForward() {
    appendDisplay.classList.remove('hidden-content-important')
    wholeDisplay.classList.remove('hidden-content-important')
    headingExpanded.classList.remove('hidden-content-onconfer')
    headingRescind.classList.add('hidden-content-forward')

    parallelWrapper.classList.add('hidden-content-important')
}

function dashboardCreate(answerTable) {
    const dashboardDisplay = document.createElement('div')
    const dashboardHeading = document.createElement('div')
    const bubbleWrapper = document.createElement('div')
    const dashboardSubjectSUB = document.createElement('div')
    const newIndicator =  document.createElement('p')

    bubbleWrapper.classList.add("bubble-wrapper-container")
    dashboardSubjectSUB.classList.add("dash-subject-sub")
    dashboardDisplay.classList.add("dashboard-display")
    dashboardHeading.classList.add("dashboard-heading")

    dashboardHeading.innerHTML = "Dashboard"
    newIndicator.classList.add("new-indicator")
    newIndicator.innerHTML = "Novo!"
    dashboardHeading.appendChild(newIndicator)

    appendDisplay.appendChild(dashboardDisplay)
    dashboardSubjectSUB.innerHTML = "Por Disciplina"
    dashboardDisplay.appendChild(dashboardHeading)
    dashboardDisplay.appendChild(dashboardSubjectSUB)
    const graphPosition = document.createElement('div')
    graphPosition.classList.add("graph-location")
    dashboardDisplay.appendChild(graphPosition)
    dashboardDisplay.appendChild(bubbleWrapper)

    if (infoHandler.innerHTML == "exatas") {
        var concisionInput = exatasStructure
        var typeofInput = testExatas
    } else {
        var concisionInput = humanasStructure
        var typeofInput = testHumanas
    }

    var percentagesList = []
    var titlesList = []

    for (let es = 0; es < concisionInput.length; es++) {
        const subjectBubbles = document.createElement('div')
        const subjectAnswers = document.createElement('div')
        const subjectPercentages = document.createElement('div')

        subjectBubbles.classList.add("subject-bubbles")
        subjectAnswers.classList.add("subject-answers")
        subjectPercentages.classList.add("subject-pcts")

        let eachSB = concisionInput[es]
        let sbTitle = eachSB[0]
        let sbRange = eachSB[1]
        let sbStart = sbRange[0]
        let sbEnd = sbRange[1]
        
        const subjectSubtitle = document.createElement('div')
        subjectSubtitle.classList.add("subject-subtitle")
        subjectSubtitle.innerHTML = sbTitle
        subjectBubbles.appendChild(subjectSubtitle)
        

        var crScore = 0

        for (let cr = sbStart; cr < sbEnd + 1; cr++) {
            if (answerTable[cr][1] != "correct") {
                crScore++
            }
        }

        let sizeRange = ((sbEnd + 1) - sbStart)
        let crOutput = (sizeRange - crScore)
        let subjectScorePCT = ((crOutput/sizeRange) * 100).toFixed(0)

        titlesList.push(sbTitle)
        percentagesList.push(subjectScorePCT)

        subjectAnswers.innerHTML = crOutput
        const paraRange = document.createElement('p')
        paraRange.classList.add('para-range')
        paraRange.innerHTML = "/ " + sizeRange
        subjectAnswers.appendChild(paraRange)
        subjectPercentages.innerHTML = subjectScorePCT + "%"
        const subjectDisplay = document.createElement('div')
        subjectDisplay.classList.add("subject-display")
        bubbleWrapper.appendChild(subjectBubbles)
        subjectBubbles.appendChild(subjectDisplay)
        subjectDisplay.appendChild(subjectAnswers)
        subjectDisplay.appendChild(subjectPercentages)
    }

    const dashboardAreasSUB = document.createElement('div')
    dashboardAreasSUB.classList.add("dash-area-sub")
    dashboardAreasSUB.innerHTML = "Por Área de Conhecimento"
    dashboardDisplay.appendChild(dashboardAreasSUB)

    const bubbleWrapperArea = document.createElement('div')
    bubbleWrapperArea.classList.add("bubble-wrapper-container")
    dashboardDisplay.appendChild(bubbleWrapperArea)

    for (let tt = 0; tt < typeofInput.length; tt++) {
        const subjectBubbles = document.createElement('div')
        const subjectAnswers = document.createElement('div')
        const subjectPercentages = document.createElement('div')

        subjectBubbles.classList.add("subject-bubbles")
        subjectAnswers.classList.add("subject-answers")
        subjectPercentages.classList.add("subject-pcts")

        let eachTT = typeofInput[tt]
        let ttTitle = eachTT[0]
        let ttRange = eachTT[1]
        let ttStart = ttRange[0]
        let ttEnd = ttRange[1]

        const subjectSubtitle = document.createElement('div')
        subjectSubtitle.classList.add("subject-subtitle")
        subjectSubtitle.innerHTML = ttTitle
        subjectBubbles.appendChild(subjectSubtitle)

        var mtScore = 0

        for (let mt = ttStart; mt < ttEnd + 1; mt++) {
            if (answerTable[mt][1] != "correct") {
                mtScore++
            }
        }

        let sizeRangeTT = ((ttEnd + 1) - ttStart)
        let mtOutput = (sizeRangeTT - mtScore)
        let subjectScorePCT = ((mtOutput/sizeRangeTT) * 100).toFixed(0)
        subjectAnswers.innerHTML = mtOutput
        const paraRange = document.createElement('p')
        paraRange.classList.add('para-range')
        paraRange.innerHTML = "/ " + sizeRangeTT
        subjectAnswers.appendChild(paraRange)
        subjectPercentages.innerHTML = subjectScorePCT + "%"
        const subjectDisplay = document.createElement('div')
        subjectDisplay.classList.add("subject-display")
        bubbleWrapperArea.appendChild(subjectBubbles)
        subjectBubbles.appendChild(subjectDisplay)
        subjectDisplay.appendChild(subjectAnswers)
        subjectDisplay.appendChild(subjectPercentages)
    }

    var listBundle = []
    listBundle.push(titlesList)
    listBundle.push(percentagesList)

    return listBundle
}

document.addEventListener( "DOMContentLoaded", triggerCreation());
document.addEventListener( "DOMContentLoaded", selectionSetup());
