import ClasseQuadro from "./ClasseQuadro"
import embatalharQuadros from '../assets/functions/embaralharQuadros'
import numToTime from "../assets/functions/numToTime"

export default class ClassePartida {
    public pontos: number = 0
    public imagens: Array<string> = ["luff", "zoro", "nami", "usop", "sanj", "chop", "robi", "fran", "broo", "jinb"]

    public gerarGrade(): Array<ClasseQuadro> {
        const quadrosEmbaralhados: Array<string> = embatalharQuadros(this.imagens)
        const novoArrayQuadros: Array<ClasseQuadro> = []

        quadrosEmbaralhados.map((element, index) => {
            const novoQuadro = new ClasseQuadro
            novoQuadro.setId(index)
            novoQuadro.setImg(element)
            novoArrayQuadros.push(novoQuadro)
        })
        
        return novoArrayQuadros
    }
}