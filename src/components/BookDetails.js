import React from 'react';
import { StyleSheet, ScrollView, View, Text, } from 'react-native';

const BookDetails = props => {

    const { params } = props.navigation.state;
    const item = params.item;
    return (
        <View style={styles.itemContainer}>
            <ScrollView style={styles.rowContainer}>
                <View style={styles.textContainer}>
                    <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
                </View>
                <View style={styles.descContainer}>
                    <Text style={styles.subtitle}>{item.description}</Text>
                </View>
                <View style={styles.dataContainer}>
                    {TextViewData("Price:", item.price)}
                    {TextViewData("Publisher:", item.publisher)}
                    {TextViewData("Release Date:", item.release_date)}
                </View>
            </ScrollView>
        </View>
    );
}
const TextViewData = (text, value) => {
    return (
        <View style={styles.detailContainer}>
            <Text style={styles.key}>{text}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#f0edeb',
        width: '100%',
        height: '100%',
        padding: 20,
        flex: 1,
        alignItems: 'center'
    },
    textContainer: {
        marginTop: 10,
    },
    descContainer: {
        marginTop: 30,
        marginBottom: 50
    },
    dataContainer: {
        flexDirection: "column",
        width: "100%",
    },
    detailContainer: {
        marginBottom: 5,
        flexDirection: "row",
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4a4948'
    },
    subtitle: {
        fontSize: 16,
        color: '#4a4948'
    },
    key: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4a4948',
        width: "40%"
    },
    value: {
        fontSize: 16,
        color: '#4a4948',
        width: "60%",
        alignSelf: "flex-start"
    },
    rowContainer: {
        flexDirection: 'column',
        padding: 10
    },
});

export default BookDetails;
