import React, {memo} from "react";
import { ReelImage } from "@/api/reels/types";
import {ImageBackground} from "expo-image";
import {StyleSheet, Text} from "react-native";

type Props = {
    reelImage: ReelImage;
};

export const TopSearchItem: React.FC<Props> = memo(({ reelImage }) => {

    return (
        <ImageBackground
            source={{ uri: reelImage?.download_url }}
            style={styles.image}
            placeholder={require('../../../assets/images/image_placeholder.jpg')}
            placeholderContentFit={"contain"}
            contentFit={"cover"}
            cachePolicy={"memory-disk"}
        >
            <Text style={styles.text}> # Top Serach of the day</Text>
        </ImageBackground>
    );
});


const styles = StyleSheet.create({
    image:{
        borderRadius: 16,
        overflow: "hidden",
        marginVertical: 20,
        justifyContent: 'flex-end',
        width: "100%",
        height: 220,
    },
    text:{
        color: "white",
        fontSize: 16,
        lineHeight: 18,
        padding: 10
    }
})

