import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { defaultStyle } from '@src/static/index';
import Modal from 'react-native-modal';


export default (props) => {

    const { showModal, errors, toggleAlert } = props;

    return (
        <Modal 
            isVisible={showModal} 
            style={defaultStyle.alert}
            animationIn="fadeIn"
            animationOut="fadeOut"
            avoidKeyboard={true}
        >
            <View style={defaultStyle.alertContainer}>
                <View>
                    <View style={defaultStyle.errorLogoContainer}>
                        <Feather name='alert-triangle' color='red' size={60} />
                    </View>
                    <View style={defaultStyle.errorListContainer}>
                        {
                            errors.map( (value, index) => (
                                <Text key={index} style={defaultStyle.errorText}>- {value}</Text>
                            ))
                        }
                    </View>
                </View>
                <TouchableOpacity style={defaultStyle.dismissBtn} activeOpacity={0.8} onPress={ () => toggleAlert([]) }>
                    <Text style={defaultStyle.dismissBtnText}>Ok</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}
