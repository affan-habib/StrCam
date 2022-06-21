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
import { useToast } from "react-native-toast-notifications";
import Pagination from '../components/Pagination';
import { useNavigation } from '@react-navigation/native';

const Gallery = ({navigation}) => {
  const toast = useToast();
  const [nodes, setNodes] = useState([]);
  const [detailViewVisible, setDetailViewVisibility] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    checkPermission()
      .then(() => {
        getPhotos()
      })
      // .then(()=>{
      //   toast.show("Test Notification", {type: "normal"});
      // })
  },[])

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
      first: 40
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
            )
        }
        <Pagination/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Gallery;