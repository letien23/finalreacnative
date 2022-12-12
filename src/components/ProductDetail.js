import { View, Image, StyleSheet, Text } from "react-native";


const ProductDetail = (props, navigation) => {
    return (

        <View style={styles.card}>
            <Image style={styles.img} source={{
                uri: `${props.image}`,
            }} />
            <View></View>
            <Text style={styles.product_name}>
                {props.name}
            </Text>
            <Text style={styles.product_price}>
                Giá: {props.price} .vnđ
            </Text>
        </View>

    )
}
export default ProductDetail;
const styles = StyleSheet.create({
    product_name: {
        color: 'green',
        fontSize: 20
    },
    product_price: {
        color: 'red'
    }
    ,
    card: {
        padding: 1,
        width: 201,
        margin: 2,
        borderColor: 'blue',
        borderWidth: 1,
        borderBottomLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    img: {
        borderTopRightRadius: 5,
        width: 196,
        height: 100
    }
});