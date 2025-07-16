import ClasseQuadro from "./ClasseQuadro"
import embatalharQuadros from '../assets/functions/embaralharQuadros'

export default class ClassePartida {
    public imagens: Array<string> = ["luff", "zoro", "nami", "usop", "sanj", "chop", "robi", "fran", "broo", "jinb"]

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