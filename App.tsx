import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/theme/theme';
import { Button } from './src/components/Button/Button';
import { TextInput } from './src/components/TextInput/TextInput';
import { Icon } from './src/components/Icon/Icon';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge" italic mb="s8">Olá</Text>
          <Text preset="paragraphLarge" italic mb="s40">Digite seu e-mail e senha para entrar</Text>

            <TextInput errorMessage='mensagem de error' label='Email' placeholder='Digite seu e-mail' boxProps={{mb: "s20"}} />

            <TextInput label='Senha' placeholder='Digite sua senha' RightComponent={<Icon name='eyeOn' color='gray2' />} boxProps={{mb: "s10"}} />

          <Text color="primary" preset="paragraphSmall" bold mt="s10">Esqueci minha senha</Text>

          <Button mt="s48" title="Entrar" />
          <Button mt="s12" preset="outline" title="Criar uma conta" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
