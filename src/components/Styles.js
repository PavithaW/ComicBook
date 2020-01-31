import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    itemContainer: {
        backgroundColor: '#f0edeb',
        width: '100%',
        height: '100%',
        padding: 30,
        flex: 1,
        alignItems: 'center'
    },
    description: {
        fontSize: 20,
        textAlign: 'center',
        color: '#4a4948',
        marginTop: 5,
        fontWeight: 'bold'
    },
    flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        marginTop: 30,
        borderWidth: 1,
        borderColor: '#4a4948',
        borderRadius: 8,
        paddingLeft: 5,
        marginBottom: 10
    },
    searchInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        flexGrow: 1,
        fontSize: 18,
        color: '#4a4948',
    },
    resultText: {
        color: "#4a4948",
        fontSize: 14,
        textAlign: 'left',
    },
    rowContainer: {
        color: "#e7ebc3",
        flexDirection: 'row',
    },
    textContainer: {
        width: "100%",
        height: 50,
        alignSelf: "center",
        justifyContent: "center"

    },
    separator: {
        height: 1,
        backgroundColor: '#4a4948'
    },
    belowText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4a4948',
        marginTop: 100,
        textAlign: "center",
        alignSelf: "center",
    },
    lineSeparator: {
        height: 2,
        width: "60%",
        backgroundColor: "#4a4948",
        marginTop: 5
    }

});
