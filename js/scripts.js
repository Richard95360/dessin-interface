window.onload = () => {
    document.querySelectorAll("#palette div").forEach(el => {
        // On met des couleurs
        el.style.backgroundColor = el.dataset.color
        //On ecoute le clic
        el.addEventListener('click', (e) => {
            canvas.setColor(el.dataset.color)
        })
    })

    let canvas = new Dessin('#feuille')

    // On gere le clic sur le plus
    document.querySelector("#plus").addEventListener('click', () => {
        canvas.biggerStroke()
    })
    //retecir le trait
 
    document.querySelector("#moins").addEventListener('click', () => {
        canvas.smallerStroke()
    })
    //Gomme
    document.querySelector("#gomme").addEventListener('click', () => {
        canvas.setColor("white")
    })
    //le click sur la croix
    document.querySelector("#effacer").addEventListener('click', () => {
        canvas.erase()
    })
}