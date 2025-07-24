import { View, Text, StyleSheet } from "react-native"
import { cores_global } from "../style/style_global"

export default function Rodape() {
    return (
        <View style={styles.container}>
            <Text style={{ color: cores_global.secundaria.sombra, fontSize: 12 }}>Desenvolvido por Douglas Moura</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 'auto',
        marginBottom: 12
    }
})