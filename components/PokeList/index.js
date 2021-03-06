//import PoreCompoent for preventing unnecesary updates. 
import React, { PureComponent } from 'react';
//import your components from react-native 
import { View,Image,  FlatList, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
//import styles for your component
import styles from './styles';

import PokeCard from '../PokeCard';

export default class PokeList extends PureComponent {
    //Define your state for your component. 
    state = {
        //Assing a array to your pokeList state
        pokeList: [],
        //Have a loading state where when data retrieve returns data. 
        loading: true
    }
    //Define your componentDidMount lifecycle hook that will retrieve data.
    //Also have the async keyword to indicate that it is asynchronous. 
    async componentDidMount() {
        //Have a try and catch block for catching errors.
        try {
            //Assign the promise unresolved first then get the data using the json method. 
            const pokemonApiCall = await fetch('https://pokeapi.co/api/v2/pokemon/');
            const pokemon = await pokemonApiCall.json();
            this.setState({pokeList: pokemon.results, loading: false});
        } catch(err) {
            console.log("Error fetching data-----------", err);
        }
    }
    //Define your renderItem method the callback for the FlatList for rendering each item, and pass data as a argument. 
    /*renderItem(data) {
        return <TouchableOpacity style={{backgroundColor: 'transparent'}}>
                    <View  style={styles.listItemContainer}>
                        <Text style={styles.pokeItemHeader}>{data.item.name}</Text>
                        <Image source={{uri: 'https://res.cloudinary.com/aa1997/image/upload/v1535930682/pokeball-image.jpg'}} 
                                style={styles.pokeImage}/>
                    </View>
                </TouchableOpacity>

    }*/
    renderItem(data) {
        return <PokeCard {...data.item} />
      }
    render() {
        //Destruct pokeList and Loading from state.
        const { pokeList, loading } = this.state;
        //If laoding to false, return a FlatList which will have data, rednerItem, and keyExtractor props used.
        //Data contains the data being  mapped over.
        //RenderItem a callback return UI for each item.
        //keyExtractor used for giving a unique identifier for each item.
        if(!loading) {
            return <FlatList 
                    data={pokeList}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.name} 
                    />
        } else {
            return <ActivityIndicator />
        }
    }
}