import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAppTheme } from "./useAppTheme";

export function useAppSafeArea(){
    const {top} = useSafeAreaInsets();
    const {spacing} = useAppTheme();
    //aplicando essas regras do top e spacing para o safearea do ios e android

    return{
        top: Math.max(top, spacing.s20),
    }
}