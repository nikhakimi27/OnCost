import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from 'react-native-swiper'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const WallInputScreen = ({ route, navigation }) => {

    const [inputc5, setInputc5] = useState("");
    const [inputc7, setInputc7] = useState("");
    const [inputc10, setInputc10] = useState("");
    const [inputc12, setInputc12] = useState("");
    const [inputc14, setInputc14] = useState("");
    const [inputc16, setInputc16] = useState("");
    const [inputc18, setInputc18] = useState("");
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    Roof Measurements
                </Text>
            </View>
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
                        Height
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
                        Brick
                    </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setInputc10}
                        value={inputc10}
                        numeric value
                        keyboardType="numeric"
                    />
                    <Text style={styles.unit}>
                        RM/pcs
                    </Text>
                </View>
                <View style={styles.inputWindow}>
                    <Text style={styles.question}>
                        Cement
                    </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setInputc12}
                        value={inputc12}
                        numeric value
                        keyboardType="numeric"
                    />
                    <Text style={styles.unit}>
                        RM/Kg
                    </Text>
                </View>
                <View style={styles.inputWindow}>
                    <Text style={styles.question}>
                        Sand
                    </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setInputc14}
                        value={inputc14}
                        numeric value
                        keyboardType="numeric"
                    />
                    <Text style={styles.unit}>
                        RM/Kg
                    </Text>
                </View>
                <View style={styles.inputWindow}>
                    <Text style={styles.question}>
                        Brick{"\n"}Reinforcement
                    </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setInputc16}
                        value={inputc16}
                        numeric value
                        keyboardType="numeric"
                    />
                    <Text style={styles.unit}>
                        RM/m
                    </Text>
                </View>
                <View style={styles.inputWindow}>
                    <Text style={styles.question}>
                        Labour
                    </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setInputc18}
                        value={inputc18}
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
                        console.log(inputc5, inputc7, inputc10, inputc12, inputc14, inputc16, inputc18)
                        navigation.navigate('WallOutput', { inputc5, inputc7, inputc10, inputc12, inputc14, inputc16, inputc18 })
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
        </View>
    );
};

export default WallInputScreen;

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