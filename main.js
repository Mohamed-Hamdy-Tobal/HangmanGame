// Letters
const letters = "abcdefghijklmnopqrstuvwxyz"

// Get Letters From An Array
let lettersArr = Array.from(letters)

// Select The Letters Container
let lettersContainer = document.querySelector(".letters")

// Generate Letters
lettersArr.forEach(myLetters => {

    // Create Span
    let span = document.createElement("span")

    // Create Letter Text Node
    let theLetter = document.createTextNode(myLetters)
    
    // Append The Letter To The Span
    span.appendChild(theLetter)

    // Add Class On The Span
    span.className = "letter-box"

    // Append Span To Letters Container
    lettersContainer.append(span)

})

// -------------------------------------------------------

// Import From Json File

// Object Of Words And Categories
let Words = {
    programming : [],
    movies: [],
    people: [],
    countries: []
}

let myRequest = new XMLHttpRequest()
myRequest.open("GET", "categories.json")
myRequest.send()
myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let jsData = JSON.parse(this.responseText);
        console.log(jsData)
        // Loop Through The Categories
        for (let category in jsData) {
            // Loop Through The Words In Each Category
            for (let word of jsData[category]) {
                // Add The Word To The Words Object
                Words[category].push(word)
            }
        }
        // Get Random Property From The Categories
        let allKeys = Object.keys(Words)
        // The Random Property
        let randomPropNumber = Math.floor(Math.random() * allKeys.length)
        // The Name Of Property
        let randomPropName = allKeys[randomPropNumber]
        // The Value Of Property
        let randomPropValue = Words[randomPropName]

        // ------------------
        let myHint = document.createElement("span")
        let myTextFor = document.createElement("span")
        let textFor = document.createTextNode(`Word For : `);
        let textHint = document.createTextNode(`${randomPropName}`);
        let divHint = document.createElement("div");
        myHint.className = "hint"
        myTextFor.className = "for"
        divHint.classList = "divhint"
        myTextFor.appendChild(textFor)
        myHint.appendChild(textHint)
        divHint.appendChild(myTextFor)
        divHint.appendChild(myHint)
        document.body.before(divHint)
        // --------------
        // The Random Value
        let randomValueNumber = Math.floor(Math.random() * randomPropValue.length)
        // The Value Itself
        let randomValueValue = randomPropValue[randomValueNumber]
        console.log(randomValueValue)
        // let wordFor = document.querySelector(".game-info.category span")
        // wordFor.innerHTML = randomPropName;
        // Select Letters Guess Elements
        let lettersGuessContainer = document.querySelector(".letter-guess")
        // Convert The Chosen Word To Array
        let letterAndSpaces = Array.from(randomValueValue)
        letterAndSpaces.forEach((letter) => {
            // Create Span
            let emptySpan = document.createElement("span")
            // Check If The Span Has Any Space
            if (letter == " ") {
                emptySpan.classList = "has-space"
            }
            // Append The Span To Letters Guess
            lettersGuessContainer.appendChild(emptySpan)
        })
        // Select Guess Span
        let myGuessSPan = document.querySelectorAll(".letter-guess span")
        let count = myGuessSPan.length
        // Set Wrong Attempt
        let wrongAttempt = 0
        // Select The Draw Element
        let theDraw = document.querySelector(".hangman-draw")
        // Handle Clicking On Letters
        // Title Of Popup
        let title = document.querySelector(".popup")
        let myLetterSpans = document.querySelectorAll(".letter-box")
        myLetterSpans.forEach(function(element) {
            // Set The Chose Status
            let theStatus = false
            element.addEventListener("click", function() {
                element.classList.add("clicked");
                // Get The Clicked Letter
                let clickedLetter = element.innerHTML.toLowerCase()
                console.log(clickedLetter)
                // Chosen Word In Small Letters
                let ChosenWord = Array.from(randomValueValue.toLowerCase())
                console.log(ChosenWord)
                // Make Loop On The Chosen Word, To Know The  Index When I Clicked On Letter
                ChosenWord.forEach((wordLetter, wordIndex) => {
                    if (clickedLetter == wordLetter) {
                        console.log(`Found At Index ${wordIndex}, ${wordLetter}`)
                        // Set Status To Correct
                        theStatus = true
                        // Make Loop On Letter Guess To Check, If any of its index is equal to the index of the main word
                        // make the span that its index is achieve that is equal to the letter
                        myGuessSPan.forEach((span, spanIndex) => {
                            if (wordIndex === spanIndex) {
                                span.innerHTML = clickedLetter
                                count = count - 1
                            }
                            if (count == 0) {
                                endWin()
                                lettersContainer.classList.add("finished")
                                document.getElementById("win").play()
                            }
                        })
                    }
                })
                // If Letter Is Wrong
                if (theStatus!== true) {
                    // Increase Wrong Attempt
                    wrongAttempt++
                    // Add class wrong to Draw Element
                    theDraw.classList.add(`wrong-${wrongAttempt}`)
                        if (wrongAttempt <= 7) {
                        // Play The Fail Audio
                        document.getElementById("fail").play()
                        }
                        if (wrongAttempt == 8) {
                        endGame()
                        lettersContainer.classList.add("finished")
                        document.getElementById("gameover").play()
                        }
                        } else {
                            // Play The Success Audio
                            document.getElementById("success").play()
                        }
            });
        });

        // End Game Function

        let mainContainer = document.querySelector(".container")

        function endGame() {

            // Create Popup
            let div = document.createElement("div")

            // Create The Text
            let textPopup = document.createTextNode(`Game Over, The Word Is ${randomValueValue}`)

            // Append Text To Div
            div.appendChild(textPopup)

            // Create Class
            div.className = "popup"

            // Append To Body
            mainContainer.appendChild(div)



            // Create button try
            let tryAgain = document.createElement("span")

            let textTry = document.createTextNode(`Try Again?`)

            tryAgain.appendChild(textTry)

            tryAgain.className = "try"
            
            tryAgain.addEventListener("click", function() {
                setTimeout(function() {
                    location.reload()
                }, 2000)
            })


            // Create button cancel
            let cancel = document.createElement("span")

            let textCancel = document.createTextNode(`Cancel`)

            cancel.appendChild(textCancel)

            cancel.className = "cancel"

                
            cancel.addEventListener("click", function() {
                setTimeout(function() {
                    window.close()
                }, 2000)
            })

            // Create Box Of Two Child 
            let divEnd = document.createElement("div")

            divEnd.appendChild(tryAgain)
            divEnd.appendChild(cancel)
            divEnd.className = "boxEnd"

            // Append To Body
            mainContainer.appendChild(divEnd)


        }

        function endWin() {

            // Create Popup
            let div = document.createElement("div")

            // Create The Text
            let textPopup = document.createTextNode(`Congratulation, You Win`)

            // Append Text To Div
            div.appendChild(textPopup)

            // Create Class
            div.className = "popup"

            // Append To Body
            mainContainer.appendChild(div)

            // Append The Word
            let finalWord = document.createElement("span")
            finalWord.className = "finalWord"
            let textWord = document.createTextNode(randomValueValue)
            finalWord.appendChild(textWord)
            mainContainer.appendChild(finalWord)

            setInterval(function() {
                div.innerHTML += "."
            }, 1000)
            setTimeout(function() {
                location.reload()
            }, 5000)
        }

    }
};