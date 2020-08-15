import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    TouchableOpacity,
    ScrollView,
    Platform
} from 'react-native';

const TinderProfile = () => {
    return (
        <View style={styles.mainConatiner}>
            <ScrollView 
            style={styles.scrollViewStyle} 
            contentContainerStyle={styles.constiner}>
                <View style={styles.headerContainer1}>
                    <Image
                        source={require('../assets/profile.png')}
                        style={styles.profileImg}
                    />
                    <Image
                        source={require('../assets/tinder.png')}
                        style={styles.tinderGrey}
                    />
                </View>
               <View  style={styles.profilePic}>
               <Image
                    source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2017/10/Butterfly.png' }}
                    resizeMode={'contain'} />
               </View>
                <Text style={styles.titileText}>
                    Rose, 26
            </Text>
                <Text style={styles.designation}>
                    Product Manager
            </Text>
                <View style={styles.mediaContainer}>
                    <TouchableOpacity activeOpacity = {0.8} style={styles.settingMainContainer}>
                        <View style={styles.settingContainer}>
                            <Image style={styles.settingImg} source={require('../assets/settings.png')} />
                        </View>
                        <Text style={styles.settingText}>SETTINGS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity = {0.8}  style={styles.cameraMainConatiner}>
                        <View style={styles.cameraConatiner}>
                            <Image style={styles.cameraImg} source={require('../assets/camera.png')} />
                            <View style={styles.plusContainer}>
                                <Image style={styles.plusImg} source={require('../assets/plus.png')} />
                            </View>
                        </View>
                        <Text style={styles.settingText}>ADD PHOTOS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity = {0.8}  style={styles.settingMainContainer}>
                        <View style={styles.settingContainer}>
                            <Image style={styles.settingImg} source={require('../assets/write.png')} />
                        </View>
                        <Text style={styles.settingText}>EDIT INFO</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.mediaContainer, { marginTop: 60, justifyContent: 'space-around' }]}>
                    <TouchableOpacity  activeOpacity = {0.8} style={styles.settingMainContainer}>
                        <View style={[styles.settingContainer, {
                            width: 70,
                            height: 70,
                            borderRadius: 35
                        }]}>
                            <Image style={styles.starImg} source={require('../assets/star.png')} />
                        </View>
                        <Text style={styles.settingText}>5 Super Likes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity = {0.8} style={styles.settingMainContainer}>
                        <View style={[styles.settingContainer, {
                            width: 70,
                            height: 70,
                            borderRadius: 35
                        }]}>
                            <Image style={styles.boostImg} source={require('../assets/boost.png')} />
                        </View>
                        <Text style={styles.settingText}>1 Boost</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <TouchableOpacity  activeOpacity = {0.8} style={styles.myTinderGoldConatiner}>
                <Text style={styles.goldText}>MY TINDER GOLD</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainConatiner: {
        flex: 1,
    },
    constiner: {
        flexGrow: 1,
        alignItems: 'center',
        paddingBottom: 150
    },
    headerContainer: {
        flexDirection: 'row',
    },
    headerContainer1: {
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%'
    },
    headerContainer2: {
        flex: 0.4,
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    profileImg: {
        width: 40,
        height: 40,
        tintColor: 'rgb(245, 84, 107)',
    },
    tinderGrey: {
        width: 40,
        height: 40,
        tintColor: 'rgb(217, 224, 229)',
        position: 'absolute',
        right: 16,
        alignSelf: 'center'
    },
    titileText: {
        fontSize: 22,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 15
    },
    designation: {
        fontSize: 16,
        color: 'black',
        marginTop: 10,
        fontWeight: '200'
    },
    profilePic: {
        marginTop: 80,
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: 'grey'
    },
    mediaContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        marginTop: 15
    },
    settingImg: {
        width: 30,
        height: 30,
        tintColor: 'rgb(200, 201, 207)',
    },
    settingContainer: {
        width: 60,
        height: 60,
        backgroundColor: 'rgb(251, 251, 253)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 0 },
        elevation: 4,
        shadowRadius: 3,
    },
    settingText: {
        fontSize: 16,
        color: 'rgb(143,143,143)',
        marginTop: 10,
        fontWeight: '200',
        fontWeight: 'bold',
    },
    cameraConatiner: {
        width: 80,
        height: 80,
        backgroundColor: 'rgb(245, 84, 107)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 0 },
        elevation: 4,
        shadowRadius: 3,
    },
    cameraImg: {
        width: 40,
        height: 40,
        tintColor: 'rgb(251, 251, 253)'
    },
    cameraMainConatiner: {
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    settingMainContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    plusImg: {
        width: 17,
        height: 17
    },
    plusContainer: {
        width: 25,
        height: 25,
        backgroundColor: 'rgb(251, 251, 253)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 13,
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 0 },
        elevation: 4,
        shadowRadius: 3,
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    boostImg: {
        width: 35,
        height: 35,
        tintColor: 'rgb(171, 85, 128)'
    },
    starImg:{
        width: 35,
        height: 35,
        tintColor: 'rgb(35, 186, 230)'
    },
    myTinderGoldConatiner: {
        width: '80%',
        height: 60,
        backgroundColor: 'rgb(251, 251, 253)',
        borderRadius: 30,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 0 },
        elevation: 4,
        shadowRadius: 3,
        position: 'absolute',
        bottom: 40,
        alignSelf: 'center'
    },
    goldText: {
        fontSize: 22,
        color: 'rgb(237, 193, 124)',
        fontWeight: 'bold',
    },
    scrollViewStyle: {
        flex: 1,
        marginTop: Platform.OS == 'ios' ? 54:30
    }
})

export default TinderProfile;
