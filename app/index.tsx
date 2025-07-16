import { StyleSheet, View, Text, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState, useEffect } from 'react'
import Menu from './menu'
import Parabens from './parabens'
import ClassePartida from '../class/ClassePartida'
import Quadro from '../assets/components/Quadro'
import numToTime from '../assets/functions/numToTime'
import { calcularPontos } from '../assets/functions/calcularPontos'

const p1 = new ClassePartida

export default function App() {
    const [tempo, setTempo] = useState(0)
    const [grade, setGrade] = useState(p1.gerarGrade())
    const [stage1, setStage1] = useState<number | null>(null)
    const [stage2, setStage2] = useState<number | null>(null)
    const [acertos, setAcertos] = useState(0)
    const [pontos, setPontos] = useState(0)

    useEffect(() => {
        // setIntval não funcionou
        setTimeout(() => {
            setTempo(tempo + 1)
        }, 1000)
        //console.log('stage1: ', stage1)
        //console.log('stage2: ', stage2)
    }, [tempo, stage1, stage2])

    return (
        <SafeAreaView style={[styles.container, { flex: 1 }]} edges={['top', 'bottom']}>
            {
                /*<Menu />*/
                acertos >= 10 ? <Parabens /> : null
            }
            <View style={styles.jogoContainer}>
                <View style={styles.partidaInfosContainer}>
                    <Text style={styles.infosTexto}>Tempo: {numToTime(tempo)}</Text>
                    <Text style={styles.infosTexto}>Pontos: {pontos.toLocaleString('de-DE')}</Text>
                </View>
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
                                        setTimeout(() => { setAcertos(acertos + 1) }, 1000)
                                    } else {
                                        // ERRO
                                        setPontos(calcularPontos(1000, pontos, tempo))
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
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
    },
    jogoContainer: {
        padding: 12,
        width: '90%',
        height: 'auto',
        margin: 'auto',
        backgroundColor: '#f6f6f6',
        borderRadius: 8,
    },
    partidaInfosContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    infosTexto: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    gradeContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap', // permite quebra de linha
        justifyContent: 'space-between',
    },
    quadroContainer: {
        width: '23.5%'
    }
})