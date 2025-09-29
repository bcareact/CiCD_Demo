// import React, {useState, useRef} from 'react';
// import {
//   View,
//   StyleSheet,
//   ActivityIndicator,
//   Text,
//   TouchableOpacity,
// } from 'react-native';
// import Video from 'react-native-video';

// const VideoPlayer = () => {
//   const videoRef = useRef(null);
//   const [paused, setPaused] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);

//   // તમારું HLS URL
//   const videoUrl = 'http://content.jwplatform.com/manifests/vM7nH0Kl.m3u8';

//   const handleLoadStart = () => {
//     setLoading(true);
//     setError(null);
//   };

//   const handleLoad = (data) => {
//     setLoading(false);
//     setDuration(data.duration);
//     console.log('Video loaded successfully!');
//   };

//   const handleError = (error) => {
//     setLoading(false);
//     setError('Video load thayu nathi. Internet check karo.');
//     console.log('Video error:', error);
//   };

//   const handleProgress = (data) => {
//     setCurrentTime(data.currentTime);
//   };

//   const togglePlayPause = () => {
//     setPaused(!paused);
//   };

//   const handleEnd = () => {
//     setPaused(true);
//     setCurrentTime(0);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>મારો Video Player</Text>
      
//       {/* Video Container */}
//       <View style={styles.videoContainer}>
//         <Video
//           ref={videoRef}
//           source={{uri: videoUrl}}
//           style={styles.video}
//           paused={paused}
//           controls={false} // અમે આપણા કંટ્રોલ્સ બનાવીશું
//           resizeMode="contain"
//           onLoadStart={handleLoadStart}
//           onLoad={handleLoad}
//           onError={handleError}
//           onProgress={handleProgress}
//           onEnd={handleEnd}
//           ignoreSilentSwitch="ignore"
//           playInBackground={false}
//           playWhenInactive={false}
//         />

//         {/* Loading Indicator */}
//         {loading && (
//           <View style={styles.loadingContainer}>
//             <ActivityIndicator size="large" color="#FFFFFF" />
//             <Text style={styles.loadingText}>Video load thai rahyu chhe...</Text>
//           </View>
//         )}

//         {/* Error Message */}
//         {error && (
//           <View style={styles.errorContainer}>
//             <Text style={styles.errorText}>{error}</Text>
//             <TouchableOpacity 
//               style={styles.retryButton}
//               onPress={() => {
//                 setError(null);
//                 setLoading(true);
//               }}>
//               <Text style={styles.retryText}>ફરી પ્રયત્ન કરો</Text>
//             </TouchableOpacity>
//           </View>
//         )}

//         {/* Custom Controls */}
//         {!loading && !error && (
//           <TouchableOpacity 
//             style={styles.controlOverlay}
//             onPress={togglePlayPause}>
//             <View style={styles.controlCenter}>
//               <Text style={styles.controlIcon}>
//                 {paused ? '▶️' : '⏸️'}
//               </Text>
//             </View>
//           </TouchableOpacity>
//         )}
//       </View>

//       {/* Video Info */}
//       <View style={styles.infoContainer}>
//         <Text style={styles.infoText}>
//           Status: {loading ? 'Loading...' : error ? 'Error' : paused ? 'Paused' : 'Playing'}
//         </Text>
//         <Text style={styles.infoText}>
//           Time: {Math.floor(currentTime)}s / {Math.floor(duration)}s
//         </Text>
//       </View>

//       {/* Control Buttons */}
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity 
//           style={styles.button}
//           onPress={togglePlayPause}>
//           <Text style={styles.buttonText}>
//             {paused ? 'Play' : 'Pause'}
//           </Text>
//         </TouchableOpacity>

