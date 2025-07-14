import { StyleSheet, View, Text, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Menu from './menu'
import ClassePartida from '../class/ClassePartida'
import Quadro from '../assets/components/Quadro'

const p1 = new ClassePartida

export default function App() {
    return (
        <SafeAreaView style={[styles.container, { flex: 1 }]} edges={['top', 'bottom']}>
            {/*<Menu />*/}
            <View style={styles.jogoContainer}>
                <View style={styles.partidaInfosContainer}>
                    <Text style={styles.infosTexto}>Tempo: 00:00</Text>
                    <Text style={styles.infosTexto}>Pontos: {p1.cronometro()}</Text>
                </View>
                <View style={styles.gradeContainer}>
                    {p1.gerarGrade().map((quadro) => (
                        <Quadro key={quadro.id} img={quadro.img} />
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
})