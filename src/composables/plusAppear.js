const plusAppear = () => {
    const plus = document.getElementById("plus")
    plus.classList.add("scale-100", "opacity-100")
    let timer
    const startMove = () => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            plus.classList.remove("scale-100", "opacity-100")
            console.log("set time")
        }, 3000)
    }
    startMove()
}

export default plusAppear