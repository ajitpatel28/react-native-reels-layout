import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';

interface ReelActionButtonProps {
    Icon: React.ElementType;
    color: string;
    size?: number;
    onPress: () => void;
    iconProps?: Record<string, any>;
}

export const ReelActionButton: React.FC<ReelActionButtonProps> = ({
                                                               Icon,
                                                               color,
                                                               size = 30,
                                                               onPress,
                                                               iconProps = {},
                                                           }) => {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Icon color={color} size={size} {...iconProps} />
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginBottom: 4,
    },
});

