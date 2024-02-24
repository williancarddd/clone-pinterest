import { FontAwesome } from "@expo/vector-icons";

interface MenuButtonProps {
  title: string;
  icon: keyof typeof FontAwesome.glyphMap
}