import { View } from "react-native";
import { Post } from "../Post";
import { ScrollView } from "react-native-gesture-handler";
import { styles } from "./style";

export function Posts({ posts }: PostsProps) {

  function postsByColumn(column: "rigth" | 'left') {
    const rest = column === 'left' ? 0 : 1;
    return posts.filter((_, index) => index % 2 === rest).map(post => (
      <Post post={post} />
    ))
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.list}>
     <View style={styles.container}>
      <View style={styles.column}>
          {
            postsByColumn('left')
          }
        </View>
        <View style={styles.column}>
          {
            postsByColumn('rigth')
          }
        </View>
     </View>
    </ScrollView>
  )
}