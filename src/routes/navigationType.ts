// declaração de forma global para ser utilizado no hook de navegação para pegar o nome das páginas que vamos navegar

import { RootStackParamList } from './Routes';

declare global{
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}
