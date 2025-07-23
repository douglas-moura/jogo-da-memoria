import { View, Text, Button, Pressable  } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { buscarHistorico } from '../../assets/functions/resultadosPartida'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import numToTime from '../../assets/functions/numToTime'

type ResultadoPartida = {
    data: Date
    pontos: number
    tempo: number
}

export default function TelaRecordes() {
    const [recordes, setRecordes] = useState<ResultadoPartida[] | null>(null)

    useEffect(() => {
        const carregarHistorico = async () => {
            const historico = await buscarHistorico()
            setRecordes(historico)
            console.table(historico)
        }

        carregarHistorico()
    }, [])

    return (
        <SafeAreaView>
            <Pressable onPress={async () => {
                await AsyncStorage.removeItem('@historico_partidas')
                setRecordes(null) // Limpa a lista na tela
                alert('Recordes apagados!')
            }}><Text>Limpar Recordes</Text></Pressable>
            {
                recordes ? recordes.map((element, index) => (
                    <View key={index}>
                        <Text>Data: {element.data.toLocaleDateString('pt-BR', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric'}
                        )}</Text>
                        <Text>Pontos: {element.pontos.toLocaleString('de-DE')}</Text>
                        <Text>Tempo: {numToTime(element.tempo)}</Text>
                    </View>
                )) : <Text>Nenhum recorde</Text>
            }
        </SafeAreaView>
    )
}