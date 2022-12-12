import { Button, StyleSheet, Image, Text, View } from 'react-native';
import React, { useEffect } from 'react';

const Detail = ({ route, navigation }) => {


    return (
        <View style={styles.contaner}>
            <Image style={styles.img} source={{
                uri: `${route.params.item.images}`,
            }} />
            <Text style={styles.product_name}>{route.params.item.name}</Text>
            <Text style={styles.product_price}>Giá: {route.params.item.price} vnd</Text>
            <Text style={styles.description}>Mô tả cây: {route.params.item.description}</Text>

        </View>
    );
};

export default Detail;

const styles = StyleSheet.create({
    contaner: {
        width: '100%'
    },
    img: {
        width: 400,
        height: 200
    },
    product_name: {
        color: 'green',
        fontSize: 30
    },
    product_price: {
        color: 'red',
        fontSize: 20

    },
    description: {
        color: 'black',
        fontSize: 20,
        paddingTop: 10
    }
});