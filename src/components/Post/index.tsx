import { View, Image, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./style";
import { theme } from "@//theme";
import { useEffect, useState } from "react";
type Props = {
  post: PostProps
}

export function Post({ post }: Props) {
  const [aspectRatio, setAspectRatio] = useState(1);

  useEffect(() => {
    Image.getSize(post.image, (width, height) => {
      setAspectRatio(width / height)
    })
  }, [])

  return (
    <View style={styles.container}>
      <Image source={{ uri: post.image }} style={[styles.image, { aspectRatio }]} />
      <View style={styles.footer}>
        <Text style={styles.title}>{post.title}</Text>
        <Feather name="more-horizontal" size={16} color={theme.colors.white} />
      </View>
    </View>
  )
}