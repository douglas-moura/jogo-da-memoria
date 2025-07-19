import { View, Text, StyleSheet } from "react-native"
import { useJogo } from "../../context/JogoContext"
import numToTime from "../functions/numToTime"
import { bordas, espacamentos } from "../style/style_global"

export default function Cabecalho() {
    const {
        tempo,
        pontos
    } = useJogo()

    const bordasGlobal = bordas()
    const espacGlobal = espacamentos()

    return (
        <View style={[styles.partidaInfosContainer, bordasGlobal.rounded_3x, espacGlobal.padding_0x]}>
            <Text style={styles.infosTexto}>Tempo: {numToTime(tempo)}</Text>
            <Text style={styles.infosTexto}>Pontos: {pontos.toLocaleString('de-DE')}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    partidaInfosContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#e6e6e6',
        marginBottom: 12,
    },
    infosTexto: {
        fontSize: 18,
        fontWeight: 'bold'
    },
})