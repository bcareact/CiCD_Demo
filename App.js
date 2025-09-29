
// import React from 'react';
// import {View, StyleSheet, Text} from 'react-native';
// import Video from 'react-native-video';

// const AdaptiveVideoPlayer = ({videoUrl}) => {
//   return (
//     <View style={styles.container}>
//       <Video
//         source={{uri: "http://content.jwplatform.com/manifests/vM7nH0Kl.m3u8"}} // HLS URL (.m3u8)
//         style={styles.video}
//         controls={true}
//         resizeMode="contain"
//         onLoadStart={() => console.log('Loading started')}
//         onLoad={({duration, naturalSize}) => 
//           console.log('Video loaded:', naturalSize)
//         }
//         onBandwidthUpdate={(bandwidth) => 
//           console.log('Current bandwidth:', bandwidth)
//         }
//         maxBitRate={2000000} // Maximum bitrate (2 Mbps)
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   video: {
//     width: '100%',
//     height: 300,
//   },
// });

// export default AdaptiveVideoPlayer;






// import React from 'react';
// import {SafeAreaView, StatusBar} from 'react-native';
// import VideoPlayer from './src/screens/VideoPlayer';

// const App = () => {
//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
//       <StatusBar barStyle="light-content" />
//       <VideoPlayer />
//     </SafeAreaView>
//   );
// };

// export default App;





// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { NavigationContainer } from '@react-navigation/native'
// import Home from './src/screens/Home'
// const App = () => {

//   const Stack = createNativeStackNavigator()
//   return (
//    <NavigationContainer>
//     <Stack.Navigator>
//       <Stack.Screen component={Home} name='home'/>

//     </Stack.Navigator>
//    </NavigationContainer>
//   )
// }

// export default App

// const styles = StyleSheet.create({})




import React, { useEffect } from 'react';
import * as BootSplash from 'react-native-bootsplash';
import { StyleSheet, Text, View } from 'react-native'
import ProductPagination from './src/screens/ProductPagination';
import {Provider} from 'react-redux'
import store from './src/redux/store';


export default function App() {
  useEffect(() => {
    // Simulate loading (replace with your actual async logic)
    const prepare = async () => {
      // ... your app init code
      await new Promise(resolve => setTimeout(resolve, 2000)); // Example delay
    };

    prepare().then(() => {
      BootSplash.hide({ fade: true }); // Optional: fade animation
    });
  }, []);

  return (
    // Your app JSX
    <Provider store={store}>
      <View style={Styles.consteainer}>
        <ProductPagination />
      </View>
    </Provider>

  );
}


const Styles = StyleSheet.create({
  consteainer: {
    flex: 1,
    backgroundColor: 'white',

  }
}) 
