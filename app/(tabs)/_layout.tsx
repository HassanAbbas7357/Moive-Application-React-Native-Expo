import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { Tabs } from 'expo-router';
import { Image, ImageBackground, Text, View } from 'react-native';

const TabIcon = ({ title, icons, focused }: any) => {
  if (focused) {
    return (
      <>
        <ImageBackground
          source={images.highlight}
          className='flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden'
        >
          <Image source={icons} tintColor='#151312' className='size-5' />
          <Text className='text-secondary text-base font-semibold ml-2'>{title}</Text>
        </ImageBackground>
      </>
    );
  } else {
    return (
      <View className='size-full justify-center items-center mt-4 rounded-full '>
        <Image source={icons} className='size-5 ' tintColor='A8B5DB' />
      </View>
    );
  }
};

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarStyle: {
          backgroundColor: '#0f0D23',
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 32,
          height: 52,
          position: 'absolute',
          overflow: 'hidden',
          borderWidth: 1,
          borderColor: '0f0d23',
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon title='Home' icons={icons.home} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name='saved'
        options={{
          title: 'Saved',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon title='Saved' icons={icons.save} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          title: 'search',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon title='search' icons={icons.search} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon title='Profile' icons={icons.person} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}

// import { icons } from "@/constants/icons";
// import { images } from "@/constants/images";
// import { Tabs } from "expo-router";
// import { Image, ImageBackground,Text } from "react-native";

// export default function TabsLayout() {
//   return (
//     <Tabs>
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: "Home",
//           headerShown: false,
//           tabBarIcon: ({ focused }) => (
//             <>
//               <ImageBackground
//                 source={images.highlight}
//                 className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
//               >
//                 <Image
//                   source={icons.home}
//                   tintColor="#151312"
//                   className="size-5"
//                 />
//                 <Text className="text-secondary text-base font-semibold ml-2">Home</Text>
//               </ImageBackground>
//             </>
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="saved"
//         options={{ title: "Saved", headerShown: false }}
//       />
//       <Tabs.Screen
//         name="search"
//         options={{ title: "search", headerShown: false }}
//       />
//       <Tabs.Screen
//         name="profile"
//         options={{ title: "Profile", headerShown: false }}
//       />
//     </Tabs>
//   );
// }
