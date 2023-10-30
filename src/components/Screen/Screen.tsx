import { useAppSafeArea } from "../../hooks/useAppSafeArea";
import { Box } from "../Box/Box";
import { Icon } from "../Icon/Icon";
import { Text } from "../Text/Text";

interface ScreenProps {
    children: React.ReactNode;
    canGoBack?: boolean;
}

export function Screen({children, canGoBack = false}: ScreenProps){
    const {top} = useAppSafeArea();
    return(
        <Box 
            paddingHorizontal="s24"
            style={{paddingTop: top}}
        >
           {canGoBack && (
            <Box mb="s24" flexDirection="row" alignItems="center">
                <Icon name="arrowLeft" color="primary" />
                <Text preset="paragraphMedium" semiBold ml="s8">Voltar</Text>
            </Box>
            )}
            {children}
        </Box>
    )
}