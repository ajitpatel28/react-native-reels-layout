import React, {memo, useMemo, useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ImageBackground } from 'expo-image';
import { ReelImage } from "@/api/reels/types";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import {ReelActionButton} from "./ReelActionButton";
import {Heart, MessageCircle, Send, Share2, UserPlus} from "lucide-react-native";
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "@/utils";
import {useSafeAreaInsets} from "react-native-safe-area-context";


interface CarouselItemProps {
    reelImage: ReelImage;
    onLikePress: (id: string) => void;
    onUserFollow: (id: string) => void;
    onCommentPress: (id: string) => void;
    onSharePress: (id: string) => void;
    onSendAsMessage: (id: string) => void;
}

export const CarouselItem: React.FC<CarouselItemProps> = memo(({
                                                       reelImage,
                                                       onLikePress,
                                                       onUserFollow,
                                                       onCommentPress,
                                                       onSharePress,
                                                       onSendAsMessage,
                                                   }) => {
    const bottomTabHeight = useBottomTabBarHeight();
    const [liked, setLiked] = useState(false);

    const itemHeight = SCREEN_HEIGHT - bottomTabHeight;
    const safeAreaInsets = useSafeAreaInsets()

    const GetButtons = useMemo(
        () => (
            <View style={styles.actionButtonContainer}>
                <ReelActionButton
                    Icon={UserPlus}
                    color="white"
                    onPress={() => onUserFollow(reelImage.id)}
                />

                <ReelActionButton
                    Icon={MessageCircle}
                    color="white"
                    onPress={() => onCommentPress(reelImage.id)}
                />
                <ReelActionButton
                    Icon={Heart}
                    color={liked ? 'red' : 'white'}
                    iconProps={{fill: liked ? 'red' : "transparent"}}
                    onPress={() => {
                        setLiked(!liked);
                        onLikePress(reelImage.id);
                    }}
                />
                <ReelActionButton
                    Icon={Share2}
                    color="white"
                    onPress={() => onSharePress(reelImage.id)}
                />
                <ReelActionButton
                    Icon={Send}
                    color="white"
                    onPress={() => onSendAsMessage(reelImage.id)}
                />
            </View>
        ),
        [liked, reelImage.id, onLikePress, onUserFollow, onCommentPress, onSharePress, onSendAsMessage]
    );

    return (
        <ImageBackground
            source={{ uri: reelImage.download_url }}
            style={{ ...styles.container, height: itemHeight }}
            contentFit="cover"
        >
            <Text style={{...styles.forYouText, top: 40 + safeAreaInsets.top}}>For you</Text>

            <View style={styles.footer}>
                <View style={styles.captionContainer}>
                    <Text style={styles.captionTitle}>Caption</Text>
                    <Text style={styles.caption}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis bibendum pharetra diam eget sagittis.
                    </Text>
                    <Text style={styles.captionHashtags}>
                        #unicorn #blala @someone
                    </Text>
                </View>

                {GetButtons}
            </View>
        </ImageBackground>
    );
});

const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH,
        justifyContent: 'flex-end',
    },
    forYouText: {
        position: 'absolute',
        top: 40,
        alignSelf: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        padding: 20,
    },
    captionContainer: {
        flex: 1,
        marginRight: 20,
    },
    captionTitle: {
        color: 'white',
        fontSize: 16,
        lineHeight: 20,
    },
    caption: {
        color: 'white',
        fontSize: 14,
        lineHeight: 20,
    },
    captionHashtags: {
        color: 'white',
        fontSize: 14,
        lineHeight: 20,
    },
    actionButtonContainer: {
        alignItems: 'center',
        marginBottom: 80,
    },
});

