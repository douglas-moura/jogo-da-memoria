import AsyncStorage from '@react-native-async-storage/async-storage'

export async function salvarResultado(resultado: object) {
    const chave = '@historico_partidas'
    const historico = await AsyncStorage.getItem(chave)
    const lista = historico ? JSON.parse(historico) : []
    lista.unshift(resultado)
    await AsyncStorage.setItem(chave, JSON.stringify(lista))
}

export async function buscarHistorico() {
    const historicoStr = await AsyncStorage.getItem('@historico_partidas')
    if (!historicoStr) return []
    const historico = JSON.parse(historicoStr)
    // Converte o campo data para Date
    return historico.map((item: any) => ({
        ...item,
        data: item.data ? new Date(item.data) : undefined,
    }))
}