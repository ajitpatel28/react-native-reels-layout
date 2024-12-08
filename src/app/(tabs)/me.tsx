import {Text, View} from "@/components/Themed";
import {StyleSheet} from "react-native";

const Me = () =>{
    return (
        <View style={styles.container}>
        <Text >This a placeholder for profile section</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    }
})

export default Me;