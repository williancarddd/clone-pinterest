import { FlatList } from "react-native";
import { Filter } from "@//components/Filter";
import { styles } from "./style";

export function Filters({filter, filters, onChange}: FiltersProps) {
  return <FlatList 
    data={filters}
    keyExtractor={(item) => item}
    renderItem={({item}) => <Filter filter={item} selected={item == filter} onPress={() => onChange(item)}/>}
    horizontal
    style={styles.list}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.content}
    />
}