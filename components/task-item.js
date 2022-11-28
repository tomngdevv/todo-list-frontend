import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSquareCheck, faSquare } from '@fortawesome/free-solid-svg-icons';

export default TaskItem = ({ completed = false, title='', date='1 Jan' }) => {

    const [currentStatus, setCurrentStatus] = useState(completed);

    if (currentStatus) {
        return (
            <View style={styles.mainCompletedTaskItemContainer}>
                <View onTouchEnd={ () => setCurrentStatus(!currentStatus)}>
                <FontAwesomeIcon 
                    style={styles.innerLeftContainer} 
                    icon={faSquareCheck} 
                />
                </View>
                <Text style={styles.innerMiddleContainer}>{title}</Text>
                <Text style={styles.innerRightContainer}>{date}</Text>
            </View>
        );
    } else {
        return (
            <View style={styles.mainTodoTaskItemContainer}>
                <View onTouchEnd={ () => setCurrentStatus(!currentStatus)}>
                <FontAwesomeIcon 
                    style={[styles.innerLeftContainer, styles.completedHandling]} 
                    icon={faSquare} 
                />
                </View>
                <Text style={[styles.innerMiddleContainer, styles.completedHandling]}>{title}</Text>
                <Text style={[styles.innerRightContainer, , styles.completedHandling]}>{date}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainCompletedTaskItemContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10
    },
    mainTodoTaskItemContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10
    },
    innerLeftContainer: {
        width: '20%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerMiddleContainer: {
        width: '60%',
    },
    innerRightContainer: {
        width: '20%',
        color: '#ff0000'
    },
    completedHandling: {
        opacity: 0.5,
        textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid'
    }
});