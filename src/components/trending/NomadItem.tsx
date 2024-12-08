import React, {memo} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {ReelImage} from "@/api/reels/types";
import {Image} from "expo-image";

interface NomadItemProps {
    item: ReelImage;
}

export const NomadItem: React.FC<NomadItemProps> = memo(({ item }) => (
    <View style={styles.nomadItem}>
        <Image
            source={{ uri: item?.download_url }}
            style={styles.nomadImage}
            placeholder={require('../../../assets/images/user_placeholder.jpg')}
            placeholderContentFit={"contain"}
            contentFit="cover"
        />
        <Text style={styles.nomadName}>{`@${item?.author.split(" ", 1)}` || "@username"}</Text>
        <Text style={styles.nomadFollowers}>234k Followers</Text>
    </View>
));

const styles = StyleSheet.create({
    nomadItem: {
        alignItems: "center",
        marginRight: 18,
    },
    nomadImage: {
        width: 100,
        height: 100,
        borderRadius: 60,
        marginBottom: 5,
    },
    nomadName: {
        fontSize: 14,
        fontWeight: "600",
    },
    nomadFollowers: {
        fontSize: 12,
        color: "gray",
    },
});

