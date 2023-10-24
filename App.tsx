import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { Button } from './src/components/Button/Button';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingMedium" italic>Coffstack</Text>
        
          <Button title='Primary' marginBottom="s24" />
          <Button title='Outline' preset='outline' marginBottom="s24" />
          <Button title='Secondary' preset='secondary' marginBottom="s24" />
          <Button title='Secondary Outline' preset='secondaryOutline' marginBottom="s24" />
        
          <Button loading title='Enviar' />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
