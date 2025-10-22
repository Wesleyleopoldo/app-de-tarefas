import { View } from 'react-native';
import Header from '@/components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {

  return (
    <SafeAreaView>
      <Header />
      <View>

      </View>
    </SafeAreaView>
  );
}
