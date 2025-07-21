import { StyleSheet, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { JogoProvider } from '../context/JogoContext'
import { useFonts } from 'expo-font'
import { bordas, espacamentos, cores } from '../assets/style/style_global'
import TelaMenu from '../assets/components/TelaMenu'
import MensagemParabens from '../assets/components/MensagemParabens'
import Cabecalho from '../assets/components/Cabecalho'
import Tabuleiro from '../assets/components/Tabuleiro'
import Rodape from '../assets/components/Rodape'
import ClassePartida from '../class/ClassePartida'

const p1 = new ClassePartida

const bordasGlobal = bordas()
const espacGlobal = espacamentos()
const coresGlobal = cores()

export default function App() {
    const [grade, setGrade] = useState(p1.gerarGrade())


    const [fontsLoaded] = useFonts({
        'Coiny-Regular': require('../assets/fonts/Coiny-Regular.ttf'),
    })

    if (!fontsLoaded) {        
        return <View><Text>Carregando fontes...</Text></View>;
    } else {  
        return (
            <JogoProvider>
                <SafeAreaView style={[styles.container, { flex: 1 }]} edges={['top', 'bottom']}>
                    <TelaMenu />
                    <MensagemParabens />
                    <View style={styles.jogoContainer}>
                        <Cabecalho />
                        <Tabuleiro grade={grade} />
                    </View>
                    <Rodape />
                </SafeAreaView>
            </JogoProvider>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: coresGlobal.primaria.backgroundColor,
    },
    jogoContainer: {
        width: '90%',
        height: 'auto',
        margin: 'auto',
        backgroundColor: '#f6f6f6',
        borderRadius: bordasGlobal.rounded_1x.borderRadius,
        padding: espacGlobal.padding_1x.padding,
    }
})