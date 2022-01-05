import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RoofOutputScreen = ({ route, navigation }) => {

    const {inputc5, inputc7, inputc10, inputc12, inputc14, inputc16, inputc18} = route.params;

    const outputg5 = Math.round(inputc5 * inputc7)
    const outputg10 = Math.round(outputg5 / 0.16875)
    const outputg12 = Math.round(2.92 * outputg5)
    const outputg14 = Math.round(10 * outputg5)
    const outputg16 = Math.round(3.6 * outputg5)
    const outputk10 = Math.round(outputg10 * inputc10)
    const outputk12 = Math.round(outputg12 * inputc12)
    const outputk14 = Math.round(outputg14 * inputc14)
    const outputk16 = Math.round(outputg16 * inputc16)
    const outputk18 = Math.round(inputc18 * outputg5 * 0.16875)
    const outputk5 = Math.round((outputk10 + outputk12 + outputk14 + outputk16 + outputk18) * 1.15)
    const outputk7 = Math.round(outputk5 / outputg5)

    const [timePassed, setTimePassed] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTimePassed(true);
        }, 2000);
    }, [navigation])
    if (timePassed == true) {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        Got it, boss!
                    </Text>
                </View>
                <Swiper
                    style={styles.wrapper}
                    showsButtons={true}
                    loop={false}
                    dot={
                        <View
                            style={{
                                backgroundColor: '#D7C0B1',
                                width: 5,
                                height: 5,
                                borderRadius: 4,
                                marginLeft: 3,
                                marginRight: 3,
                                marginTop: 3,
                                marginBottom: 3
                            }} />}
                    activeDot={
                        <View
                            style={{
                                backgroundColor: '#423029',
                                width: 8,
                                height: 8,
                                borderRadius: 4,
                                marginLeft: 3,
                                marginRight: 3,
                                marginTop: 3,
                                marginBottom: 3
                            }}
                        />
                    }
                    nextButton={
                        <Text style={{ color: '#423029', fontSize: 40 }}>›</Text>
                    }
                    prevButton={
                        <Text style={{ color: '#423029', fontSize: 40 }}>‹</Text>
                    }>

                    <View style={styles.form}>
                        <View style={styles.row}>
                            <Text style={styles.question}>
                            Area
                            </Text>
                            <Text style={styles.output}>
                                {outputg5.toFixed(0)}
                            </Text>
                            <Text style={styles.unit}>
                                {" "}m²
                            </Text>
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{
                                fontFamily: 'Raleway-Bold',
                                color: '#D7C0B1',
                                fontSize: 30,
                                marginBottom: 20,
                                marginTop: 20,
                            }}>
                                Quantity of Material
                            </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.question}>
                            Brick
                            </Text>
                            <Text style={styles.output}>
                                {outputg10.toFixed(0)}
                            </Text>
                            <Text style={styles.unit}>
                                {" "}Nr.
                            </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.question}>
                                Cement
                            </Text>
                            <Text style={styles.output}>
                                {outputg12.toFixed(0)}
                            </Text>
                            <Text style={styles.unit}>
                                {" "}Kg
                            </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.question}>
                                Sand
                            </Text>
                            <Text style={styles.output}>
                                {outputg14.toFixed(0)}
                            </Text>
                            <Text style={styles.unit}>
                                {" "}Kg
                            </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.question}>
                                Brick{"\n"}Reinforcement
                            </Text>
                            <Text style={styles.output}>
                                {outputg16.toFixed(0)}
                            </Text>
                            <Text style={styles.unit}>
                                {" "}m
                            </Text>
                        </View>
                    </View>
                    <View style={styles.form}>
                        <View style={styles.row}>
                            <Text style={styles.question}>
                                Total Cost
                            </Text>
                            <Text style={styles.output}>
                                {outputk5.toFixed(0)}
                            </Text>
                            <Text style={styles.unit}>
                                {" "}RM
                            </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.question}>
                                Unit Rate
                            </Text>
                            <Text style={styles.output}>
                                {/* /////////////////////////////////////////////output for unit rate required */}
                                {outputk7.toFixed(0)}
                            </Text>
                            <Text style={styles.unit}>
                                {" "}RM/m²
                            </Text>
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{
                                fontFamily: 'Raleway-Bold',
                                color: '#D7C0B1',
                                fontSize: 30,
                                marginBottom: 20,
                                marginTop: 20,
                            }}>
                                Cost Breakdown:
                            </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.question}>
                                Brick
                            </Text>
                            <Text style={styles.output}>
                                {outputk10.toFixed(0)}
                            </Text>
                            <Text style={styles.unit}>
                                {" "}RM
                            </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.question}>
                                Cement
                            </Text>
                            <Text style={styles.output}>
                                {outputk12.toFixed(0)}
                            </Text>
                            <Text style={styles.unit}>
                                {" "}RM
                            </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.question}>
                                Sand
                            </Text>
                            <Text style={styles.output}>
                                {outputk14.toFixed(0)}
                            </Text>
                            <Text style={styles.unit}>
                                {" "}RM
                            </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.question}>
                                Brick{"\n"}Reinforcement
                            </Text>
                            <Text style={styles.output}>
                                {outputk16.toFixed(0)}
                            </Text>
                            <Text style={styles.unit}>
                                {" "}RM
                            </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.question}>
                                Labour
                            </Text>
                            <Text style={styles.output}>
                                {outputk18.toFixed(0)}
                            </Text>
                            <Text style={styles.unit}>
                                {" "}RM
                            </Text>
                        </View>
                    </View>
                </Swiper>
            </View>
        );
    }
    else {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#795749' }}>
                <ActivityIndicator size="large" color="#D7C0B1" />
            </View>
        )
    }
};

export default RoofOutputScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#795749'
    },
    header: {
        marginTop: 25,
        marginLeft: 20,
    },
    form: {
        marginTop: 20,
    },
    title: {
        fontFamily: 'Raleway-Bold',
        color: '#D7C0B1',
        fontSize: 30,
    },
    desc: {
        fontFamily: 'Raleway-Light',
        color: '#D7C0B1',
        fontSize: 15,
        lineHeight: 25
    },
    question: {
        fontFamily: 'Raleway-Bold',
        color: '#D7C0B1',
        fontSize: 25,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 40,
        marginBottom: 20
    },
    column: {
        alignItems: 'center',
        backgroundColor: '#D7C0B1',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 20,
    },
    output: {
        fontFamily: 'Raleway-Bold',
        color: '#D7C0B1',
        fontSize: 25,
        position: 'absolute',
        marginLeft: windowWidth / 2 - 50,
    },
    unit: {
        fontFamily: 'Raleway-Bold',
        color: '#D7C0B1',
        fontSize: 25,
        position: 'absolute',
        marginLeft: windowWidth - 150
    },
    rm: {
        fontFamily: 'Raleway-Bold',
        color: '#D7C0B1',
        fontSize: 40,
        marginTop: 10,
        marginRight: 10,
    },
    inputWindow: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        height: 50,
        width: 200,
        borderColor: '#D7C0B1',
        borderWidth: 2,
        borderRadius: 10,
    }
});