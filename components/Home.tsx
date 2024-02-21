import { Link } from 'expo-router';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Pressable,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
// import { Button } from 'react-native-paper';
// import { Text } from 'react-native-paper';

const { width } = Dimensions.get('window');

export default function Home() {
  console.log(width);
  return (
    <View>
      <ImageBackground
        className="items-center w-auto  sm:min-h-96 pt-12 pb-12 color-slate-800"
        source={{
          uri: 'https://site.schoolall.io/web/image/website.s_cover_default_image',
        }}
        style={{ justifyContent: 'center' }}>
        <View className="items-center justify-center mx-2 text-wrap">
          <Text className="text-white" style={{ fontSize: 30 }}>
            Welcome
          </Text>
          <View className="gap-2">
            <Text className="text-white" style={{ fontSize: 30 }}>
              Schoolall Academy
            </Text>
            {/* <Text className="text-white" style={{ fontSize: 30 }}>
              Academy
            </Text> */}
          </View>

          <Text className="text-white text-xl text-center pb-12">
            Our institution has been ranked as the top ranking & innovative school in the nation
            wide for its academic prowess and technology driven society.
          </Text>

          <Link href={'/'}>
            <TouchableOpacity className="bg-purple-400 rounded-lg p-2">
              <Text className="text-white text-xl text-center">Contact Us Today To learn More</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ImageBackground>

      <LinearGradient
        style={{ flex: 1 }}
        colors={['#B376EE', '#6AC1ED', '#6AC1ED', 'transparent']}
        start={{ x: 0, y: 0 }}
        end={{ x: 3, y: 2 }}>
        <View className="justify-center lg:gap-16 flex lg:flex-row">
          <View className="items-center">
            <View className="items-center py-8">
              <Text className="text-3xl text-white">12</Text>
              <Text className="text-3xl text-white">Faculties</Text>
            </View>
          </View>
          <View className="items-center py-8">
            <Text className="text-3xl text-white">45</Text>
            <Text className="text-3xl text-white">Nationalities</Text>
          </View>
          <View className="items-center py-8">
            <Text className="text-3xl text-white">8</Text>
            <Text className="text-3xl text-white">Libraries</Text>
          </View>
          <View className="items-center py-8">
            <Text className="text-3xl text-white">16,456</Text>
            <Text className="text-3xl text-white">Students</Text>
          </View>
        </View>
      </LinearGradient>

      <View className="items-center justify-center">
        <Text className="py-4 text-3xl text-center pb-12 lg:text-5xl">About Us</Text>
        <View className="items-center lg:flex-row lg:gap-x-40">
          <Image
            source={require('../assets/images/college_graduate.png')}
            className="rounded-lg flex-initial lg:min-w-64 lg:min-h-96"
            style={{ width: 180, height: 210, padding: 12 }}
          />
          <View className=" lg:flex-initial lg:w-96 mx-2">
            <Text className=" text-3xl pb-4 pt-4 lg:pt-0 ">Driven by Excellence</Text>
            <Text className="text-left lg:text-xl">
              Founded on{' '}
              <Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                Enrollment starts in September
              </Text>
              marks the dawn of a transformative educational era.
              <Text style={{ fontStyle: 'italic', fontWeight: 'bold' }}>
                June 3, 2015, Schoolall Academy
              </Text>{' '}
              for an innovative journey into knowledge and excellence.
            </Text>
            <Text className="text-2xl pb-2 pt-3" style={{}}>
              Principle's Statement Sentence
            </Text>
            <Text className="text-xl">
              Empowering minds, shaping futures – Schoolall Academy is where excellence in education
              meets boundless possibilities.
            </Text>

            <Link href={'/'} className=" m-4">
              <TouchableOpacity className="bg-purple-400 rounded-lg py-4 px-10 mx-2.5 items-center">
                <Text className="text-white text-xl text-center">Discover more</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
}
