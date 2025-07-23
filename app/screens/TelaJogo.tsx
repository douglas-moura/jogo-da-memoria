import { StyleSheet, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useEffect, useState } from 'react'
import { useFonts } from 'expo-font'
import { cores_global, espacamentos_global, bordas_global } from '../../assets/style/style_global'
import { useJogo } from '../../context/JogoContext'
import MensagemParabens from '../../assets/components/MensagemParabens'
import Cabecalho from '../../assets/components/Cabecalho'
import Tabuleiro from '../../assets/components/Tabuleiro'
import Rodape from '../../assets/components/Rodape'
import ClassePartida from '../../class/ClassePartida'

const p1 = new ClassePartida

export default function TelaJogo() {
    const [grade, setGrade] = useState(p1.gerarGrade())
    const { start, acertos } = useJogo()

    const [fontsLoaded] = useFonts({
        'Coiny-Regular': require('../../assets/fonts/Coiny-Regular.ttf'),
    })

    useEffect(() => {
        if (start) {
            setGrade(p1.gerarGrade())
        }
    },[start])

    if (!fontsLoaded) {        
        return <View><Text>Carregando fontes...</Text></View>;
    } else {  
        return (
            <SafeAreaView style={[styles.container, { flex: 1 }]} edges={['top', 'bottom']}>
                {acertos == 10 ? <MensagemParabens /> : null }
                <View style={styles.jogoContainer}>
                    <Cabecalho />
                    <Tabuleiro grade={grade} />
                </View>
                <Rodape />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: cores_global.secundaria._500,
    },
    jogoContainer: {
        width: '90%',
        height: 'auto',
        margin: 'auto',
        backgroundColor: '#f6f6f6',
        borderRadius: bordas_global.rounded_1x,
        padding: espacamentos_global.padding_1x,
    }
})