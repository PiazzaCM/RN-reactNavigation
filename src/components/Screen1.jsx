import { Text, View, ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import React from 'react';
import Cards from './Cards';


const Screen1 = () => {
    return (
        <View style={styles.container}>
            <ScrollView
                keyboardShouldPersistTaps='always'
                contentContainerStyle={styles.scrollContent}
                scrollEnabled={true}>
                <Text style={styles.text}>Bienvenidoa:3</Text>
                <Cards />
            </ScrollView>
        </View>
    );
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(246, 230, 255, 0.8)',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',

    },
    text: {
        fontSize: '30@s',
        marginLeft: '40@ms',
        alignContent: 'center',
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: '10@vs',
    },
});

export default Screen1;