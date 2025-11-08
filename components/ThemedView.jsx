
import { View } from "react-native";
import useTheme from "../hooks/use_theme";
import { SafeAreaView } from "react-native-safe-area-context";

 
const ThemedView = ({ style, safe: isSafe = false, ...props }) => {
    const theme = useTheme()

    if (isSafe) {
     return (
        <SafeAreaView style={[{backgroundColor: theme.background}, style]}
        {...props} />
     )
    }

    return (
        <View style={[{backgroundColor: theme.background}, style]}
        {...props} />
    )
}

export default ThemedView