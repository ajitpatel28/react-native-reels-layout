import {Text, View} from "@/components/Themed";
import {StyleSheet} from "react-native";


const Create = () =>{
    return (
        <View style={styles.container}>
            <Text >This a placeholder for Adding new reels section</Text>
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


export default Create;