let fruta = "Morango"

switch (fruta) {
    case "Laranja":
        console.log("Suco de Laranja")
        break
    case "Banana":
    case "Morango":
        console.log("Vitamina de " + fruta)
        break
    case "Maça":
        console.log("Suco de Maça")
        break
    default:
        console.log("Suco Genérico");


}