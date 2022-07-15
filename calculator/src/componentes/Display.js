import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    display: {
        flex:1,
        padding:10,
        justifyContent:'center',
        backgroundColor:'rgba(0,0,0,0.8)',
        alignItems:'flex-end',            
    },
    displayContent: {
        fontSize:60,
        color: '#ccc',
    },
})

export default props => {
    return (
        <View style={styles.display}>
            <Text style={styles.displayContent} numberOfLines={1}> { props.value } </Text>
        </View>
    )
}