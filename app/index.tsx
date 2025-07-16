import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { JogoProvider } from '../context/JogoContext'
import Tabuleiro from '../assets/components/Tabuleiro'
import Menu from './menu'
import Parabens from './parabens'
import ClassePartida from '../class/ClassePartida'
import Cabecalho from '../assets/components/Cabecalho'

const p1 = new ClassePartida

export default function App() {
    const [grade, setGrade] = useState(p1.gerarGrade())

    return (
        <JogoProvider>
            <SafeAreaView style={[styles.container, { flex: 1 }]} edges={['top', 'bottom']}>
                <Menu />
                <Parabens />
                <View style={styles.jogoContainer}>
                    <Cabecalho />
                    <Tabuleiro grade={grade} />
                </View>
            </SafeAreaView>
        </JogoProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
    },
    mensagemContainer: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        height: '120%',
        width: '100%',
        zIndex: 90
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