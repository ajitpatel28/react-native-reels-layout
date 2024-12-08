import React, {memo} from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get("window");
import {ReelImage} from "@/api/reels/types";
import {ImageBackground} from "expo-image";

interface TrendingItemProps {
    item: ReelImage;
}


export const TrendingCommunityItem = memo(({ item }: TrendingItemProps) => (
        <ImageBackground
            source={{ uri: item?.download_url }}
            style={styles.trendingImage}
            placeholder={require('../../../assets/images/image_placeholder.jpg')}
            placeholderContentFit={"contain"}
            contentFit="cover"
            cachePolicy={"memory-disk"}
        >
        <Text style={styles.postsPerDayText}> {"125posts/day"}</Text>
        <View style={styles.trendingInfoContainer}>
        <Text style={styles.trendingTextTitle}> {"Places of"} </Text>
        <Text style={styles.trendingTextSubtitle}>{(item?.author.split(" ", 1) || "#Trending").toString().toUpperCase()}</Text>
        </View>
        </ImageBackground>
));

const styles = StyleSheet.create({
    trendingImage: {
        width: width * 0.4,
        height: 150,
        marginRight: 10,
        borderRadius: 10,
        overflow: "hidden",
        alignItems: "flex-start",
        justifyContent: "flex-end"
    },
    postsPerDayText:{
        position: "absolute",
        right: 6,
        top: 6,
        color: "white",
        fontWeight: "bold",
        fontSize: 8,
        textShadowColor: "rgba(0, 0, 0, 0.5)",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    trendingInfoContainer:{
        margin:4,
        alignItems: "flex-start"
    },
    trendingTextTitle: {
        fontSize: 12,
        color: "white",
    },
    trendingTextSubtitle:{
        fontSize: 14,
        fontWeight: "bold",
        color: "white",
    }
});

