import React, { useState } from 'react';
import { View, Dimensions } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';
import { Image } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Cards = () => {
    const [clickCountGirl, setClickCountGirl] = useState(0);
    const [clickCountBoy, setClickCountBoy] = useState(0);
    const width = Dimensions.get('window').width;
    const navigation = useNavigation();

    const handleGirlCardClick = () => {
        setClickCountGirl(clickCountGirl + 1);
        navigation.navigate('Girl');
    };

    const handleBoyCardClick = () => {
        setClickCountBoy(clickCountBoy + 1);
        navigation.navigate('Boy');
    };

    return (
        <View>
            <View>
                <Card containerStyle={styles.card}>
                    <Card.Title style={styles.text}>UwU</Card.Title>
                    <Card.Divider />
                    <Image style={styles.image} source={require('../../assets/img/uwucat.jpg')} />
                    <Button
                        onPress={handleGirlCardClick}
                        icon={
                            <Ionicons name="enter-outline" size={24} color="white" style={styles.icon} />
                        }
                        buttonStyle={{ borderRadius: 15, backgroundColor: 'rgba(249, 162, 207, 0.8)' }}
                        title={'Si sos mujer, presiona aca'}
                    />
                    <Text style={styles.counter}>Entradas: {clickCountGirl}</Text>
                </Card>
            </View>
            <View>
                <Card containerStyle={styles.card}>
                    <Card.Title style={styles.text}>OwO</Card.Title>
                    <Card.Divider />
                    <Image style={styles.image} source={require('../../assets/img/bart.jpg')} />
                    <Button
                        onPress={handleBoyCardClick}
                        icon={
                            <Ionicons name="enter-outline" size={24} color="black" style={styles.icon} />
                        }
                        buttonStyle={{ borderRadius: 15, backgroundColor: 'rgba(154, 214, 252, 0.8)', }}
                        title={'Si sos hombre presiona aca'}
                    />
                    <Text style={styles.counter}>Entradas: {clickCountBoy}</Text>
                </Card>
            </View>
        </View>
    );
};

const styles = ScaledSheet.create({
    card: {
        marginRight: '10@ms',
        borderRadius: 20,
        alignContent: 'center',
        color: '#FFFFF',
    },
    icon: {
        marginRight: '5@ms',
    },
    image: {
        width: '320@ms',
        height: '150@vs',
        resizeMode: 'contain',
        marginTop: '-10@ms',
        marginVertical: '-0@vs',
        borderRadius: 20,
    },
    text: {
        marginLeft: '10@ms',
        fontSize: 16,
        color: 'black',
        borderColor: '#000000',
        marginBottom: '5@ms'
    },
    counter: {
        textAlign: 'center',
        marginTop: '10@ms',
        color: 'gray'
    }
});

export default Cards;
