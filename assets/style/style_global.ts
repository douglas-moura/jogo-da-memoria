import { StyleSheet } from "react-native"

export const bordas = () => {
    return StyleSheet.create({
        rounded_0x: { borderRadius: 800 },
        rounded_1x: { borderRadius: 32 },
        rounded_2x: { borderRadius: 24 },
        rounded_3x: { borderRadius: 16 },
        rounded_4x: { borderRadius: 8 },
    })
}

export const espacamentos = () => {
    return StyleSheet.create({
        padding_0x: { padding: 24 },
        padding_1x: { padding: 16 },
        padding_2x: { padding: 8 },
        padding_3x: { padding: 4 },
    })
}

export const cores = () => {
    return StyleSheet.create({
        primaria: {
            color: '#FF0011',
            backgroundColor: '#FF0011',
        },
        primariaSombra: {
            color: '#AA3940',
            backgroundColor: '#AA3940',
        },
        primariaReticula: {
            color: '#FFE5E7',
            backgroundColor: '#FFE5E7',
        },
        complementar: {
            color: '#00FF41',
            backgroundColor: '#00FF41',
        },
        secundaria: {
            color: '#FFC500',
            backgroundColor: '#FFC500'
        },
        seundariaReticula: {
            color: '#FFF9E5',
            backgroundColor: '#FFF9E5',
        },
        terciaria: {
            color: '#001DFF',
            backgroundColor: '#001DFF',
        },
        neutra: {
            color: '#f6f6f6',
            backgroundColor: '#f6f6f6',
        },
    })
}