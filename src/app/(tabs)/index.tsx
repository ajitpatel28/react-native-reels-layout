import React, { useCallback } from "react";
import {Text, StyleSheet, View, ActivityIndicator} from "react-native";
import {type ReelImage, useReelImages } from "@/api";
import {CarouselItem} from "@/components";
import Carousel from "react-native-reanimated-carousel";
import {SCREEN_HEIGHT, SCREEN_WIDTH} from "@/utils";


const HomeScreen = () => {
  const { data, isPending, isError, fetchNextPage, hasNextPage } = useReelImages();

  const flattenedData = data?.pages.flatMap((page) => page) || [];

  const onLikePress = (id: string) => {
    console.log(`Liked Reel with id: ${id}`);
    //  like functionality
  };

  const onUserFollow = (id: string) => {
    console.log(`onUserFollow Reel with id: ${id}`);
    //  onUserFollow functionality
  };

  const onCommentPress = (id: string) => {
    console.log(`Comment on Reel with id: ${id}`);
    //  comment functionality
  };

  const onSharePress = (id: string) => {
    console.log(`Shared Reel with id: ${id}`);
    //  share functionality
  };

  const onSendAsMessage = (id: string) => {
    console.log(`Shared Reel as message: ${id}`);
    //  share as message functionality
  };

  const renderItem = useCallback(
      ({ item }: { item: ReelImage }) => (
          <CarouselItem
              reelImage={item}
              onLikePress={onLikePress}
              onUserFollow={onUserFollow}
              onSendAsMessage = {onSendAsMessage}
              onCommentPress={onCommentPress}
              onSharePress={onSharePress}
          />
      ),
      [onLikePress, onCommentPress, onSharePress]
  );

  if (isPending) {
    return <ActivityIndicator size="large" color="#40a8e6" style={styles.loader} />

  }

  if (isError) {
    return <Text style={styles.error}>Error fetching feed</Text>;
  }

  const handleSnapToItem = (index: number) => {
    if (flattenedData && index === flattenedData.length - 1 && hasNextPage) {
      console.log("Next page", index);
      fetchNextPage();
    }
  };

  return (
      <View style={styles.container}>
        <Carousel
            loop={false}
            width={SCREEN_WIDTH}
            height={SCREEN_HEIGHT}
            data={flattenedData}
            vertical={true}
            onSnapToItem={handleSnapToItem}
            renderItem={renderItem}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#000",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
  carouselItem: {
    width: '100%',
    justifyContent: 'flex-end',
    borderWidth: 1,
    borderColor: "red",
  },
  forYouText: {
    position: 'absolute',
    top: 20,
    left: 20,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  caption: {
    color: 'white',
    fontSize: 14,
    lineHeight: 20,
  },
  activeIndexText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default HomeScreen;
