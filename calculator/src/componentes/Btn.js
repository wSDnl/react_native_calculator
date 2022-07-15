import React from "react"
import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native'

const style = StyleSheet.create({
    btn: {
        fontSize:60,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding:10,
        backgroundColor:'#f5f5f5',
        textAlign: 'center',
        borderWidth:1,
        borderColor:'#666',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    buttomOperator: {
        color:'#fff',
        backgroundColor:'#fa8231',
    }
})

export default props => {
    const styleBtn = [style.btn]
    if (props.operador) styleBtn.push( style.buttomOperator )
    return(        
            <TouchableHighlight onPress={ () => props.onClick( props.label )}>
                 <Text style={ styleBtn }> {props.label} </Text>
            </TouchableHighlight>
    )
}