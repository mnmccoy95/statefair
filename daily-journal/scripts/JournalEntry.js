import {getEntries, useEntries, saveEntry} from "./JournalDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".entryContainer")
const entryListTarget = document.querySelector("#entryLog")

export const renderEntries = (entries) => {
    entryListTarget.innerHTML = 
    `${
            entries.map(entry => {
                return `<section id="entry--${entry.id}" class="journalEntry">
                Date: ${new Date(entry.date).toLocaleDateString('en-US')} <br>    
                Concept: ${entry.concept} <br>
                ${entry.entry} <br>
                Mood: ${entry.mood} <br>
                </section>` }).join("<br>")
    }
`}


eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "saveEntry") {
        const entryConcept = document.querySelector("#conceptForm")
        const entryContent = document.querySelector("#entryForm")
        const entryMood = document.querySelector("#moodForm")
        if(entryContent.value.length !== 0){
            const newEntry = {
                date: Date.now(),
                concept: entryConcept.value,
                entry: entryContent.value,
                mood: entryMood.value
            }
            saveEntry(newEntry)
            .then(() => {
                getEntries()
                .then(() => {
                    const entries = useEntries();
                    renderEntries(entries)
                })
            })
        } else {
            window.alert("Please Input Entry");
        }
    }
})

export const renderForm = () => {
    contentTarget.innerHTML = `
            <fieldset>
                Concepts Covered<br>
                <input type="text" id="conceptForm" placeholder="Put Concepts Here"></input>
            </fieldset>
            <fieldset>
                Journal Entry</br>
                <textarea id="entryForm" placeholder="Put Entry Here"></textarea>
            </fieldset>
            <fieldset>
                <label for="moodForm">Mood for the Day</label>
                <input type="text" id="moodForm" placeholder="Enter your mood!"></input>
            </fieldset>
            <input type="submit" id="saveEntry"></button>
    `
}