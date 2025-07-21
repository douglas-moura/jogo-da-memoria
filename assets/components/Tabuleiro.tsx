import { View, Pressable, StyleSheet } from "react-native"
import { calcularPontos } from "../functions/calcularPontos"
import { useJogo } from "../../context/JogoContext"
import Quadro from "./Quadro"
import ClasseQuadro from "../../class/ClasseQuadro"
import { bordas, espacamentos } from "../style/style_global"

type Props = {
    grade: Array<ClasseQuadro>
}

const bordasGlobal = bordas()
const espacGlobal = espacamentos()

export default function Tabuleiro({ grade }: Props) {
    const {
        tempo,
        stage1, setStage1,
        stage2, setStage2,
        acertos, setAcertos,
        pontos, setPontos
    } = useJogo()
    
    
    // após 3 segundos, vira todas as imagens
    tempo == 1 ? setTimeout(() => { grade.map((quadro) => ( quadro.virarImagem() )) }, 2000) : null

    return (
        <View style={styles.gradeContainer}>
            {grade.map((quadro) => (
                <Pressable style={styles.quadroContainer} key={quadro.getId()} onPress={() => {
                    // !quadro.getAberto() se for verdadeiro, então este quadro já foi encontrado com seu par
                    // !stage2 se verdadeiro, significa que ainda há um checagem em pendente
                    if (quadro.getAberto() == false && stage2 == null) {
                        // se verdadeiro, o stage 1 esta ocupado e o stage 2 estiver disponível
                        if (stage1 != null && stage2 == null) {
                            // segunda imagem
                            // se a imagem do quadro for igual a do stage porém com número de ID diferentes
                            if (quadro.getCodImg() == grade[stage1].getCodImg() && quadro.getId() != grade[stage1].getId()) {
                                // ACERTO
                                setPontos(calcularPontos(10000, pontos, tempo))
                                // define ambos os quadros como resolvidos
                                quadro.setAberto()
                                if (stage1) grade[stage1].setAberto()
                                // libera o stage um para inciar uma nova comparação
                                setStage1(null)
                                setAcertos(acertos + 1)
                            } else {
                                // ERRO
                                //setPontos(calcularPontos(1000, pontos, tempo))
                                // insere o segundo quadro no stage 2 para impedir um terceiro clique durante esta comparação
                                setStage2(quadro.getId())
                                setTimeout(() => {
                                    // oculta novamente as duas imagens diferentes
                                    quadro.virarImagem()
                                    if (stage1 != null) grade[stage1].virarImagem()
                                    // libera amobos os stages para uma nova comparação
                                    setStage1(null)
                                    setStage2(null)
                                }, 800)
                            }
                        } else {
                            // se for a primeira imagem
                            setStage1(quadro.getId())
                        }
                        // vira o quadro
                        quadro.virarImagem()
                    }
                }}>
                    <Quadro quadroInfos={quadro} />
                </Pressable>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    gradeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap', // permite quebra de linha
        justifyContent: 'space-between',
    },
    quadroContainer: {
        width: '23.5%'
    }
})