import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { JogoProvider } from '../context/JogoContext'
import TelaMenu from '../assets/components/TelaMenu'
import MensagemParabens from '../assets/components/MensagemParabens'
import Cabecalho from '../assets/components/Cabecalho'
import Tabuleiro from '../assets/components/Tabuleiro'
import Rodape from '../assets/components/Rodape'
import ClassePartida from '../class/ClassePartida'

const p1 = new ClassePartida

export default function App() {
    const [grade, setGrade] = useState(p1.gerarGrade())

    return (
        <JogoProvider>
            <SafeAreaView style={[styles.container, { flex: 1 }]} edges={['top', 'bottom']}>
                <TelaMenu />
                <MensagemParabens />
                <View style={styles.jogoContainer}>
                    <Cabecalho />
                    <Tabuleiro grade={grade} />
                </View>
                <Rodape />
            </SafeAreaView>
        </JogoProvider>
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
    }
})