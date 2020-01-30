import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight, TextInput, FlatList, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import styles from '../Styles'

var comicResponseArray = [];

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: '',
            isLoading: true,
            dataSource: [],
            message: ''
        }
        this._handleOnSearchTextChange = this._handleOnSearchTextChange.bind(this)
    }

    componentDidMount = () => {
        this._fetchData();
    }

    _fetchData = () => {
        return fetch('https://api.shortboxed.com/comics/v1/new')
            .then(response => response.json())
            .then(responseJson => {
                this.setState(
                    {
                        isLoading: false,
                    },
                    function () {
                        comicResponseArray = responseJson.comics;
                    }
                );
            })
            .catch(error => {
                console.error(error);
            });
    }

    _handleOnSearchTextChange = async event => {
        await this.setState({
            searchString: event
        });

        await this.searchFilterFunction();
    }

    _handleOnSearchTextChange = async event => {
        await this.setState({
            searchString: event
        });

        await this._searchFilterFunction(3);
    }
    _handleOnSubmit = () => {
        this._searchFilterFunction(10);
    }
    _searchFilterFunction = (count) => {
        const {
            searchString,
        } = this.state

        let newData = [];
        /* Lunar is the best third party library for full textsearching. But here I use normal source due to test requirements */
        if (searchString.length > 2) {
            newData = comicResponseArray.filter(function (item) {
                const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
                const textData = searchString.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            if (newData.length == 0) {
                this.setState({
                    message: 'No Result Found.',
                });
            } else {
                newData = newData.slice(0, count);
                this.setState({
                    message: '',
                    dataSource: newData
                });
            }
        }
    }
    _onPressItem = (index, item) => {
        this.props.navigation.navigate('BookDetails', { item: item });
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
                <Text style={styles.description}>Search for a Comic Book</Text>
                <View style={styles.flowRight}>
                    <Icon name='search' size={30} color='#4a4948' />
                    <TextInput
                        placeholder='Sreach'
                        placeholderTextColor='#4a4948'
                        underlineColorAndroid={'transparent'}
                        style={styles.searchInput}
                        value={this.state.searchString}
                        autoFocus={true}
                        autoCorrect={false}
                        ref={ref => { this.nameInput = ref }}
                        onChangeText={this._handleOnSearchTextChange}
                        onSubmitEditing={(e) => this._handleOnSubmit(e)} />
                </View>
                <FlatList
                    data={this.state.dataSource}
                    ItemSeparatorComponent={this.ListViewItemSeparator}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                />
                <Text style={styles.belowText}>{this.state.message}</Text>
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