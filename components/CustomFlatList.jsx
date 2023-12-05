import { FlatList } from 'react-native'

const CustomFlatList = (
    {
        itemListProp,
        renderListItemEvent
    }
) => {
  return (
    <FlatList
          data={itemListProp}
          renderItem={renderListItemEvent}
          keyExtractor={item => item.id}
        />
  )
}

export default CustomFlatList