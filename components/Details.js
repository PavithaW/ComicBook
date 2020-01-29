import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';

export default class Details extends React.Component {
    // static navigationOptions =
    //     {
    //         title: 'Details',
    //         headerStyle: {
    //             backgroundColor: '#d0d0e1'
    //         }
    //     };
    render() {
        const { params } = this.props.navigation.state;
        const item = params.item;
        return (
            <View style = {styles.itemContainer}>
                <View style = {styles.rowContainer}>
                    <View style = {styles.textContainer}>
                        <Text numberOfLines = {2} style = {styles.title}>{item.title}</Text>
                    </View>
                    <View style = {styles.descContainer}>
                        <Text style = {styles.subtitle}>{item.description}</Text>
                    </View>
                    <View style = {styles.dataContainer}>

                        <View style = {styles.detailContainer}>
                            <Text style = {styles.key}>Price:</Text>
                            <Text style = {styles.value}>{item.price}</Text>
                        </View>
                        <View style = {styles.detailContainer}>
                            <Text style = {styles.key}>Publisher:</Text>
                            <Text style = {styles.value}>{item.publisher}</Text>
                        </View>
                        <View style = {styles.detailContainer}>
                            <Text style = {styles.key}>Release Date:</Text>
                            <Text style = {styles.value}>{item.release_date}</Text>
                        </View>
                    </View>

                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#1F1C2C',
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
        width:"100%",
    },
    detailContainer: {
        marginBottom: 5,
        flexDirection: "row",
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#48BBEC'
    },
    subtitle: {
        fontSize: 16,
        color: '#ffffff'
    },
    key: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
        width: "40%"
    },
    value: {
        fontSize: 16,
        color: '#ffffff',
        width: "60%",
        alignSelf:"flex-start"
    },
    rowContainer: {
        flexDirection: 'column',
        padding: 10
    },
});
