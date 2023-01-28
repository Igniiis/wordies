import { View, Text } from 'react-native'
import React from 'react'

interface SeparatorProps {
    color?: string; // attribut optionnel (d'ou le ?) de l'objet Separator, permettant de changer la couleur du separator
}

export const Separator: React.FunctionComponent<SeparatorProps> = ({
    color = "#CED0CE", 
}) => {
    
    return <View style={
        {
            height: 1,
            width: "100%",
            backgroundColor: "#CED0CE",
            marginTop: 12,
            marginBottom: 12,
        }
    }>

    </View>;
};