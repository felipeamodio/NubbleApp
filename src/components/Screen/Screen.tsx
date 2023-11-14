import { useNavigation } from "@react-navigation/native";
import {KeyboardAvoidingView, Platform} from "react-native";
import { useAppTheme, useAppSafeArea } from "@hooks";
import { Box, TouchableOpacityBox, Icon, Text } from "@components";
import { ScrollViewContainer, ViewContainer } from "./components/ScreenContainer";

interface ScreenProps {
    children: React.ReactNode;
    canGoBack?: boolean;
    scrollable?: boolean;
}

export function Screen({children, canGoBack = false, scrollable = false}: ScreenProps){
    const {top, bottom} = useAppSafeArea();
    const {colors} = useAppTheme();
    const navigation = useNavigation();
    const Container = scrollable ? ScrollViewContainer : ViewContainer;
    return(
        <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <Container backgroundColor={colors.background}>
                <Box 
                    paddingHorizontal="s24"
                    style={{paddingTop: top, paddingBottom: bottom}}
                >
                {canGoBack && (
                    <TouchableOpacityBox onPress={navigation.goBack} mb="s24" flexDirection="row" alignItems="center" paddingBottom="s24">
                        <Icon name="arrowLeft" color="primary" />
                        <Text preset="paragraphMedium" semiBold ml="s8">Voltar</Text>
                    </TouchableOpacityBox>
                    )}
                    {children}
                </Box>
            </Container>
        </KeyboardAvoidingView>
    )
}