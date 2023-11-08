const styleMain = document.querySelector(".style-main")

setInterval(() => {
    const span = document.createElement("span")
    const span2 = document.createElement("span")
    const span3 = document.createElement("span")
    const span4 = document.createElement("span")
    const span5 = document.createElement("span")

    span.className = `circle`
    span2.className = `circle2`
    span3.className = `circle3`
    span4.className = `circle4`
    span5.className = `circle5`

    styleMain.appendChild(span)
    styleMain.appendChild(span2)
    styleMain.appendChild(span3)
    styleMain.appendChild(span4)
    styleMain.appendChild(span5)
}, 1000)

