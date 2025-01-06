import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useAssets } from 'expo-asset'
import { ResizeMode, Video } from 'expo-av'
import { Link } from 'expo-router'
import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors'

const Page = () => {
  const [assets] = useAssets([require('@/assets/videos/intro.mp4')])
  return (
    <View style={style.container}>
      {
        assets &&
        <Video
          resizeMode={ResizeMode.COVER}
          isMuted
          isLooping
          shouldPlay
          source={{ uri: assets[0].uri }} style={style.video} />
      }
      <View style={{ marginTop: 80, padding: 20 }}>
        <Text style={style.text}>Transform how your money works!</Text>
      </View>
      <View style={style.buttons}>
        <Link
          href={'/login'}
          asChild
          style={[defaultStyles.pillButton, { backgroundColor: Colors.dark, flex: 1 }]}
        >
          <TouchableOpacity>
            <Text style={{ color: 'white',fontSize: 22, fontWeight: '500' }}>Login</Text>
          </TouchableOpacity>
        </Link>
        <Link
          href={'/signup'}
          asChild
          style={[defaultStyles.pillButton, { backgroundColor: '#fff', flex: 1 }]}
        >
          <TouchableOpacity>
            <Text style={{fontSize: 22, fontWeight: '500' }}>Sign up</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  text: {
    fontSize: 36,
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 700
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    marginBottom: 60,
    paddingHorizontal: 20
  }
})
export default Page