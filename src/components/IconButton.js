import React from 'react';
import {
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const IconButton = (props) => {
    return (
        <TouchableOpacity
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

export default IconButton;