import { Button, StyleSheet, Image, FlatList, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductDetail from './ProductDetail';

const ShopProducts = ({ route, navigation }) => {
    useEffect(() => {
        axios.get('https://61ce733e7067f600179c5ea7.mockapi.io/mn/products')
            .then((res) => {
                setProducts({
                    isLoaded: true,
                    data: res.data
                })
            })
            .catch((err) => console.log(err))
    }, [
    ])
    const [products, setProducts] = useState({
        isLoaded: false,
        data: []

    });

    const renderItem = ({ item }) => (
        <ScrollView>
            <TouchableOpacity onPress={() => { navigation.navigate('Detail', { item }) }}>
                <ProductDetail name={item.name} image={item.images} price={item.price} />
            </TouchableOpacity>
        </ScrollView>
    )
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.img} source={{
                    uri: `${route.params.item.image}`,
                }} />
                <Text style={styles.name}>{route.params.item.name}</Text>
            </View>
            <View style={{ top: 20 }}>
                <FlatList
                    data={products.data.filter(product => product.shop_id === route.params.item.id )}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns= {2}
                    horizontal={false}
                />
            </View>
        </View>
    );
};

export default ShopProducts;

const styles = StyleSheet.create({
    container: {
        width: '100%',

    },
    img: {
        width: '100%',
        height: 100
    },
    name: {
        textAlign: 'center',
        fontSize: 25,
        color: 'black'

    }
});