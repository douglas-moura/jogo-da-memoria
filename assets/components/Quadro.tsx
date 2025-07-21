import { View, Image, StyleSheet } from "react-native"
import imagens from "../helpers/imagensRequire"
import ClasseQuadro from "../../class/ClasseQuadro"
import { bordas } from '../style/style_global'

type Props = {
    quadroInfos: ClasseQuadro
}

const bordasGlobal = bordas()

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
        borderRadius: bordasGlobal.rounded_3x.borderRadius,
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