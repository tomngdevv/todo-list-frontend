import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendar, faGear, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { FOOTER } from '../utils/constant';

export default Footer = ({currentMainPage = FOOTER.todo, setMainPage}) => {
    return (
        <View style={styles.footerContainer}>
            <View onTouchEnd={() => setMainPage(FOOTER.todo)}>
                <FontAwesomeIcon 
                    style={[styles.whiteText, (currentMainPage === FOOTER.todo ? styles.selectedIcon: "")]} 
                    icon={faSquareCheck} 
                />
            </View>
            <View onTouchEnd={() => setMainPage(FOOTER.calendar)}>
                <FontAwesomeIcon 
                    style={[styles.whiteText, ((currentMainPage === FOOTER.calendar ? styles.selectedIcon: ""))]} 
                    icon={faCalendar} />
            </View>
            <View onTouchEnd={() => setMainPage(FOOTER.setting)}>
                <FontAwesomeIcon 
                    style={[styles.ellipsisIcon, ((currentMainPage === FOOTER.setting ? styles.selectedIcon: ""))]} 
                    icon={faGear} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    footerContainer: {
        height: '10%',
        backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 25,
        paddingVertical: 17
    },
    hamburgerContainer: {
        width: '30%',
        alignItems: 'flex-start',
    },
    titleContainer: {
        width: '30%',
        alignItems: 'center',
    },
    title: {
        flexDirection: 'row',
        color: '#fff',
    },
    headerRightSection: {
        width: '30%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        color: '#fff',
    },
    selectedIcon: {
        color: '#FFA500'
    },
    whiteText: {
        color: '#fff'
    },
    ellipsisIcon: {
        marginLeft: 15,
        color: '#fff'
    }
});
