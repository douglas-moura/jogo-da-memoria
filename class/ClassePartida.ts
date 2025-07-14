import ClasseQuadro from "./ClasseQuadro"
import embatalharQuadros from '../assets/functions/embaralharQuadros'
import numToTime from "../assets/functions/numToTime"

export default class ClassePartida {
    public pontos: number = 0
    public tempo: number = 0
    public grade: number = 4
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

    public cronometro(): string {
        let tempoNum: number = this.tempo
        let tempoFormatado: string = '0'

        // cronometro do jogo
        setInterval(() => {
            let tempoFormatado: string = numToTime(tempoNum)
            this.setTempo(++tempoNum)
        }, 1000)
        return tempoFormatado
    }
    
    public setTempo(t: number) {
        this.tempo = t
    }
}