import { View, Text } from 'react-native'
import { JogoProvider } from '../context/JogoContext'
import { useFonts } from 'expo-font'
import { cores } from '../assets/style/style_global'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TelaMenu from './screens/TelaMenu'
import TelaJogo from './screens/TelaJogo'
import TelaConfiguracoes from './screens/TelaConfiguracoes'
import TelaRecordes from './screens/TelaRecordes'

const coresGlobal = cores()

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

/* Telas pricipais que ficarão nas abas inferiores */
const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: coresGlobal.secundaria.backgroundColor
            },
        }}>
            <Tab.Screen name="Inicio" component={TelaMenu} />
            <Tab.Screen name="Config" component={TelaConfiguracoes} />
            <Tab.Screen name="Recordes" component={TelaRecordes} />
        </Tab.Navigator>
    )
}

/* Todas as telas navegaveis pelo jogo através de botões */
const JogoRoutes = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='AppMain' component={Tabs} />
            <Stack.Screen name='TelaJogo' component={TelaJogo} />
        </Stack.Navigator>
    )
}

export default function App() {
    const [fontsLoaded] = useFonts({
        'Coiny-Regular': require('../assets/fonts/Coiny-Regular.ttf'),
    })

    if (!fontsLoaded) {
        return <View><Text>Carregando fontes...</Text></View>;
    } else {  
        return (
            <JogoProvider>
                <NavigationContainer>
                    <JogoRoutes />
                </NavigationContainer>
            </JogoProvider>
        )
    }

}