import { theme } from "@//theme";
import { FontAwesome5, Foundation, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Avatar } from "../../components/Avatar";
import { View } from "react-native";
import { Menu } from "@//components/Menu";
import BottomSheet from "@gorhom/bottom-sheet/";
import { useRef } from "react";
import bottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet";

export default function TabsLayout() {
  const refBottomSheet = useRef<BottomSheet>(null);
  const handleBottomSheetOpen = () => refBottomSheet.current?.expand()
  const handleBottomSheetClose = () => refBottomSheet.current?.snapToIndex(0)

  return (
    <View style={{ flex: 1 }}>
      <Tabs screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: theme.colors.white,
        tabBarInactiveTintColor: theme.colors.gray['600'],
        tabBarStyle: {
          backgroundColor: theme.colors.black,
          borderTopColor: theme.colors.black
        }
      }}>
        <Tabs.Screen name='index' options={{
          tabBarIcon: ({ size, color }) => <Foundation name='home' size={size} color={color} />
        }} />

        <Tabs.Screen name='search' options={{
          tabBarIcon: ({ size, color }) => <Ionicons name='search' size={size} color={color} />
        }} />

        <Tabs.Screen name='menu' listeners={() => ({
          tabPress: (event) => {
            event.preventDefault() // irei personalizar o desvio de rota para virar um botão
            handleBottomSheetOpen()
            console.log("vai adicionar")
          }
        })} options={{
          tabBarIcon: ({ size, color }) => <FontAwesome5 name='plus' size={size} color={color} />
        }} />

        <Tabs.Screen name='messages' options={{
          tabBarIcon: ({ size, color }) => <Ionicons name='chatbubble-ellipses' size={size} color={color} />
        }} />

        <Tabs.Screen name='profile' options={{
          tabBarIcon: ({ size, color }) => <Avatar source={{ uri: "Https://github.com/williancarddd.png" }} selected={color === theme.colors.white} />
        }} />
      </Tabs>
      <Menu ref={refBottomSheet} onClose={handleBottomSheetClose} />
    </View>
  )
}