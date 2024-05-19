import { ToastProvider } from '@services';
import { ThemeProvider } from '@shopify/restyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Toast } from './src/components/Toast/Toast';
import { Router } from './src/routes/Routes';
import { theme } from './src/theme/theme';

if (__DEV__) {
  require('./ReactotronConfig');
}

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <Router />
        <Toast />
      </ToastProvider>
    </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
