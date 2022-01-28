import React from 'react';
import {Platform} from 'react-native';
import {HeaderButton, HeaderButtons} from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

const customHeaderButton = (props) => {
    return ( 
        <HeaderButton 
            {...props}
            IconComponent={Ionicons}
            iconSize={22}
            color = {Platform.OS ==="android" ? "white":"black"}
        />
     );
}
 
export default customHeaderButton;

