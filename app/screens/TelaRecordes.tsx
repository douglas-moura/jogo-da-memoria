import { View, Text, FlatList, Pressable, StyleSheet  } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { buscarHistorico } from '../../assets/functions/resultadosPartida'
import { useEffect, useState } from 'react'
import { bordas_global, cores_global, espacamentos_global } from '../../assets/style/style_global'
import { useFonts } from 'expo-font'
import AsyncStorage from '@react-native-async-storage/async-storage'
import numToTime from '../../assets/functions/numToTime'
import Icon from 'react-native-vector-icons/Ionicons'
import Rodape from '../../assets/components/Rodape'

type ResultadoPartida = {
    data: Date
    pontos: number
    tempo: number
}


export default function TelaRecordes() {
    const [recordes, setRecordes] = useState<ResultadoPartida[] | null>(null)

    const [fontsLoaded] = useFonts({
        'Coiny-Regular': require('../../assets/fonts/Coiny-Regular.ttf'),
    })

    useEffect(() => {
        const carregarHistorico = async () => {
            const historico = await buscarHistorico()
            const ordenado = historico.sort((a: ResultadoPartida, b: ResultadoPartida) => b.pontos - a.pontos)
            setRecordes(ordenado)
        }

        carregarHistorico()
    }, [])

    const definirCor = (i: number| string): string => {
        switch (i) {
            case 0: return '#FFD900' // 1º lugar
            case 1: return '#B4BED5' // 2º lugar
            case 2: return '#EC9E6B' // 3º lugar
            case 'i0': return '#FFF099' // 1º lugar
            case 'i1': return '#E5E9F0' // 2º lugar
            case 'i2': return '#F8D9C5' // 3º lugar
            default: return cores_global.neutra
        }
    }

    if (!fontsLoaded) {
        return <View><Text>Carregando fontes...</Text></View>;
    } else {
        return (
            <SafeAreaView style={styles.paginaRecordes}>
                <View style={styles.desempPaginaTitulo}>
                    <Icon style={styles.desempPaginaTituloIcone} name="trophy" />
                    <Text style={styles.desempPaginaTituloTexto}>Recordes</Text>
                </View>
                <View style={styles.desempTabela}>
                    <View style={styles.desempTabelaLinha}>
                        <View style={[styles.desempTabelaColuna, { width: '15%' }]}>
                            <Icon name="trophy-outline" size={18} style={styles.desempIcone} />
                        </View>
                        <View style={[styles.desempTabelaColuna, { width: '30%' }]}>
                            <Text style={[styles.desempTabelaLinhaHead, { textAlign: 'left' }]}>Data</Text>
                        </View>
                        <View style={[styles.desempTabelaColuna, { width: '25%' }]}>
                            <Text style={[styles.desempTabelaLinhaHead, { textAlign: 'right', width: '70%' }]}>Pontos</Text>
                        </View>
                        <View style={[styles.desempTabelaColuna, { width: '25%' }]}>
                            <Text style={[styles.desempTabelaLinhaHead, { textAlign: 'right', width: '60%' }]}>Tempo</Text>
                        </View>
                    </View>
                    <FlatList data={recordes} renderItem={({item, index}) => (
                            <View style={[styles.desempTabelaLinha, { backgroundColor: definirCor(index), }]}>
                                <View style={[styles.desempTabelaColuna, { width: '15%' }]}>
                                    {index < 3 ? <Icon name="trophy-outline" size={18} style={[styles.desempIcone, { backgroundColor: definirCor('i' + index) }]} /> : null}
                                </View>
                                <View style={[styles.desempTabelaColuna, { width: '30%' }]}>
                                    <Text>{item.data.toLocaleDateString('pt-BR', {day: '2-digit', month: '2-digit', year: 'numeric'})}</Text>
                                </View>
                                <View style={[styles.desempTabelaColuna, { width: '25%' }]}>
                                    <Text style={{ textAlign: 'right', width: '70%' }}>{item.pontos.toLocaleString('de-DE')}</Text>
                                </View>
                                <View style={[styles.desempTabelaColuna, { width: '25%' }]}>
                                    <Text style={{ textAlign: 'right', width: '60%' }}>{numToTime(item.tempo)}</Text>
                                </View>
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
                <View style={{ height: '10%', justifyContent: 'center', marginTop: 16 }}>
                    <Rodape />
                </View>
                {/*
                <Pressable onPress={async () => {
                    await AsyncStorage.removeItem('@historico_partidas')
                    setRecordes(null) // Limpa a lista na tela
                    alert('Recordes apagados!')
                }}><Text>Limpar Recordes</Text></Pressable>
                */}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    paginaRecordes: {
        flex: 1,
        backgroundColor: cores_global.secundaria._500,
        padding: espacamentos_global.padding_0x,
    },
    desempPaginaTitulo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: espacamentos_global.padding_0x
    },
    desempPaginaTituloIcone: {
        fontSize: 28,
        marginRight: 12,
        transform: 'rotate(18deg)',
    },
    desempPaginaTituloTexto: {
        fontFamily: 'Coiny-Regular',
        fontSize: 28,
        fontWeight: 'bold'
    },
    desempTabela: {
        height: '90%',
        backgroundColor: cores_global.neutra,
        padding: espacamentos_global.padding_1x,
        borderRadius: bordas_global.rounded_1x
    },
    desempTabelaLinha: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: bordas_global.rounded_0x,
        padding: espacamentos_global.padding_2x,
        marginVertical: espacamentos_global.padding_3x,
        width: '100%',
    },
    desempTabelaLinhaHead: {
        fontWeight: 'bold',
        fontSize: 14
    },
    desempTabelaColuna: {
        alignItems: 'center',
        paddingVertical: espacamentos_global.padding_3x,
    },
    desempIcone: {
        aspectRatio: 1,
        padding: espacamentos_global.padding_2x,
        borderRadius: bordas_global.rounded_0x

    }
})