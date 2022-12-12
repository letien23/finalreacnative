import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, FlatList } from 'react-native';

import axios from 'axios';

import React, { useEffect, useState } from 'react';
import ProductDetail from '../../components/ProductDetail';

const Products = ({ navigation }) => {

    const [shops, setShops] = useState({
        isLoaded: false,
        data: []

    });

    useEffect(() => {
        axios.get('https://61ce733e7067f600179c5ea7.mockapi.io/mn/products')
            .then((res) => {
                setShops({
                    isLoaded: true,
                    data: res.data
                })
            })

            .catch((err) => console.log(err))
    }, [

    ])

    const renderItem = ({ item }) => (
        <ScrollView>
            <TouchableOpacity onPress={() => { navigation.navigate('Detail', {item}) }}>
                <ProductDetail name={item.name}  image={item.images} price = {item.price} />            
            </TouchableOpacity>
        </ScrollView>
    )

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View >
            <Image style={styles.img} source={{
                uri: `https://png.pngtree.com/png-vector/20210731/ourlarge/pngtree-tree-logo-png-png-image_3759593.jpg`,
            }} />
            </View>
            {shops.isLoaded ?
                <FlatList
                    data={shops.data}
                    renderItem={renderItem}
                    numColumns= {2}
                    horizontal={false}
                />
                : <Text>LOading...</Text>
                
            }
        </View>
    )
}

export default Products;
const styles = StyleSheet.create({
    container: {
        width: '99%',
        backgroundColor: 'CFFDE1'
    },
    img: {width: 400, height: 40},
  });
  