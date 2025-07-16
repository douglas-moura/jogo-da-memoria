import { StyleSheet, View, Text, Pressable } from 'react-native'
import { useJogo } from '../context/JogoContext'

export default function Menu() {
    const {
        start, setStart,
        acertos
    } = useJogo()

    if (!start && acertos == 0) {
        return (
            <View style={styles.iniciarContainer}>
                <View style={styles.iniciarMenu}>
                    <Text>Jogo da Memória</Text>
                    <Pressable onPress={() => setStart(true)}>
                        <Text>Começar</Text>
                    </Pressable>
                </View>
                <View style={styles.pelicula}></View>
            </View>
        )
    } else {
        return null
    }
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
        height: '120%',
        width: '100%',
        zIndex: 90
    },
    iniciarMenu: {
        backgroundColor: '#fff',
        padding: 32,
        borderRadius: 8,
        zIndex: 99,
        marginTop: '-30%',
    }
})