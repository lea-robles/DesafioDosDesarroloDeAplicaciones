import { StyleSheet, TextInput, View, Button } from 'react-native'

const CustomInput = (
    {
        onChangeTextHandlerEvent,
        textItemProp,
        addItemToListHandlerEvent
    }
) => {
    return (
        <View style={styles.containerInput}>
            <TextInput
                style={styles.input}
                placeholder='Escriba su nota'
                onChangeText={onChangeTextHandlerEvent}
                value={textItemProp}
                placeholderTextColor={'#ffff'}
            />
            <Button
                title='Add'
                color='#841584'
                onPress={addItemToListHandlerEvent}
            />
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    containerInput: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    input: {
        borderColor: '#841584',
        borderWidth: 3,
        borderRadius: 8,
        padding: 2,
        paddingLeft: 15,
        width: 250,
        color: '#ffff',
    },
})