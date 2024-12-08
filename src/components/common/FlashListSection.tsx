import React from 'react';
import { FlashList } from "@shopify/flash-list";

type FlashListSectionProps = {
    data: any[];
    renderItem: ({ item }: { item: any }) => JSX.Element;
    keyExtractor: (item: any, index: number) => string;
    onEndReached: () => void;
    onEndReachedThreshold: number;
    estimatedItemSize: number;
};

export const FlashListSection = ({
                              data,
                              renderItem,
                              keyExtractor,
                              onEndReached,
                              onEndReachedThreshold,
                              estimatedItemSize,
                          }: FlashListSectionProps) => (
    <FlashList
        horizontal
        data={data}
        estimatedItemSize={estimatedItemSize}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        onEndReached={onEndReached}
        onEndReachedThreshold={onEndReachedThreshold}
    />
);

