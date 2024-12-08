import {Text, View} from "@/components/Themed";
import {StyleSheet} from "react-native";

const Community = () =>{
    return (
        <View style={styles.container}>
            <Text >This a placeholder for Community section</Text>
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

export default Community;