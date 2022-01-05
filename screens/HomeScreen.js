import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#B09287" barStyle="dark-content" />
            <View>
                <Image
                    style={{ resizeMode: 'contain', width: windowWidth, height: 295 }}
                    source={require('../assets/home.png')}
                />
            </View>
            <View style={styles.title}>
                <Text style={{ fontFamily: 'Raleway-Bold', color: '#D7C0B1', fontSize: 30 }}>
                    Gear up lads! {"\n"}What are we calculating, boss?
                </Text>
            </View>
            <View style={styles.desc}>
                <Text style={{ fontFamily: 'Raleway-Light', color: '#D7C0B1', fontSize: 18, lineHeight: 30, width: windowWidth - 40 }}>
                    Ensure your bulding project remains on budget!
                    Calculate cost and material estimates on walls and roofs.
                </Text>
            </View>
            <TouchableOpacity 
                activeOpacity={0.8}
                onPress={() => navigation.navigate('TwoChoice')}
                style={{alignItems: 'center', marginTop: 40}}>
                <View style={styles.button}>
                    <Text style={{marginBottom: 4, color: '#B09287', fontSize: 20, fontFamily: 'Raleway-Bold'}}>
                        Get Started
                    </Text>
                    <Icon name="arrow-right" size={30} color="#B09287" />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#795749'
    },
    title: {
        marginLeft: 20,
        marginTop: 70,
    },
    desc: {
        marginLeft: 20,
        marginTop: 20,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        height: 50,
        width: 200,
        borderColor: '#B09287',
        borderWidth: 2,
        borderRadius: 10,

    }
});