import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faTableColumns, faEllipsis } from '@fortawesome/free-solid-svg-icons';

export default Header = () => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.hamburgerContainer}>
                <FontAwesomeIcon style={styles.whiteText} icon={faBars} />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Today</Text>
            </View>
            <View style={styles.headerRightSection}>
                <FontAwesomeIcon style={styles.whiteText} icon={faTableColumns} />
                <FontAwesomeIcon style={styles.ellipsisIcon} icon={faEllipsis} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#000',
        height: '7%',
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    whiteText: {
        color: '#fff'
    },
    ellipsisIcon: {
        marginLeft: 15,
        color: '#fff'
    }
});
