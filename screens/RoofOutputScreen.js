import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RoofOutputScreen = ({ route, navigation }) => {

    const {inputc5, inputc7, inputc9, inputc13, inputc15, inputg7, inputg9, inputg11, inputg13, inputg15, inputg17, inputg19} = route.params;

    const outputk5 = Math.round(inputc5 * inputc7)
    const outputk7 = Math.round(outputk5 * (1 / (Math.cos(inputc9 * (Math.PI / 180)))))
    const outputk9 = Math.round((inputc5 * 2) + (inputc7 * 2))
    const outputk13 = Math.round(outputk7 * 9)
    const outputk15 = Math.round(outputk9 / 6)
    const outputk17 = Math.round(outputk15)
    const outputk19 = Math.round((inputc13 / 0.420), 1)
    const outputk21 = Math.round((inputc15 / 0.420), 1)
    const outputk23 = (parseFloat(inputc13) + parseFloat(inputc15))
    const outputp13 = Math.round(outputk13 * inputg7)
    const outputp15 = Math.round(outputk15 * inputg9)
    const outputp17 = Math.round(outputk17 * inputg11)
    const outputp19 = Math.round((outputk19 * inputg13), 1)
    const outputp21 = Math.round((outputk21 * inputg15), 1)
    const outputp23 = Math.round(outputk23 * inputg17)
    const outputp25 = Math.round((inputg19 * 0.125 * outputk7), 2)
    const outputp5 = Math.round((outputp13 + outputp15 + outputp17 + outputp19 + outputp21 + outputp23 + outputp25)*1.15)
    const outputp7 = Math.round(outputp5/outputk7)

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
                            m² Flat Area
                            </Text>
                            <Text style={styles.output}>
                                {outputk5.toFixed(0)}
                            </Text>
                            <Text style={styles.unit}>
                                {" "}m²
                            </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.question}>
                            m² Slope Area
                            </Text>
                            <Text style={styles.output}>
                                {outputk7.toFixed(0)}
                            </Text>
                            <Text style={styles.unit}>
                                {" "}m²
                            </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.question}>
                                Perimeter
                            </Text>
                            <Text style={styles.output}>
                                {outputk9.toFixed(0)}
                            </Text>
                            <Text style={styles.unit}>
                                {" "}m
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
                                Roof Tile
                            </Text>
                            <Text style={styles.output}>
                                {outputk13.toFixed(0)}
                            </Text>
                            <Text style={styles.unit}>
                                {" "}Pcs
                            </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.question}>
                                Fascia Board
                            </Text>
                            <Text style={styles.output}>
                                {outputk15.toFixed(0)}
                            </Text>
                            <Text style={styles.unit}>
                                {" "}No./6M
                            </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.question}>
                                Gutter
                            </Text>
                            <Text style={styles.output}>
                                {outputk17.toFixed(0)}
                            </Text>
                            <Text style={styles.unit}>
                                {" "}No./6M
                            </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.question}>
                                Ridge Cap
                            </Text>
                            <Text style={styles.output}>
                                {outputk19.toFixed(0)}
                            </Text>
                            <Text style={styles.unit}>
                                {" "}Pcs
                            </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.question}>
                                Hip Cap
                            </Text>
                            <Text style={styles.output}>
                                {outputk21.toFixed(0)}
                            </Text>
                            <Text style={styles.unit}>
                                {" "}RM
                            </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.question}>
                                Flashing
                            </Text>
                            <Text style={styles.output}>
                                {outputk23.toFixed(0)}
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
                                {outputp5.toFixed(0)}
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
                                {outputp7.toFixed(0)}
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
                                Price of Material
                            </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.question}>
                                Roof Tile
                            </Text>
                            <Text style={styles.output}>
                                {outputp13.toFixed(0)}
                            </Text>
                            <Text style={styles.unit}>
                                {" "}RM
                            </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.question}>
                                Fascia Board
                            </Text>
                            <Text style={styles.output}>
                                {outputp15.toFixed(0)}
                            </Text>
                            <Text style={styles.unit}>
                                {" "}RM
                            </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.question}>
                                Gutter
                            </Text>
                            <Text style={styles.output}>
                                {outputp17.toFixed(0)}
                            </Text>
                            <Text style={styles.unit}>
                                {" "}RM
                            </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.question}>
                                Ridge Cap
                            </Text>
                            <Text style={styles.output}>
                                {outputp19.toFixed(0)}
                            </Text>
                            <Text style={styles.unit}>
                                {" "}RM
                            </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.question}>
                                Hip Cap
                            </Text>
                            <Text style={styles.output}>
                                {outputp21.toFixed(0)}
                            </Text>
                            <Text style={styles.unit}>
                                {" "}RM
                            </Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.question}>
                                Flashing
                            </Text>
                            <Text style={styles.output}>
                                {outputp23.toFixed(0)}
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
                                {/* /////////////////////////////////////////////output for labour required */}
                                {outputp25.toFixed(0)}
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