import { ScrollView, Text, View } from 'react-native';

import EditScreenInfo from '../../components/edit-screen-info';
import Home from '~/components/Home';

export default function TabOneScreen() {
  return (
    <ScrollView>
      <Home />
    </ScrollView>
  );
}

const styles = {
  container: `items-center flex-1 justify-center`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold`,
};
