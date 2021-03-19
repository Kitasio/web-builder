
const createContainer = () => {
    const parent = document.getElementById("project")
    const plus = document.getElementById("plus")
    const box = document.createElement("div")
    box.classList.add("custom-element" ,"bg-gray-100", "h-24")
    
    parent.insertBefore(box, plus)
}

export default createContainer