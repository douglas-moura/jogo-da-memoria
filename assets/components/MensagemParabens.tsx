import { StyleSheet, View, Text, Pressable } from 'react-native'
import { useJogo } from '../../context/JogoContext'
import { bordas, espacamentos, cores } from '../style/style_global'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import * as Updates from 'expo-updates'
import Icon from 'react-native-vector-icons/Ionicons'
import numToTime from '../functions/numToTime'
import { useNavigation } from '@react-navigation/native'
import { salvarResultado } from '../functions/resultadosPartida'
import { useState, useEffect } from 'react'

const bordasGlobal = bordas()
const espacGlobal = espacamentos()
const coresGlobal = cores()

// Defina o tipo das rotas do seu stack
type RootStackParamList = {
    TabMenu: { screen?: string }; // <- aqui dizemos que TabMenu aceita um "screen" opcional
    TelaJogo: undefined
    // adicione outras telas se necessário
}

export type RootTabParamList = {
    Inicio: undefined
    Recordes: undefined
}

export default function MensagemParabens() {
    const [finalizado, setFinalizado] = useState(false)
    const [pontosFinal, setPontosFinal] = useState(0)
    const [tempoFinal, setTempoFinal] = useState(0)

    const {
        setStart,
        acertos, setAcertos,
        pontos, setPontos,
        tempo, setTempo
    } = useJogo()

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const reiniciarJogo = () => {
        setStart(true)
        setAcertos(0)
        setPontos(0)
        setTempo(0)
    }

    const finalizarJogo = () => {
        setStart(false)
        setAcertos(0)
        setPontos(0)
        setTempo(0)
    }

    useEffect(() => {
        if (acertos === 10 && !finalizado) {
            salvarResultado({
                data: new Date().toISOString(),
                pontos,
                tempo,
            })
            setPontosFinal(pontos)
            setTempoFinal(tempo)
            setFinalizado(true)
        }
    }, [acertos])

    return (
        <View style={styles.parabensContainer}>
            <View style={styles.parabensMenu}>
                <Text style={styles.titulo}>Parabéns</Text>
                <View style={styles.infosContainer}>
                    <View style={styles.linhaInfo}>
                        <Text style={styles.textInfo}>Pontuação:</Text>
                        <Text style={[styles.textInfo, { fontWeight: 'bold' }]}>{pontosFinal.toLocaleString('de-DE')}</Text>
                    </View>
                    <View style={styles.linhaInfo}>
                        <Text style={styles.textInfo}>Tempo:</Text>
                        <Text style={[styles.textInfo, { fontWeight: 'bold' }]}>{numToTime(tempoFinal)}</Text>
                    </View>
                </View>
                <View style={styles.linhaComandos}>
                    <Pressable style={styles.iconeContainer} onPress={() => {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'TabMenu', params: { screen: 'Inicio' } }],
                        })
                        setFinalizado(false)
                        finalizarJogo()
                    }}>
                        <Icon name="home-outline" style={styles.iconeComando} />
                    </Pressable>
                    <Pressable style={styles.iconeContainer} onPress={() => {
                        setFinalizado(false)
                        reiniciarJogo()
                    }}>
                        <Icon name="reload" style={styles.iconeComando} />
                    </Pressable>
                    <Pressable style={styles.iconeContainer} onPress={() => {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'TabMenu', params: { screen: 'Recordes' } }],
                        })
                        setFinalizado(false)
                        finalizarJogo()
                    }}>
                        <Icon name="ribbon-outline" style={styles.iconeComando} />
                    </Pressable>
                </View>
            </View>
            <View style={styles.pelicula} />
        </View>
    )
}

const styles = StyleSheet.create({
    pelicula: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: '#000',
        opacity: 0.8
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