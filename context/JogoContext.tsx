import { useState, useEffect, useContext, createContext, ReactNode } from "react"

// Tipagem do contexto
interface UserContextType {
    start: boolean
    setStart: (s: boolean) => void

    tempo: number
    setTempo: (t: number) => void

    stage1: number | null
    setStage1: (n: number | null) => void

    stage2: number | null
    setStage2: (n: number | null) => void

    acertos: number
    setAcertos: (a: number) => void

    pontos: number
    setPontos: (p: number) => void
}

const JogoContext = createContext<UserContextType | undefined>(undefined)

export function JogoProvider({ children }: { children: ReactNode }) {
    const [start, setStart] = useState(false)
    const [tempo, setTempo] = useState(0)
    const [stage1, setStage1] = useState<number | null>(null)
    const [stage2, setStage2] = useState<number | null>(null)
    const [acertos, setAcertos] = useState(0)
    const [pontos, setPontos] = useState(0)

    useEffect(() => {
        // setIntval não funcionou
        if (start) {
            setTimeout(() => {
                setTempo(tempo + 1)
            }, 1000)
        }
        if (acertos == 10) {
            setStart(false)
        }
        //console.log('stage1: ', stage1)
        //console.log('stage2: ', stage2)
    }, [start, acertos, tempo, stage1, stage2])

    return (
        <JogoContext.Provider value={{ start, setStart, tempo, setTempo, stage1, setStage1, stage2, setStage2, acertos, setAcertos, pontos, setPontos }}>
            { children }
        </JogoContext.Provider>
	)
}

export function useJogo() {
	const context = useContext(JogoContext)
    if (!context) {
        throw new Error("useJogo deve ser usado dentro de um JogoProvider")
    }
    return context
}