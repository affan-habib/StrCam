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
            <Icon
                style={{
                    backgroundColor: props.bgcolor,
                    borderRadius: 50,
                    padding: 5,
                    padding: 5,
                }}
                name={props.name} size={30} color={props.color} />
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    button: {
        border: 5,
        borderColor: "white"
    },
})

export default IconButton;