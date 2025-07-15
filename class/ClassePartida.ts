import ClasseQuadro from "./ClasseQuadro"
import embatalharQuadros from '../assets/functions/embaralharQuadros'

export default class ClassePartida {
    private pontos: number = 0
    private acertos: Array<string> = []
    public imagens: Array<string> = ["luff", "zoro", "nami", "usop", "sanj", "chop", "robi", "fran", "broo", "jinb"]

    public setAcerto(cod: string): void {
        this.acertos.push(cod)
    }

    public getAcerto(): Array<string> {
        return this.acertos
    }

    public gerarGrade(): Array<ClasseQuadro> {
        const quadrosEmbaralhados: Array<string> = embatalharQuadros(this.imagens)
        const novoArrayQuadros: Array<ClasseQuadro> = []

        quadrosEmbaralhados.map((element, index) => {
            const novoQuadro = new ClasseQuadro(index, element)
            novoArrayQuadros.push(novoQuadro)
        })
        
        return novoArrayQuadros
    }
}