import { StyleSheet, View, Text, Pressable, Image, Animated } from 'react-native'
import { useRef } from 'react'
import { useJogo } from '../../context/JogoContext'
import { bordas, espacamentos, cores } from '../../assets/style/style_global'
import { SafeAreaView } from 'react-native-safe-area-context'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Icon from 'react-native-vector-icons/Ionicons'

const bordasGlobal = bordas()
const espacGlobal = espacamentos()
const coresGlobal = cores()

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

    const {setStart} = useJogo()

    return (
        <SafeAreaView style={[styles.iniciarContainer]}>
            <View style={styles.iniciarConfig}></View>
            <View style={styles.logoContainer}>
                <Image style={[styles.imgLogo, {transform: 'rotate(16deg)', marginLeft: 0,}]} source={ require('../../assets/img/luff.jpg') } />
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
        backgroundColor: coresGlobal.secundaria.color,
    },
    iniciarConfig: {
        padding: 16,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    iconeBotaoConfig: {
        fontSize: 40,
        color: coresGlobal.primariaSombra.color,
    },
    logoContainer: {
        aspectRatio: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 250,
        borderWidth: 2,
        borderRadius: bordasGlobal.rounded_0x.borderRadius,
        borderColor: coresGlobal.primariaSombra.color,
    },
    imgLogo: {
        elevation: 4,
        marginHorizontal: 'auto',
        position: 'absolute',
        width: 150,
        height: 180,
        //borderWidth: 1,
        //opacity: 0.2,
        borderColor: '#f1f1f1',
        borderRadius: bordasGlobal.rounded_2x.borderRadius,
    },
    botaoIniciar: {
        minWidth: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: coresGlobal.primaria.backgroundColor,
        borderRadius: bordasGlobal.rounded_0x.borderRadius,
        padding: espacGlobal.padding_2x.padding,
    },
    iconeBotaoIniciar: {
        fontSize: 24,
        color: '#fff',
        marginRight: 8
    }
})