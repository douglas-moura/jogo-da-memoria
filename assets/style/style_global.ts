import { StyleSheet } from "react-native"

export const bordas = () => {
    return StyleSheet.create({
        rounded_0x: { borderRadius: 100 },
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
        primaria: { color: '#FF0011' },
        seundaria: { color: '#F6C820' },
        terciaria: { color: '#e6e6e6' },
        neutra: { color: '#f6f6f6' },
    })
}