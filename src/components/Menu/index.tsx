import { FontAwesome } from "@expo/vector-icons";
import BottomSheet from "@gorhom/bottom-sheet/";
import { forwardRef } from "react";
import { View, Text } from "react-native";
import { styles } from "./style";
import { MenuButton } from "../MenuButton";

export const Menu = forwardRef<BottomSheet, MenuProps>(({ onClose }, ref) => {
  forwardRef
  return (
    <BottomSheet ref={ref} index={0} snapPoints={[0.01, 254]} backgroundStyle={styles.container} handleComponent={() => null}>
      <View style={styles.content}>
        <View style={styles.header}>
          <FontAwesome name="close" size={24} onPress={onClose} style={styles.close}/>
          <Text style={styles.title}>Comece a criar agora</Text>
        </View>
        <View style={styles.options}>
          <MenuButton title='Pin' icon="home"/>
          <MenuButton title='Colagem' icon="paste" />
          <MenuButton title='Pasta' icon="folder" />
        </View>
      </View>
    </BottomSheet>
  )
});