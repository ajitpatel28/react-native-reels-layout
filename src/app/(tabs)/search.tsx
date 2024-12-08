import React, { useCallback, useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import {NomadItem, TrendingHashtagItem, TrendingCommunityItem, TopSearchItem } from "@/components";
import { type ReelImage, useReelImages  } from "@/api";
import { FlashListSection } from "@/components";
import {SCREEN_WIDTH} from "@/utils";


const Search = () => {
    const [searchText, setSearchText] = useState<string>('');
    const { data, fetchNextPage, hasNextPage, isLoading, isError, error } = useReelImages();
    const flattenedData = data?.pages.flatMap((page) => page) || [];
    const randomTopSearch = flattenedData[Math.floor(Math.random() * flattenedData.length)];

    const handleEndReached = () => {
        if (hasNextPage) {
            fetchNextPage();
        }
    };

    const renderTrendingHashtagItem = useCallback(({ item }: { item: ReelImage }) => (
        <TrendingHashtagItem item={item} />
    ), []);
  const
      renderTrendingCommunityItem = useCallback(({ item }: { item: ReelImage }) => (
        <TrendingCommunityItem item={item} />
    ), []);

    const renderNomadItem = useCallback(({ item }: { item: ReelImage }) => (
        <NomadItem item={item} />
    ), []);

    const handleSeeAll = (section: string) => {
        console.log(`See All clicked for ${section}`);
        //  navigation or section loading logic here
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.header}>Discover the World</Text>
                <TextInput
                    value={searchText}
                    onChangeText={setSearchText}
                    placeholder="Search"
                    style={styles.searchInput}
                />
                <TopSearchItem reelImage={randomTopSearch} />

                {isLoading ? (
                    <ActivityIndicator size="large" color="#40a8e6" style={styles.loader} />
                ) : isError ? (
                    <View style={styles.errorContainer}>
                        <Text style={styles.errorText}>
                            ☹️😓Oops, Something went wrong:{error?.message || "Unknown Error"}, Please try again.
                        </Text>
                    </View>
                ) : (
                    <>
                        <View style={styles.section}>
                            <View style={styles.sectionHeader}>
                                <Text style={styles.sectionTitle}>Trending Hashtags</Text>
                                <TouchableOpacity onPress={() => handleSeeAll('Trending Hashtags')}>
                                    <Text style={styles.seeAllText}>See all</Text>
                                </TouchableOpacity>
                            </View>
                            <FlashListSection
                                data={flattenedData}
                                renderItem={renderTrendingHashtagItem}
                                keyExtractor={(item, index) => `${item.id || index}`}
                                onEndReached={handleEndReached}
                                onEndReachedThreshold={0.5}
                                estimatedItemSize={SCREEN_WIDTH * 0.4}
                            />
                        </View>

                        <View style={styles.section}>
                            <View style={styles.sectionHeader}>
                                <Text style={styles.sectionTitle}>Top Communities</Text>
                                <TouchableOpacity onPress={() => handleSeeAll('Top Communities')}>
                                    <Text style={styles.seeAllText}>See All</Text>
                                </TouchableOpacity>
                            </View>
                            <FlashListSection
                                data={flattenedData}
                                renderItem={renderTrendingCommunityItem}
                                keyExtractor={(item, index) => `${item.id || index}`}
                                onEndReached={handleEndReached}
                                onEndReachedThreshold={0.5}
                                estimatedItemSize={SCREEN_WIDTH * 0.4}
                            />
                        </View>

                        <View style={styles.section}>
                            <View style={styles.sectionHeader}>
                                <Text style={styles.sectionTitle}>Top Nomads</Text>
                                <TouchableOpacity onPress={() => handleSeeAll('Top Nomads')}>
                                    <Text style={styles.seeAllText}>See All</Text>
                                </TouchableOpacity>
                            </View>
                            <FlashListSection
                                data={flattenedData}
                                renderItem={renderNomadItem}
                                keyExtractor={(item, index) => `${item.id || index}`}
                                onEndReached={handleEndReached}
                                onEndReachedThreshold={0.5}
                                estimatedItemSize={140}
                            />
                        </View>
                    </>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eef2f5",
    },
    scrollContainer: {
        paddingHorizontal: 20,
        flexGrow: 1,
    },
    header: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#597a7f",
        marginTop: 70,
    },
    searchInput: {
        borderWidth: 2,
        borderColor: "rgb(131,128,128)",
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
    },
    topSearchText: {
        fontSize: 18,
        fontWeight: "600",
        textAlign: "center",
        marginTop: 10,
    },
    section: {
        marginVertical: 20,
    },
    sectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 10,
        color: "#597a7f",
    },
    seeAllText: {
        fontSize: 12,
        fontWeight: "500",
        marginVertical: 6,
        color: "#597a7f",
    },
    loader: {
        marginVertical: 20,
    },
    errorContainer: {
        marginVertical: 20,
        alignItems: "center",
    },
    errorText: {
        color: "red",
        fontSize: 16,
        fontWeight: "600",
    },
});

export default Search;
