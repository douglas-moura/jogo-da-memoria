import { StyleSheet, View, Text, Pressable, Image, Animated } from 'react-native'
import { useRef, useEffect } from 'react'
import { useJogo } from '../../context/JogoContext'
import { LinearGradient } from 'expo-linear-gradient'
import { estilos } from '../style/style_global'
import Icon from 'react-native-vector-icons/Ionicons'
import Rodape from './Rodape'

export default function TelaMenu() {
    const enterDown = useRef(new Animated.Value(1000)).current

    const stylesGlobal = estilos()
    
    const move = () => {
        Animated.timing(enterDown, {
            toValue: 0, // move 100px pra baixo
            duration: 800,
            useNativeDriver: true,
        }).start()
    }

    move()

    const {
        start, setStart,
        acertos
    } = useJogo()

    if (!start && acertos == 0) {
        return (
            <LinearGradient style={styles.iniciarContainer} colors={['#AA3940', '#FF0011']}>
                <Animated.View style={[styles.iniciarMenu, stylesGlobal.rounded_1x, stylesGlobal.padding_0x, { transform: [{ translateY: enterDown }]}]}>
                    <View style={{ flexDirection: 'column', marginTop: -80, alignItems: 'center' }}>
                        <View style={styles.logoContainer}>
                            <Image style={[styles.imgLogo, stylesGlobal.rounded_2x, { transform: 'rotate(16deg)', marginLeft: 40 } ]} source={ require('../img/luff.jpg') } />
                            <Image style={[styles.imgLogo, stylesGlobal.rounded_2x, { transform: 'rotate(-16deg)', marginLeft: -40 }]} source={ require('../img/luff.jpg') } />
                        </View>
                        <Text style={{ fontFamily: 'Coiny-Regular', fontSize: 36, textAlign: 'center', marginTop: 48, }}>Jogo da Memória</Text>
                        <Text style={{}}>One Piece</Text>
                    </View>
                    <Pressable style={[styles.botaoIniciar, stylesGlobal.rounded_0x, stylesGlobal.padding_1x]} onPress={() => setTimeout(() => setStart(true), 500)}>
                        <Icon name="play" style={styles.iconeBotaoIniciar} />
                        <Text style={styles.textoBotaoIniciar}>Iniciar</Text>
                    </Pressable>
                </Animated.View>
            </LinearGradient>
        )
    } else {
        return null
    }
}

const styles = StyleSheet.create({
    iniciarContainer: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        height: '120%',
        width: '100%',
        zIndex: 90,
        //opacity: 0.2,
    },
    iniciarMenu: {
        backgroundColor: '#f6f6f6',
        zIndex: 99,
        marginTop: '-20%',
        width: '75%',
        minHeight: '30%',
        elevation: 18,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    logoContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '75%',
        height: 120,
    },
    imgLogo: {
        elevation: 4,
        marginHorizontal: 'auto',
        position: 'absolute',
        width: 150,
        height: 180,
        //borderWidth: 1,
        borderColor: '#f1f1f1',
    },
    logoTexto: {
        marginTop: 58,
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    botaoIniciar: {
        marginTop: 48,
        backgroundColor: '#F6C820',
        width: '70%',
        padding: 12,
        borderRadius: 50,
        elevation: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconeBotaoIniciar: {
        fontSize: 24,
        color: '#fff',
        marginRight: 8
    },
    textoBotaoIniciar: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20
    }
})