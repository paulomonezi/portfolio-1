document.querySelector(".hamburguer")
    .addEventListener("click", () => {
        document.querySelector(".container")
            .classList.toggle("show-menu")
    })


document.querySelector("#pages").addEventListener("change", updatePrice)
document.querySelector("#js").addEventListener("change", updatePrice)
document.querySelector("#layout-yes").addEventListener("change", updatePrice)
document.querySelector("#layout-no").addEventListener("change", updatePrice)
document.querySelector("#deadline").addEventListener("change", () => {
    const deadline = document.querySelector("#deadline").value
    if (deadline == 1) {
        document.querySelector("label[for=deadline]").innerHTML = `Prazo: ${deadline} semana`
        updatePrice()
        return
    }
    document.querySelector("label[for=deadline]").innerHTML = `Prazo: ${deadline} semanas`
    updatePrice()
})
function updatePrice() {
    const pages = document.querySelector("#pages").value
    const hasJS = document.querySelector("#js").checked
    const needLayout = document.querySelector("#layout-yes").checked
    const deadline = document.querySelector("#deadline").value
    let price = pages * 100;
    if (hasJS) price *= 1.1
    if (needLayout) price += 500
    let deadlineBudgetTax = 1 - deadline * 0.1;
    price *= 1 + deadlineBudgetTax
    document.querySelector("#price").innerHTML = `R$ ${price.toFixed(2)}`
}