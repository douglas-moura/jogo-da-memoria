export default function embatalharQuadros(imgs: Array<string>): Array<string> {
    // duplicando valores do array de imagens
    let novoArray: Array<string> = []
    for (let i = 0; i < imgs.length; i++) novoArray.push(imgs[i], imgs[i])
        
    // embaralha array duplicado
    // código de terceiros
    let m = novoArray.length, t, i
    while (m) {
        i = Math.floor(Math.random() * m--)
        t = novoArray[m]
        novoArray[m] = novoArray[i]
        novoArray[i] = t
    }

    return novoArray
}