import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const IconButton = (props) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={props.onPressFunction}
        >
            <Icon name={props.name} size={35} color={props.color} />
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    button: {
        width: 150,
        height: 50,
        alignItems: 'center',
        borderRadius: 5,
        margin: 10,
    },
})

export default IconButton;