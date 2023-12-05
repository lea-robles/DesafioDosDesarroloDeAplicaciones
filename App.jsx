import { useState } from 'react'
import { StyleSheet, View, Button, TextInput, Text, FlatList, StatusBar, Modal } from 'react-native'
import CustomModal from './components/CustomModal'
import CustomInput from './components/CustomInput'
import CustomFlatList from './components/CustomFlatList'

export default function App() {
  const [textItem, setTextItem] = useState("")
  const [itemList, setItemList] = useState([])
  const [itemToDelete, setItemToDelete] = useState({})
  const [modalVisible, setModalVisible] = useState(false)
  const onChangeTextHandler = (text) => {
    setTextItem(text)
  }

  const addItemToListHandler = () => {
    textItem.trim() !== "" ? setItemList(prevState => [...prevState, { id: Math.random().toString(), value: textItem }]) : null
    setTextItem("")
  }

  const renderListItem = ({ item }) => {
    return (
      <View style={styles.itemList} >
        <Text>{item.value}</Text>
        <Button title='x' color={'#ef233c'} onPress={() => selectToDeleteHandler(item.id)} />
      </View>
    )
  }

  const selectToDeleteHandler = (id) => {
    setModalVisible(!modalVisible)
    setItemToDelete(itemList.find(elemento => elemento.id === id))
  }
  const deleteItemHandler = () => {
    setItemList(itemList.filter(elemento => elemento.id !== itemToDelete.id))
    setModalVisible(!modalVisible)
  }


  return (
    <>
      <View style={styles.container}>
        <StatusBar style='auto' />
        <CustomInput
          onChangeTextHandlerEvent={onChangeTextHandler}
          textItemProp={textItem}
          addItemToListHandlerEvent={addItemToListHandler}
        />
        <CustomFlatList
          itemListProp={itemList}
          renderListItemEvent={renderListItem}
        />
      </View>
      <CustomModal
        modalVisibleProp={modalVisible}
        itemToDeleteProp={itemToDelete}
        deleteItemHandlerEvent={deleteItemHandler}
        setModalVisibleEvent={setModalVisible}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171719',
    padding: 30,
    paddingTop: 50
  },
  itemList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#841584',
  },
})
