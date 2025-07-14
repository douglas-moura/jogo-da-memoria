import { View, Image, StyleSheet } from "react-native"
import imagens from "../functions/imagensRequire"

type Props = {
    img: string | null
}

export default function Quadro({ img }: Props) {
    return (
        <View style={styles.quadroContainer}>
            <Image source={img ? imagens[img] : require('../img/images.png')} style={styles.img} />
        </View>
    )
}

const styles =  StyleSheet.create({
    quadroContainer: {
        marginVertical: 4,
        width: '23%',
        backgroundColor: '#fff',
        borderRadius: 8,
        overflow: 'hidden',
        borderWidth: 0,
        borderColor: 'red',
        flexDirection: 'column',
    },
    img: {
        margin: 'auto',
        height: 80,
        marginVertical: 4,
        aspectRatio: 1,
        borderWidth: 0,
        borderColor: 'purple',
    }
})