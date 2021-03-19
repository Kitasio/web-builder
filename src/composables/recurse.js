function recurse(el) {
    el.forEach(element => {
        if (!element.children.length) {
            console.log("Done!")
        } else {
            let child = element.children
            let id = element.id
            child.forEach(element => {
                const parent = document.getElementById(String(id))
                const box = document.createElement("div")
                box.id = element.id
                if (parent) {
                    const text = document.createTextNode(element.text)
                    const cssList = element.css.split(/[ ]+/);

                    cssList.forEach(el => {
                        box.classList.add(el)
                    })

                    if (text.nodeValue != "undefined") {
                        box.appendChild(text)
                    }

                    parent.appendChild(box)

                    box.addEventListener("click", (e) => {
                        console.log(e.target.id)
                    })
                }
            })
            recurse(child)
        }
    });
}