import { StyleSheet, View, Text, Pressable } from 'react-native'
import * as Updates from 'expo-updates'
import { useJogo } from '../../context/JogoContext'

export default function MensagemParabens() {
    const { acertos, pontos, tempo } = useJogo()

    if (acertos == 10) {
        return (
            <Pressable style={styles.parabensContainer} onPress={() => { Updates.reloadAsync() }}>
                <View style={styles.parabensMenu}>
                    <Text>Jogo da Memória - One Piece</Text>
                    <Pressable>
                        <Text>Parabéns</Text>
                    </Pressable>
                </View>
                <View style={styles.pelicula}></View>
            </Pressable>
        )
    } else {
        return null
    }
}

const styles = StyleSheet.create({
    parabensContainer: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        height: '120%',
        width: '100%',
        zIndex: 90
    },
    parabensMenu: {
        backgroundColor: '#fff',
        padding: 32,
        borderRadius: 8,
        zIndex: 80,
        marginTop: '-30%',
        elevation: 10
    },
    pelicula: {
        position: 'absolute',
        backgroundColor: '#fff',
        height: '100%',
        width: '100%',
        opacity: .85,
        zIndex: 2,
    },
})