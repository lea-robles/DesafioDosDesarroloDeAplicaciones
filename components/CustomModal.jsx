import { StyleSheet, Text, View, Modal, Button } from 'react-native'


const CustomModal = (
    {
        modalVisibleProp,
        itemToDeleteProp,
        deleteItemHandlerEvent,
        setModalVisibleEvent
    }

) => {

    return (
        <Modal animationType='slide' visible={modalVisibleProp}>
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalTextContainer}>
                        <Text style={styles.textModal}>Se Eliminara:</Text>
                        <Text style={styles.textModal}>{itemToDeleteProp.value}</Text>
                    </View>
                    <View style={styles.modalButtonContainer}>
                        <Button title='Cancelar' color='#9F9F9F' onPress={() => setModalVisibleEvent(!modalVisibleProp)} />
                        <Button title='Eliminar' color='#ef233c' onPress={() => deleteItemHandlerEvent()} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default CustomModal

const styles = StyleSheet.create({
    modalTextContainer: {
        alignItems: 'center',
    },
    textModal: {
        color: '#ffff'
    },
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 20
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#841584',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#841584',
        marginVertical: 270,
        marginHorizontal: 25
    },
    modalBackground: {
        flex: 1,
        backgroundColor: '#171719'
    }
})