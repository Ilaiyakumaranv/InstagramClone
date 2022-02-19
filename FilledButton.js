import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export function FilledButton({title, style, onPress}) {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text style={styles.buttonText}> {title} </Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0096F6',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 8,
    },

    buttonText: {
        fontWeight: '600',
        color: '#fff',
        fontSize: 20,
    }
})