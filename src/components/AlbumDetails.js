import React from 'react';
import { Text, Image, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetails = ({ album }) => {
    const { thumbnail_image, title, artist } = album;
    const { headerContentStyle, thumbnailStyles } = styles;
    return (
        <Card key={album.url} >
            <CardSection>
                <View>
                    <Image 
                        style={thumbnailStyles}
                        source={{ uri: thumbnail_image, width: 30, height: 30 }} 
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text> Album: {title} </Text>
                    <Text> Artist: {artist} </Text>
                </View>
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
    }
}
export default AlbumDetails;
