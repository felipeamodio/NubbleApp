/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';

import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';

 const authenticated = true;

 export function Router() {
   return (
     <NavigationContainer>
      {authenticated ? (
        <AppStack />
        ) : (
        <AuthStack />
       )}
     </NavigationContainer>
   );
 }
