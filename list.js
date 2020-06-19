//dropdown box code for fish filter
const fishTypeDropdown = document.querySelector(".typeChoice")
const contentTarget = document.querySelector(".fishList")

const clearFishList = () => contentTarget.innerHTML = ""

fishTypeDropdown.addEventListener("change", (changeEvent) => {
    // Get the value of the option chosen by the user
    const userChoice = changeEvent.target.value

    // If the user chose Holy, clear the list and only show holy fish
    if (userChoice === "all") {
        fishList()
    }
    if (userChoice === "holy") {
        clearFishList()
        showHolyFish()
    }
    if (userChoice === "soldier") {
        clearFishList()
        showSoldierFish()
    }
    if (userChoice === "nonHoly") {
        clearFishList()
        showRegularFish()
    }
})
