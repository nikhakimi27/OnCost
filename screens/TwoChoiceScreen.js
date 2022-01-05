import React from 'react';
import { StyleSheet, Text, View, StatusBar, Dimensions, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const TwoChoiceScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#795749" barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.title}>
                    So, what are they building?
                </Text>
                <Text style={styles.desc}>
                    Just tell us the measurements. We'll settle the rates for you.
                </Text>
            </View>
            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('WallInput')}
                    style={styles.card}>
                    <Image
                        style={{ resizeMode: 'contain', width: windowWidth - 200, height: 200, marginLeft: 20 }}
                        source={require('../assets/wall.png')}
                    />
                    <Text style={{ fontFamily: 'Raleway-Bold', color: '#795749', fontSize: 35, marginBottom: 10 }}>
                        Wall
                    </Text>
                    <Icon name="arrow-right-circle-outline" size={30} color="#795749" style={{marginBottom:10}} />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('RoofInput')}
                    style={styles.card}>
                    <Image
                        style={{ resizeMode: 'contain', width: windowWidth - 200, height: 200, marginLeft: 20 }}
                        source={require('../assets/roof.png')}
                    />
                    <Text style={{ fontFamily: 'Raleway-Bold', color: '#795749', fontSize: 35, marginBottom: 10}}>
                        Roof
                    </Text>
                    <Icon name="arrow-right-circle-outline" size={30} color="#795749" style={{marginBottom:10}} />
                </TouchableOpacity>
                <Text style={styles.notes}>
                    The following are the rates for the supply and delivery of various building materials to the work sites within the Klang Valley, Malaysia and its vicinity. The rates are based on the prices quoted by subcontractors / suppliers but have not included the on-cost mark-up for profit and attendance by the Main Contractor.
                </Text>
            </View>
        </View>
    );
};

export default TwoChoiceScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#795749',
        height: windowHeight / 6,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    title: {
        marginTop: 25,
        marginLeft: 20,
        fontFamily: 'Raleway-Bold',
        color: '#D7C0B1',
        fontSize: 35
    },
    desc: {
        marginLeft: 25,
        fontFamily: 'Raleway-Light',
        color: '#D7C0B1',
        fontSize: 15,
        lineHeight: 25
    },
    card: {
        flexDirection: 'row',
        alignItems: 'space-between',
        borderRadius: 20,
        marginTop: 10,
        width: 350,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    notes: {
        marginTop: 20,
        fontFamily: 'Raleway-Regular',
        color: '#795749',
        fontSize: 15,
        lineHeight: 20,
        width: windowWidth - 60,
        textAlign: 'justify'
    }

});