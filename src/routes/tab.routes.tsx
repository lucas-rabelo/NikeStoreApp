import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// pages
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { Cart } from '../pages/Cart';
import { ListProducts } from '../pages/ListProducts';

const { Navigator, Screen } = createMaterialBottomTabNavigator();

const TabRoutes: React.FC = () => (
    <Navigator
        initialRouteName='Home'
    >
        <Screen name="Home" component={Home} />
        <Screen name="ListProducts" component={ListProducts} />
        <Screen name="Cart" component={Cart} />
        <Screen name="Profile" component={Profile} />
    </Navigator>
)

export default TabRoutes;