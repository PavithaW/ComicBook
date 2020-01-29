import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight, TextInput, FlatList, ActivityIndicator } from 'react-native';

//var newData = [];
//var isTyping = true;
var textToSearch = '';
var comicResponseArray = [];
export default class Search extends React.Component {

    state = {
        searchString: '',
        isLoading: true,
        dataSource: [],
        isSubmitPress: false
    }

    componentDidMount() {
        return fetch('https://api.shortboxed.com/comics/v1/new')
            .then(response => response.json())
            .then(responseJson => {
                this.setState(
                    {
                        isLoading: false,
                    },
                    function () {
                        comicResponseArray = responseJson.comics;
                        console.log(this.comicResponseArray);
                    }
                );
            })
            .catch(error => {
                console.error(error);
            });

    }

    _searchFilterFunction(text) {
        var newData = [];
        textToSearch = text;

        if (text.length > 2) {
            newData = comicResponseArray.filter(function (item) {
                const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            newData = newData.slice(0, 3);
        }
        this.setState({
            dataSource: newData,
            searchString: text,
        })
    }
    _handleTextSubmit = event => {
        var newData = [];

        if (textToSearch.length > 2) {
            newData = comicResponseArray.filter(function (item) {
                const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
                const textData = textToSearch.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            newData = newData.slice(0, 10);
        }
        this.setState({
            dataSource: newData,
            searchString: textToSearch,
        });

    }
    _onPressItem = (index, item) => {
        this.props.navigation.navigate('Details', { item: item });
    }

    _renderItem = ({ item, index }) => (
        <ListItem
            item={item}
            index={index}
            onPressItem={this._onPressItem}
        />
    );
    _keyExtractor = (item, index) => index.toString();

    ListViewItemSeparator = () => {
        return (
            <View style={styles.separator} />
        );
    };

    render() {
        const spinner = this.state.isLoading ?
            <ActivityIndicator size='large' /> : null;
        return (
            <View style={styles.itemContainer}>
                <Text style={styles.description}>Search for Comic Book</Text>
                <View style={styles.flowRight}>
                    <TextInput
                        placeholder='Search'
                        underlineColorAndroid={'transparent'}
                        style={styles.searchInput}
                        value={this.state.searchString}
                        autoFocus={true}
                        onChangeText={text => this._searchFilterFunction(text)}
                        onSubmitEditing={(e) => this._handleTextSubmit(e)} />

                </View>
                <FlatList
                    data={this.state.dataSource}
                    ItemSeparatorComponent={this.ListViewItemSeparator}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                />
                {spinner}
            </View>
        );
    }
}
class ListItem extends React.PureComponent {
    _onPress = () => {
        this.props.onPressItem(this.props.index, this.props.item);
    }

    render() {
        const item = this.props.item;
        return (
            <TouchableHighlight
                onPress={this._onPress}
                underlayColor='#dddddd'>
                <View>
                    <View style={styles.rowContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.resultText}
                                numberOfLines={1}>{item.title}</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 48,
        color: '#fff'
    },
    itemContainer: {
        backgroundColor: '#1F1C2C',
        width: '100%',
        height: '100%',
        padding: 30,
        flex: 1,
        alignItems: 'center'
    },
    description: {
        fontSize: 18,
        textAlign: 'center',
        color: '#48BBEC',
        marginTop: 5,
    },
    flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        marginTop: 30,
    },
    searchInput: {
        height: 36,
        padding: 4,
        marginRight: 5,
        flexGrow: 1,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC',
    },
    resultText: {
        color: "#e7ebc3",
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
        backgroundColor: '#dddddd'
    },

});
