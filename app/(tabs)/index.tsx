import { ActivityIndicator, Image, ScrollView, View, Text, FlatList } from 'react-native';
import '../global.css'; // path must match metro.config.js input
import { images } from '@/constants/images';
import { icons } from '@/constants/icons';
import Searchbar from '@/components/searchbar';
import { useRouter } from 'expo-router';
import useFetch from '@/services/useFetch';
import { fetchMovies } from '@/services/api';
import MovieCard from '@/components/MovieCard';
import { getTrendingMovies } from '@/services/appwrite';
import TrendingCard from '@/components/TrendingCard';

export default function App() {
  const router = useRouter();
  const {
    data: trendingMovies,
    loading: trendingLoading,
    error: trendingError,
  } = useFetch(() => getTrendingMovies());

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: '' }));

  return (
    <View className='flex-1 bg-primary'>
      <Image className='absolute w-full z-0' source={images.bg} />

      <ScrollView
        className='flex-1 p-4'
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: '100%',
          paddingBottom: 10,
        }}
      >
        <Image className='h-10 w-12 mt-20 mb-5 mx-auto' source={icons.logo} />

        {moviesLoading || trendingLoading ? (
          <ActivityIndicator size='large' color='#0000ff' className='mt-10 self-center' />
        ) : moviesError || trendingError ? (
          <Text>Error: {moviesError?.message || trendingError?.message}</Text>
        ) : (
          <View className='flex-1 mt-5'>
            <Searchbar
              onPress={() => {
                router.push('/search');
              }}
              placeholder='Search for a movie'
            />

            {trendingMovies && (
              <View className='mt-10'>
                <Text className='text-lg text-white font-bold mb-3'>TrendingMovies</Text>
                <FlatList
                  className='mb-4 mt-3'
                  data={trendingMovies}
                  renderItem={({ item, index }) => <TrendingCard movie={item} index={index} />}
                  keyExtractor={item => item.movie_id.toString()}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
              </View>
            )}
            <>
              <Text className='text-lg text-white font-bold mt-5 mb-3'>Latest Movies</Text>

              <FlatList
                data={movies}
                renderItem={({ item }) => <MovieCard {...item} />}
                keyExtractor={item => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: 'flex-start',
                  gap: 20,
                  paddingRight: 10,
                  marginBottom: 5,
                }}
                className='mt-2 pb-20'
                scrollEnabled={false}
              />
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
