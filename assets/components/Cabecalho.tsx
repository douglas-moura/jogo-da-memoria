import { View, Text, StyleSheet } from "react-native"
import { useJogo } from "../../context/JogoContext"
import numToTime from "../functions/numToTime"

export default function Cabecalho() {
    const {
        tempo,
        pontos
    } = useJogo()

    return (
        <View style={styles.partidaInfosContainer}>
            <Text style={styles.infosTexto}>Tempo: {numToTime(tempo)}</Text>
            <Text style={styles.infosTexto}>Pontos: {pontos.toLocaleString('de-DE')}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    partidaInfosContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    infosTexto: {
        fontSize: 18,
        fontWeight: 'bold'
    },
})