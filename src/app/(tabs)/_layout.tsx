import React from 'react';
import {Tabs} from 'expo-router';

import Colors from '@/constants/Colors';
import {useColorScheme} from '@/components';
import {CircleUserRound, Home, PlusCircleIcon, Search, Users} from "lucide-react-native";

function TabBarIcon(props: { Icon: React.ElementType; color: string }) {
    const {Icon, color} = props;
    return <Icon color={color} size={28} style={{marginBottom: -3}}/>;
}

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({color}) => <TabBarIcon Icon={Home} color={color}/>,
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: 'Search',
                    tabBarIcon: ({color}) => <TabBarIcon Icon={Search} color={color}/>,
                }}
            />
            <Tabs.Screen
                name="create"
                options={{
                    title: 'Create',
                    tabBarIcon: ({color}) => <TabBarIcon Icon={PlusCircleIcon} color={color}/>,
                }}
            />
            <Tabs.Screen
                name="community"
                options={{
                    title: 'Community',
                    tabBarIcon: ({color}) => <TabBarIcon Icon={Users} color={color}/>,
                }}
            />
            <Tabs.Screen
                name="me"
                options={{
                    title: 'Me',
                    tabBarIcon: ({color}) => <TabBarIcon Icon={CircleUserRound} color={color}/>,
                }}
            />
        </Tabs>
    );
}
