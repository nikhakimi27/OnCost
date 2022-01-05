import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from 'react-native-swiper'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RoofInputScreen = ({ route, navigation }) => {

    const [inputc5, setInputc5] = useState("");
    const [inputc7, setInputc7] = useState("");
    const [inputc9, setInputc9] = useState("");
    const [inputc13, setInputc13] = useState("");
    const [inputc15, setInputc15] = useState("");
    const [inputg7, setInputg7] = useState("");
    const [inputg9, setInputg9] = useState("");
    const [inputg11, setInputg11] = useState("");
    const [inputg13, setInputg13] = useState("");
    const [inputg15, setInputg15] = useState("");
    const [inputg17, setInputg17] = useState("");
    const [inputg19, setInputg19] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Roof Measurements
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
                    <View style={styles.inputWindow}>
                        <Text style={styles.question}>
                            Length
                        </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setInputc5}
                            value={inputc5}
                            numeric value
                            keyboardType="numeric"
                        />
                        <Text style={styles.unit}>
                            m
                        </Text>
                    </View>
                    <View style={styles.inputWindow}>
                        <Text style={styles.question}>
                            Width
                        </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setInputc7}
                            value={inputc7}
                            numeric value
                            keyboardType="numeric"
                        />
                        <Text style={styles.unit}>
                            m
                        </Text>
                    </View>
                    <View style={styles.inputWindow}>
                        <Text style={styles.question}>
                            Slope
                        </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setInputc9}
                            value={inputc9}
                            numeric value
                            keyboardType="numeric"
                        />
                        <Text style={styles.unit}>
                            °
                        </Text>
                    </View>
                    <Text style={{
                        fontFamily: 'Raleway-Bold',
                        color: '#795749',
                        fontSize: 30,
                        marginTop: 10,
                        marginBottom: 20,
                    }}>
                        Length:
                    </Text>
                    <View style={styles.inputWindow}>
                        <Text style={styles.question}>
                            Ridge
                        </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setInputc13}
                            value={inputc13}
                            numeric value
                            keyboardType="numeric"
                        />
                        <Text style={styles.unit}>
                            m
                        </Text>
                    </View>
                    <View style={styles.inputWindow}>
                        <Text style={styles.question}>
                            Hip
                        </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setInputc15}
                            value={inputc15}
                            numeric value
                            keyboardType="numeric"
                        />
                        <Text style={styles.unit}>
                            m
                        </Text>
                    </View>
                </View>
                <View style={styles.form}>
                    <Text style={{
                        fontFamily: 'Raleway-Bold',
                        color: '#795749',
                        fontSize: 30,
                        marginBottom: 30,
                    }}>
                        Price Input:
                    </Text>
                    <View style={styles.inputWindow}>
                        <Text style={styles.question}>
                            Roof Tile
                        </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setInputg7}
                            value={inputg7}
                            numeric value
                            keyboardType="numeric"
                        />
                        <Text style={styles.unit}>
                            RM/pcs
                        </Text>
                    </View>
                    <View style={styles.inputWindow}>
                        <Text style={styles.question}>
                            Fascia Board
                        </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setInputg9}
                            value={inputg9}
                            numeric value
                            keyboardType="numeric"
                        />
                        <Text style={styles.unit}>
                            RM/6m
                        </Text>
                    </View>
                    <View style={styles.inputWindow}>
                        <Text style={styles.question}>
                            Gutter
                        </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setInputg11}
                            value={inputg11}
                            numeric value
                            keyboardType="numeric"
                        />
                        <Text style={styles.unit}>
                            RM/6m
                        </Text>
                    </View>
                    <View style={styles.inputWindow}>
                        <Text style={styles.question}>
                            Ridge Cap
                        </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setInputg13}
                            value={inputg13}
                            numeric value
                            keyboardType="numeric"
                        />
                        <Text style={styles.unit}>
                            RM/pcs
                        </Text>
                    </View>
                    <View style={styles.inputWindow}>
                        <Text style={styles.question}>
                            Hip Cap
                        </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setInputg15}
                            value={inputg15}
                            numeric value
                            keyboardType="numeric"
                        />
                        <Text style={styles.unit}>
                            RM/pcs
                        </Text>
                    </View>
                    <View style={styles.inputWindow}>
                        <Text style={styles.question}>
                            Flashing
                        </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setInputg17}
                            value={inputg17}
                            numeric value
                            keyboardType="numeric"
                        />
                        <Text style={styles.unit}>
                            RM/pcs
                        </Text>
                    </View>
                    <View style={styles.inputWindow}>
                        <Text style={styles.question}>
                            Labour
                        </Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setInputg19}
                            value={inputg19}
                            numeric value
                            keyboardType="numeric"
                        />
                        <Text style={styles.unit}>
                            RM/day
                        </Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => {
                            console.log(inputc5, inputc7, inputc9, inputc13, inputc15, inputg7, inputg9, inputg11, inputg13, inputg15, inputg17, inputg19)
                            navigation.navigate('RoofOutput', {inputc5, inputc7, inputc9, inputc13, inputc15, inputg7, inputg9, inputg11, inputg13, inputg15, inputg17, inputg19})
                        }
                        }
                        style={{ alignItems: 'center', marginTop: 40, marginBottom: 30 }}>
                        <View style={styles.button}>
                            <Text style={{ marginBottom: 4, color: '#795749', fontSize: 20, fontFamily: 'Raleway-Bold' }}>
                                Calculate
                            </Text>
                            <Icon name="arrow-right" size={30} color="#795749" />
                        </View>
                    </TouchableOpacity>
                </View>
            </Swiper>
        </View>
    );
};

export default RoofInputScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        marginTop: 25,
        marginLeft: 20,
    },
    form: {
        marginTop: 20,
        marginLeft: 20,
    },
    title: {
        fontFamily: 'Raleway-Bold',
        color: '#795749',
        fontSize: 35
    },
    desc: {
        fontFamily: 'Raleway-Light',
        color: '#795749',
        fontSize: 15,
        lineHeight: 25
    },
    question: {
        fontFamily: 'Raleway-Bold',
        color: '#795749',
        fontSize: 25,
        marginTop: 15,
    },
    input: {
        height: 35,
        marginTop: 12,
        marginLeft: windowWidth / 2 - 60,
        width: windowWidth / 2 - 50,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#D7C0B1",
        padding: 10,
        paddingTop: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Raleway-Regular',
        color: '#795749',
        fontSize: 30,
        position: 'absolute',
    },
    unit: {
        fontFamily: 'Raleway-Bold',
        color: '#795749',
        fontSize: 20,
        marginTop: 15,
        marginLeft: windowWidth - 100,
        position: 'absolute'
    },
    rm: {
        fontFamily: 'Raleway-Bold',
        color: '#795749',
        fontSize: 40,
        marginTop: 10,
        marginRight: 10,
    },
    inputWindow: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        height: 50,
        width: 200,
        borderColor: '#795749',
        borderWidth: 2,
        borderRadius: 10,
    }
});