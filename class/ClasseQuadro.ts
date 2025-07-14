export default class ClasseQuadro {
    public id: number | null
    public img: string | null

    constructor() {
        this.id = null
        this.img = null
    }

    public setId(id: number): void {
        this.id = id
    }

    public getId(): number | null {
        return this.id
    }

    public setImg(url: string): void {
        this.img = url
    }

    public getImg(): string | null {
        return this.img
    }
}