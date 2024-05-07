import React from 'react'
import { ScrollView, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
import { Text } from '@rneui/themed';


const Girl = () => {
    return (

        <View >

            <ScrollView
                scrollEnabled={false}
                keyboardShouldPersistTaps='always'
                contentContainerStyle={styles.scrollContent}>
                <Text style={styles.title}>fULL LINDA</Text>
            </ScrollView>

        </View>
    )
}

const styles = ScaledSheet.create({

    title: {
        fontSize: 24,
        marginBottom: '20@ms',
        textAlign: 'center',
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: '10@vs',
        marginTop: '100@ms',
        padding: 20,
    },
})

export default Girl