import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import Principal from '../pages/Principal';
import CadastrarConta from '../pages/CadastrarConta';
import Livros from '../pages/Livros';
import Quadrinhos from '../pages/Quadrinhos';
import CadastrarHistoria from '../pages/CadastrarHistoria';
import { Provider } from '../../src/context/authContext';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />
            
            <Stack.Screen
                name="CadastrarConta"
                component={CadastrarConta}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Principal"
                component={Principal}
                options={{ headerShown: false }}
            />
            
            <Stack.Screen
                name="Livros"
                component={Livros}
                options={{ headerShown: false }}
            />
           
            <Stack.Screen
                name="Quadrinhos"
                component={Quadrinhos}
                options={{ headerShown: false }}
            />
            
            <Stack.Screen
                name="CadastrarHistoria"
                component={CadastrarHistoria}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default () => {
    return (
        <Provider>
            <Routes/>
        </Provider>
    )
}