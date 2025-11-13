import { View, Text } from 'react-native';
import React from 'react';

const TrendingCard = ({ movie: { movie_id, title, poster_url }, index }: TrendingCardProps) => {
  return (
    <View>
      <Text className='text-white'>TrendingCard</Text>
    </View>
  );
};

export default TrendingCard;
