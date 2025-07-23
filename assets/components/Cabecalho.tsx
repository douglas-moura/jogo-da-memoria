import { View, Text, StyleSheet } from "react-native"
import { useJogo } from "../../context/JogoContext"
import { bordas_global, espacamentos_global } from "../style/style_global"
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
        backgroundColor: '#e6e6e6',
        marginBottom: 12,
        borderRadius: bordas_global.rounded_3x,
        padding: espacamentos_global.padding_0x,
    },
    infosTexto: {
        fontSize: 18,
        fontWeight: 'bold'
    },
})