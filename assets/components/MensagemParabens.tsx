import { StyleSheet, View, Text, Pressable } from 'react-native'
import { useJogo } from '../../context/JogoContext'
import { bordas, espacamentos, cores } from '../style/style_global'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import * as Updates from 'expo-updates'
import Icon from 'react-native-vector-icons/Ionicons'
import numToTime from '../functions/numToTime'

const bordasGlobal = bordas()
const espacGlobal = espacamentos()
const coresGlobal = cores()

type Props = {
    navigation: NativeStackNavigationProp<any>
}

export default function MensagemParabens({ navigation }: Props) {
    const { acertos, pontos, tempo } = useJogo()

    const reiniciar = () => {
        navigation.navigate('TelaJogo')
    }

    if (acertos == 10) {
        return (
            <View style={styles.parabensContainer}>
                <View style={styles.parabensMenu}>
                    <Text style={styles.titulo}>Parabéns</Text>
                    <View style={styles.infosContainer}>
                        <View style={styles.linhaInfo}>
                            <Text style={styles.textInfo}>Pontuação:</Text>
                            <Text style={[styles.textInfo, { fontWeight: 'bold' }]}>{pontos.toLocaleString('de-DE')}</Text>
                        </View>
                        <View style={styles.linhaInfo}>
                            <Text style={styles.textInfo}>Tempo:</Text>
                            <Text style={[styles.textInfo, { fontWeight: 'bold' }]}>{numToTime(tempo)}</Text>
                        </View>
                    </View>
                    <View style={styles.linhaComandos}>
                        <Pressable style={styles.iconeContainer} onPress={() => reiniciar() }>
                            <Icon name="reload" style={styles.iconeComando} />
                        </Pressable>
                        <Pressable style={styles.iconeContainer} onPress={() => navigation.navigate('Recordes')}>
                            <Icon name="ribbon-outline" style={styles.iconeComando} />
                        </Pressable>
                    </View>
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
        height: '100%',
        width: '100%',
        backgroundColor: '#000',
        opacity: 0.7
    },
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
        width: 250,
        backgroundColor: '#fff',
        padding: espacGlobal.padding_0x.padding,
        borderRadius: bordasGlobal.rounded_1x.borderRadius,
        zIndex: 80,
        elevation: 10,
        marginTop: '-30%'
    },
    titulo: {
        fontSize: 32,
        textAlign: 'center',
        fontFamily: 'Coiny-Regular'
    },
    infosContainer: {
        marginVertical: 48
    },
    linhaInfo: {
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    textInfo: {
        fontSize: 18,
        marginVertical: 4
    },
    linhaComandos: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 12
    },
    iconeContainer: {
        aspectRatio: 1,
        borderRadius: bordasGlobal.rounded_0x.borderRadius,
        backgroundColor: coresGlobal.primaria.color,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconeComando: {
        fontSize: 28,
        color: '#fff',
        margin: 12
    },
})