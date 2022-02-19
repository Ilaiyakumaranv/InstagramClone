import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export function TextButton({title, style, onPress}) {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
            <Text style={styles.text}> {title} </Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 8,
    },

    text: {
        fontWeight: '500',
        color: 'purple',
        fontSize: 14,
    }
})