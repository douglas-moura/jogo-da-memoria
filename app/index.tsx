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
    jogoContainer: {
        padding: 12,
        width: '90%',
        height: 'auto',
        margin: 'auto',
        backgroundColor: '#f6f6f6',
        borderRadius: 8,
    }
})