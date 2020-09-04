import {renderForm, renderEntries} from "./JournalEntry.js"
import {useEntries, getEntries} from "./JournalDataProvider.js"

renderForm()
getEntries().then(()=>{
    const entries = useEntries()
    renderEntries(entries)
})


