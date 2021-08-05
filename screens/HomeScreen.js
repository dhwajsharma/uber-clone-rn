import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: "contain"
                    }}
                    source={{
                        uri: "https://imgr.search.brave.com/vzw4frSVUG0nSyjZIR2yb5e5C7BfwGFInL9ZrkjSLT8/fit/700/261/no/1/aHR0cHM6Ly93d3cu/c21hbGxiaXpkYWls/eS5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTgvMTAvdWJl/ci1taW4ucG5n"
                    }}
                />

                <NavOptions />

            </View>
        </SafeAreaView>
    )
}

export default HomeScreen
