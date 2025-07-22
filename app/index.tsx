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
import Icon from 'react-native-vector-icons/Ionicons'

const coresGlobal = cores()

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

/* Telas pricipais que ficarão nas abas inferiores */
const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: coresGlobal.primaria.color,                  // cor do ícone/texto ativo
            tabBarInactiveTintColor: coresGlobal.primariaSombra.color,          // cor do ícone/texto inativo
            tabBarStyle: {
                backgroundColor: coresGlobal.secundaria.backgroundColor,
                borderTopWidth: 0,
                elevation: 0,           // remove sombra no Android
                shadowOpacity: 0, 
            },
            tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: '600',
                fontFamily: 'Coiny-Regular'
            },
            tabBarIcon: ({ focused, color, size }) => {
                let iconName: string

                if (route.name === 'Inicio') {
                    iconName = focused ? 'play' : 'play-outline'
                } else if (route.name === 'Config') {
                    iconName = focused ? 'settings' : 'settings-outline'
                } else if (route.name === 'Recordes') {
                    iconName = focused ? 'trophy' : 'trophy-outline'
                } else {
                    iconName = 'help-circle-outline'
                }

                return <Icon name={iconName} size={size} color={color} />
            }
        })}>
            <Tab.Screen name="Inicio" component={TelaMenu} />
            {/*<Tab.Screen name="Config" component={TelaConfiguracoes} />*/}
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