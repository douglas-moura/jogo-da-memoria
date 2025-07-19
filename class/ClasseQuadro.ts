export default class ClasseQuadro {
    private id: number
    private codImg: string
    private visivel: boolean = true
    private aberto: boolean = false
    
    constructor(id: number, img: string) {
        this.id = id
        this.codImg = img
    }

    public setId(id: number): void {
        this.id = id
    }

    public getId(): number {
        return this.id
    }

    public setCodImg(url: string): void {
        this.codImg = url
    }

    public getCodImg(): string {
        return this.codImg
    }

    public setVisivel(): void {
        this.visivel = !this.visivel
    }

    public getVisivel(): boolean {
        return this.visivel
    }

    public setAberto(): void {
        this.aberto = true
    }

    public getAberto(): boolean {
        return this.aberto
    }

    public virarImagem(): void {
        this.setVisivel()
    }
}