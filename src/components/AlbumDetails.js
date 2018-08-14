import React from 'react';
import { Text, Image, View, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetails = ({ album }) => {
    const { thumbnail_image, 
            title, 
            artist, 
            image,
            url } = album;
    const { 
        headerContentStyle, 
        thumbnailStyles,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
        } = styles;

    const handleOnPress = link => {
        Linking.openURL(link);
    };

    return (
        <Card key={album.url} >
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                        style={thumbnailStyles}
                        source={{ uri: thumbnail_image, width: 30, height: 30 }} 
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}> Album: {title} </Text>
                    <Text> Artist: {artist} </Text>
                </View>
            </CardSection>

            <CardSection> 
                <Image style={imageStyle} source={{ uri: image }} /> 
            </CardSection>

            <CardSection>
                <Button handleOnPress={() => handleOnPress(url)} >
                    Buy now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyles: {
        height: 50,
        width: 50    
    },
    headerTextStyle: {
        fontSize: 18,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};
export default AlbumDetails;
