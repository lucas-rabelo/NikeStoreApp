import { View, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Ionicons } from '@expo/vector-icons';

// pages
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { Cart } from '../pages/Cart';
import { ListProducts } from '../pages/ListProducts';

// styles
import theme from '../global/styles/theme';

const { Navigator, Screen } = createBottomTabNavigator();

const { transparent, primary, background, price } = theme.colors;

const TabRoutes: React.FC = () => (
    <Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                height: 80,
                backgroundColor: 'white',
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
            },
            tabBarActiveBackgroundColor: transparent,
            tabBarActiveTintColor: primary,
            tabBarInactiveTintColor: 'gray',
        }}
        
    >
        <Screen 
            name="Principal" 
            component={Home}
            options={{
                tabBarIcon: ({ color }) => (
                    <Feather name="home" size={24} color={color}/>
                ),
            }}
        />
        <Screen 
            name="ListProducts" 
            component={ListProducts}
            options={{
                tabBarIcon: ({ color }) => (
                    <Ionicons name="apps-outline" size={24} color={color}/>
                ),
            }}
        />
        <Screen 
            name="Cart" 
            component={Cart}
            options={{
                tabBarBadge: 5,
                tabBarBadgeStyle: {
                    marginTop: 10,
                    backgroundColor: price,
                    color: background
                },
                tabBarIcon: ({ color }) => (
                    <Ionicons name="cart" size={24} color={color}/>
                ),
            }}
        />
        <Screen 
            name="Profile" 
            component={Profile} 
            options={{
                tabBarIcon: () => (
                    <View style={styles.profileContainer}>
                        <Image 
                            style={styles.image}
                            source={{ uri: 'https://www.github.com/lucas-rabelo.png' }}
                        />
                    </View>
                )  
            }}
        />
    </Navigator>
)

const styles = StyleSheet.create({
    profileContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
        width: 35,
        height: 35,
        borderRadius: 18,
    },
    image: {
        width: 30,
        height: 30,
        borderRadius: 15
    }
})

export default TabRoutes;