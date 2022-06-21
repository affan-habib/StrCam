import React from "react"
import { View } from "react-native"
import IconButton from "./IconButton"
import globalStyles from '../styles/globalStyles'
const Pagination = (props) => {
    return (
        <View style={globalStyles.pagination}>
            <IconButton
                name="arrow-back"
                color="white"
                bgcolor="#0e9594"
                onPressFunction={() => {
                    // setDetailViewVisibility(false)
                }}>
                {/* <Text>prev</Text> */}
            </IconButton>
            <IconButton
                name="arrow-forward"
                color="white"
                bgcolor="#0e9594"
                onPressFunction={() => {
                    // setDetailViewVisibility(false)
                }}>
                {/* <Text>close</Text> */}
            </IconButton>
        </View>
    )
}

export default Pagination;