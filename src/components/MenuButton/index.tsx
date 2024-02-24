import { Pressable } from "react-native";
import { styles } from "./style";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { theme } from "@//theme";
import { Text } from "react-native";
import { MenuButtonProps } from "./menuButton";

export function MenuButton({title, icon}: MenuButtonProps ) {
  return (
    <Pressable style={styles.container}> 
      <FontAwesome name={icon} size={32} color={theme.colors.white} style={styles.icon}/>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}