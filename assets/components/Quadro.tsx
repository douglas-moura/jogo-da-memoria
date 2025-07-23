import { View, Image, StyleSheet } from "react-native"
import { bordas_global } from '../style/style_global'
import ClasseQuadro from "../../class/ClasseQuadro"
import imagens from "../helpers/imagensRequire"

type Props = {
    quadroInfos: ClasseQuadro
}

export default function Quadro({ quadroInfos }: Props) {
    return (
        <View style={styles.quadroContainer}>
            <Image style={styles.img}
                source={
                    quadroInfos.getCodImg() && quadroInfos.getVisivel() ?
                    imagens[quadroInfos.getCodImg()] :
                    require('../img/back.jpg')
                }
            />
        </View>
    )
}

const styles =  StyleSheet.create({
    quadroContainer: {
        marginVertical: 4,
        width: '100%',
        backgroundColor: '#fff',
        overflow: 'hidden',
        borderWidth: 0,
        borderColor: 'red',
        flexDirection: 'column',
        borderRadius: bordas_global.rounded_3x,
    },
    img: {
        margin: 'auto',
        height: 70,
        marginVertical: 4,
        aspectRatio: 1,
        borderWidth: 0,
        borderColor: 'purple',
    }
})