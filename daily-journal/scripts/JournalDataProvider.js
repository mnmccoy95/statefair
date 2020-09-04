let entries = []

export const getEntries = () => {
    return fetch("http://localhost:8088/entries")
    .then(response => response.json())
    .then(
        parsedEntries => {
            console.log("we never get here??")
            entries = parsedEntries
        }
    )
}

export const useEntries = () => {
    return entries.slice()
}

export const saveEntry = entryObj => {
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(entryObj)
    })
    .then((result) => {
        console.log("CELEBRATE LOL")
    })
}

