import React, {memo} from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get("window");
import {ReelImage} from "@/api/reels/types";
import {ImageBackground} from "expo-image";

interface TrendingItemProps {
    item: ReelImage;
}


export const TrendingHashtagItem = memo(({ item }: TrendingItemProps) => (
        <ImageBackground
            source={{ uri: item?.download_url }}
            style={styles.trendingImage}
            placeholder={require('../../../assets/images/image_placeholder.jpg')}
            placeholderContentFit={"contain"}
            contentFit="cover"
            cachePolicy={"memory-disk"}
        >
        <View style={styles.trendingInfoContainer}>
        <Text style={styles.trendingText}>{`#${item?.author.split(" ", 1)}` || "#Trending"}</Text>
        <Text style={styles.trendingText}>{"2.5m"}</Text>
        </View>
        </ImageBackground>
));

const styles = StyleSheet.create({
    trendingImage: {
        width: width * 0.4,
        height: 150,
        borderRadius: 10,
        marginRight: 10,
        overflow: "hidden",
        padding: 6,
        justifyContent: "flex-end",

    },
    trendingInfoContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    trendingText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 10,
        textShadowColor: "rgba(0, 0, 0, 0.5)",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
});

