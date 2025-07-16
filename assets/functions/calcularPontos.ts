export const calcularPontos = (pb: number, p: number, t: number): number => {
    let calcPontos: number = Math.floor(pb / t)
    let nPontos = calcPontos + p
    return nPontos
}