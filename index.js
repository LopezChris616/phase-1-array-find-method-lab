function superbowlWin(arr) {
    const winYear = arr.find((element) => {
        return element.result === "W";
    })

    if(winYear !== undefined) {
        return winYear.year;
    }
}