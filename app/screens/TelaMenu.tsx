import { StyleSheet, View, Text, Pressable, Image, Animated } from 'react-native'
import { useRef } from 'react'
import { useJogo } from '../../context/JogoContext'
import { cores_global, espacamentos_global, bordas_global } from '../../assets/style/style_global'
import { SafeAreaView } from 'react-native-safe-area-context'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/Ionicons'

type Props = {
    navigation: NativeStackNavigationProp<any>
}

export default function TelaMenu({ navigation }: Props) {
    const enterDown = useRef(new Animated.Value(1000)).current
    
    const move = () => {
        Animated.timing(enterDown, {
            toValue: 0, // move 100px pra baixo
            duration: 800,
            useNativeDriver: true,
        }).start()
    }
    
    move()

    const { setStart } = useJogo()

    return (
        <SafeAreaView style={[styles.iniciarContainer]}>
            <View style={styles.logoContainer}>
                <View style={styles.carta}>
                    <View  style={styles.cartaImg}>
                        <Image style={styles.imgLogo} source={ require('../../assets/img/luff.jpg') } />
                    </View>
                </View>
            </View>
            <Animated.View style={{ transform: [{ translateY: enterDown }]}}>
                <Pressable style={styles.botaoIniciar} onPress={() => {
                        setTimeout(() => setStart(true), 500)
                        setTimeout(() => navigation.navigate('TelaJogo'), 600)
                    }}>
                    <Icon name="play" style={styles.iconeBotaoIniciar} />
                    <Text style={{ fontFamily: 'Coiny-Regular', fontSize: 24, color: '#fff' }}>Iniciar</Text>
                </Pressable>
            </Animated.View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    iniciarContainer: {
        flex: 1,
        position: 'absolute',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        zIndex: 90,
        backgroundColor: cores_global.secundaria._500,
    },
    logoContainer: {
        aspectRatio: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 180,
        margin: 'auto',
        borderWidth: 2,
        borderRadius: bordas_global.rounded_0x,
        borderColor: cores_global.primaria.sombra,
    },
    carta: {
        width: 150,
        height: 220,
        backgroundColor: '#fff',
        overflow: 'hidden',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: espacamentos_global.padding_2x,
        borderRadius: bordas_global.rounded_3x,
        transform: 'rotate(10deg)',
        elevation: 4,
    },
    cartaImg: {
        aspectRatio: 1,
        marginVertical: 'auto',
    },
    imgLogo: {
        height: '100%',
        width: '100%'
    },
    botaoIniciar: {
        minWidth: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: cores_global.primaria._500,
        borderRadius: bordas_global.rounded_0x,
        padding: espacamentos_global.padding_2x,
    },
    iconeBotaoIniciar: {
        fontSize: 24,
        color: '#fff',
        marginRight: 8
    }
})