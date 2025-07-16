import { View, Text, StyleSheet } from "react-native"

export default function Rodape() {
    return (
        <View style={styles.container}>
            <Text>Criado por Douglas Moura</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 'auto',
        marginBottom: 12
    }
})