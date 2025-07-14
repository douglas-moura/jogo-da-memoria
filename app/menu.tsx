import { StyleSheet, View, Text, Pressable } from 'react-native'

export default function Menu() {
    return (
        <View style={styles.iniciarContainer}>
            <View style={styles.iniciarMenu}>
                <Text>Jogo da Memória</Text>
                <Pressable>
                    <Text>Começar</Text>
                </Pressable>
            </View>
            <View style={styles.pelicula}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    pelicula: {
        position: 'absolute',
        backgroundColor: '#000000',
        height: '100%',
        width: '100%',
        opacity: .7,
        zIndex: 2,
    },
    iniciarContainer: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    iniciarMenu: {
        backgroundColor: '#fff',
        padding: 32,
        borderRadius: 8,
        zIndex: 99,
    }
})