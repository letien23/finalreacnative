import { View, Text, TextInput, Button, SafeAreaView, Image, StyleSheet, TouchableOpacity, ScrollView, ScrollViewBase, FlatList } from 'react-native';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
// import ProductDetail from '../../components/ProductDetail';



const Map = ({ navigation }) => {

    useEffect(() => {
        axios.get('https://61ce733e7067f600179c5ea7.mockapi.io/mn/shops')
            .then((res) => {
                setShops({
                    isLoaded: true,
                    data: res.data
                })
            })
            .catch((err) => console.log(err))
    }, [
    ])

    const [shops, setShops] = useState({
        isLoaded: false,
        data: []

    });

    const [location, setLocation] = useState({
        latitude: 16.06089,
        longitude: 108.24079,
    })

    const Shop = ({ item }) => (
        <TouchableOpacity style={styles.restaurant}
            onPressIn={newLocation => setLocation({
                latitude: item.latitude,
                longitude: item.longitude,
            })}
        >
            <View style={{ width: 245, }}>
                
                <Image source={{ uri: item.image }} style={styles.img} />
                <Text numberOfLines={1} style={styles.name}>{item.name}</Text>
                <Text numberOfLines={1} style={styles.location}><Icon name="location-arrow" size={20} color="#1E90FF" />{item.address}</Text>
                <Button
                    onPress={() => { navigation.navigate('ShopProducts', {item}) }}
                    title="Xem shop"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                ></Button>
            </View>
        </TouchableOpacity>
    );



    const markers = shops.data.map((shop) => {
        if (shop.latitude != location.latitude) {
            return (
                <Marker coordinate={{
                    latitude: shop.latitude,
                    longitude: shop.longitude,
                }}>
                    <Image style={styles.icon} source={require('../../asset/image/restaurant.png')} />
                </Marker>
            )
        } else {
            return (
                <Marker coordinate={location}>
                    <Image style={styles.icon} source={require('../../asset/image/restaurant1.png')} />
                </Marker>
            )
        }

    }

    )


    const renderItem = ({ item }) => (
        

        <Shop item={item} ></Shop>

    )

    return (

        <View>
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    region={{
                        latitude: 16.06089,
                        longitude: 108.24079,
                        latitudeDelta: 0.05,
                        longitudeDelta: 0.05,
                    }}
                >
                    <Marker coordinate={{
                        latitude: 16.060959,
                        longitude: 108.240774,
                    }} >
                    </Marker>
                    {markers}
                </MapView>
            </View>
            <View style={{ top: 490 }}>
                <FlatList
                    data={shops.data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />
            </View>
        </View>
    )
}

export default Map;


const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 800,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    map: {
        ...StyleSheet.absoluteFillObject,
    },
    icon: {
        width: 35,
        height: 35,
    },
    seach: {
        backgroundColor: "white",
        height: 50,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    restaurant: {
        backgroundColor: "white",
        height: 230,
        padding: 20,
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 10,
    },
    img: {
        width: 245,
        height: 100
    },
    name: {
        color: "black",
        fontSize: 20,
        fontWeight: "600",
        marginTop: 5,

    },
    location: {
        color: "black",
        fontSize: 15,
        marginTop: 5,
    },
    option: {
        backgroundColor: "white",
        padding: 10,
        marginLeft: 20,
        borderRadius: 10
    }
});