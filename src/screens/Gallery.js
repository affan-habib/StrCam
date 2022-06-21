import React, { useEffect, useState } from 'react';
import {
  Image,
  PermissionsAndroid,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';

import CameraRoll from '@react-native-community/cameraroll';
import Swiper from 'react-native-swiper';
import IconButton from '../components/IconButton';
import globalStyles from '../styles/globalStyles';

const Gallery = () => {

  const [nodes, setNodes] = useState([]);
  const [detailViewVisible, setDetailViewVisibility] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    checkPermission()
      .then(() => {
        getPhotos()
      })
  }, [])

  const checkPermission = async () => {
    const hasPermission = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);

    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, {
      title: "StraTiv Gallery",
      message: "StrCam need access your photos",
      buttonPositive: "OK",
    })

    return status === 'granted';
  }

  const getPhotos = async () => {
    const photos = await CameraRoll.getPhotos({
      first: 4
    })

    setNodes(photos.edges.map(edge => edge.node))
  }

  return (
    <SafeAreaView>
      <ScrollView>
        {
          detailViewVisible
            ? (
              <Swiper
                loop={false}
                index={selectedIndex}
              >
                {
                  nodes.map(
                    (node, index) => (
                      <View
                        key={index}
                        style={{
                          flex: 1,
                          alignItems: 'center',
                          justifyContent: 'center',
                          // backgroundColor: '#333',
                        }}
                      >
                        <Image
                          style={{
                            width: "100%",
                            height: "50%",
                            flex: 1,
                          }}
                          resizeMode="contain"
                          source={{
                            uri: node.image.uri
                          }}
                        />
                        <View
                          style={{
                            position: 'absolute',
                            top: 50,
                            right: 10,
                          }}
                        >
                          <IconButton
                            name="close"
                            color="white"
                            onPressFunction={() => {
                              setDetailViewVisibility(false)
                            }} />

                        </View>
                      </View>
                    )
                  )
                }
              </Swiper>
            )
            : (
              <View>

                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    margin: 10,
                  }}
                >
                  {
                    nodes.map(
                      (node, index) => (
                        <TouchableOpacity
                          key={index}
                          style={{
                            minHeight: "50%",
                            minWidth: 100,
                            maxWidth: "50%",
                            flex: 1,
                            margin: 10,
                          }}
                          onPress={() => {
                            setDetailViewVisibility(true)
                            setSelectedIndex(index)
                          }}
                        >
                          <Image
                            style={{
                              height: 100,
                              borderRadius: 5,
                              minWidth: 100,
                              flex: 1
                            }}
                            source={{
                              uri: node.image.uri
                            }}
                          />
                        </TouchableOpacity>
                      )
                    )
                  }

                </View>

                <View style={globalStyles.pagination}>
                  <IconButton
                    name="arrow-back"
                    color="white"
                    bgcolor="#0e9594"
                    onPressFunction={() => {
                      // setDetailViewVisibility(false)
                    }}>
                    {/* <Text>prev</Text> */}
                  </IconButton>
                  <IconButton
                    name="arrow-forward"
                    color="white"
                    bgcolor="#0e9594"
                    onPressFunction={() => {
                      // setDetailViewVisibility(false)
                    }}>
                    {/* <Text>close</Text> */}
                  </IconButton>
                  <IconButton
                    name="refresh"
                    color="white"
                    bgcolor="#0e9594"
                    onPressFunction={getPhotos}>
                    {/* <Text>close</Text> */}
                  </IconButton>
                </View>
              </View>
            )
        }
      </ScrollView>
    </SafeAreaView>
  );
};

export default Gallery;