//         <TouchableOpacity 
//           style={styles.button}
//           onPress={() => {
//             if (videoRef.current) {
//               videoRef.current.seek(0);
//               setPaused(true);
//             }
//           }}>
//           <Text style={styles.buttonText}>Restart</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     padding: 10,
//   },
//   title: {
//     color: '#FFF',
//     fontSize: 20,
//     textAlign: 'center',
//     marginBottom: 10,
//     fontWeight: 'bold',
//   },
//   videoContainer: {
//     width: '100%',
//     height: 300,
//     backgroundColor: '#000',
//     borderRadius: 10,
//     overflow: 'hidden',
//     position: 'relative',
//   },
//   video: {
//     width: '100%',
//     height: '100%',
//   },
//   loadingContainer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   loadingText: {
//     color: '#FFF',
//     marginTop: 10,
//   },
//   errorContainer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.8)',
//   },
//   errorText: {
//     color: '#FF6B6B',
//     fontSize: 16,
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   retryButton: {
//     backgroundColor: '#4ECDC4',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 5,
//   },
//   retryText: {
//     color: '#FFF',
//     fontWeight: 'bold',
//   },
//   controlOverlay: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   controlCenter: {
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   controlIcon: {
//     fontSize: 30,
//   },
//   infoContainer: {
//     marginTop: 10,
//     padding: 10,
//     backgroundColor: '#1A1A1A',
//     borderRadius: 5,
//   },
//   infoText: {
//     color: '#FFF',
//     fontSize: 12,
//     marginBottom: 5,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginTop: 20,
//   },
//   button: {
//     backgroundColor: '#4ECDC4',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 5,
//     minWidth: 100,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#FFF',
//     fontWeight: 'bold',
//   },
// });

// export default VideoPlayer;












import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // તમારું HLS URL
  const videoUrl = 'http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8';

  const handleLoadStart = () => {
    setLoading(true);
    setError(null);
  };

  const handleLoad = (data) => {
    setLoading(false);
    setDuration(data.duration);
    console.log('Video loaded successfully!');
  };

  const handleError = (error) => {
    setLoading(false);
    setError('Video load thayu nathi. Internet check karo.');
    console.log('Video error:', error);
  };

  const handleProgress = (data) => {
    setCurrentTime(data.currentTime);
  };

  const togglePlayPause = () => {
    setPaused(!paused);
  };

  const handleEnd = () => {
    setPaused(true);
    setCurrentTime(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>મારો Video Player</Text>
      
      {/* Video Container */}
      <View style={styles.videoContainer}>
        <Video
          ref={videoRef}
          source={{uri: videoUrl}}
          style={styles.video}
          paused={paused}
          controls={false} // અમે આપણા કંટ્રોલ્સ બનાવીશું
          resizeMode="contain"
          onLoadStart={handleLoadStart}
          onLoad={handleLoad}
          onError={handleError}
          onProgress={handleProgress}
          onEnd={handleEnd}
          ignoreSilentSwitch="ignore"
          playInBackground={false}
          playWhenInactive={false}
        />

        {/* Loading Indicator */}
        {loading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#FFFFFF" />
            <Text style={styles.loadingText}>Video load thai rahyu chhe...</Text>
          </View>
        )}

        {/* Error Message */}
        {error && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
            <TouchableOpacity 
              style={styles.retryButton}
              onPress={() => {
                setError(null);
                setLoading(true);
              }}>
              <Text style={styles.retryText}>ફરી પ્રયત્ન કરો</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Custom Controls */}
        {!loading && !error && (
          <TouchableOpacity 
            style={styles.controlOverlay}
            onPress={togglePlayPause}>
            <View style={styles.controlCenter}>
              <Text style={styles.controlIcon}>
                {paused ? '▶️' : '⏸️'}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>

      {/* Video Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          Status: {loading ? 'Loading...' : error ? 'Error' : paused ? 'Paused' : 'Playing'}
        </Text>
        <Text style={styles.infoText}>
          Time: {Math.floor(currentTime)}s / {Math.floor(duration)}s
        </Text>
      </View>

      {/* Control Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={togglePlayPause}>
          <Text style={styles.buttonText}>
            {paused ? 'Play' : 'Pause'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => {
            if (videoRef.current) {
              videoRef.current.seek(0);
              setPaused(true);
            }
          }}>
          <Text style={styles.buttonText}>Restart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  videoContainer: {
    width: '100%',
    height: 300,
    backgroundColor: '#000',
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  loadingText: {
    color: '#FFF',
    marginTop: 10,
  },
  errorContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  errorText: {
    color: '#FF6B6B',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: '#4ECDC4',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  retryText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  controlOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlCenter: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlIcon: {
    fontSize: 30,
  },
  infoContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#1A1A1A',
    borderRadius: 5,
  },
  infoText: {
    color: '#FFF',
    fontSize: 12,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#4ECDC4',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    minWidth: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default VideoPlayer;