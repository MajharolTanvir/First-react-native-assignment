import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import logo from './assets/Oval.png'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "justify",
        gap: 30
      }}>
        <View style={{
          borderRadius: 50,
          margin: "auto",
        }}>
          <Image style={{ width: 70, height: 70 }} source={logo} alt='logo' />
        </View>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Majharul Tanvir</Text>
          <Text style={{ color: "#3092FF", paddingVertical: 2 }}>@MajharolTanvir</Text>
          <Text style={{ color: "#BDC5D3"}}>Joined 25 Apr 2022</Text>
        </View>
      </View>
      <View>
        <Text style={{ paddingVertical: 20, textAlign: "justify", fontSize: 15, color: "#BDC5D3", }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, asperiores. Tempora sit architecto molestiae impedit debitis optio, repudiandae nesciunt voluptates vero eaque vitae quia ipsam minus cum possimus numquam. Ullam.</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: "row", justifyContent: "space-around", paddingVertical: 20, backgroundColor: "#F6F8FF", borderRadius: 15 }}>
        <View style={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>
          <Text style={{ fontSize: 15, color: "#BDC5D3", }}>Repos</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 24, paddingVertical: 7 }}>81</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>
          <Text style={{ fontSize: 15, color: "#BDC5D3", }}>Followers</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 24, paddingVertical: 7 }}>30</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "column", alignItems: 'center' }}>
          <Text style={{ fontSize: 15, color: "#BDC5D3" }}>Following</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 24, paddingVertical: 7 }}>10</Text>
        </View>
      </View>
      <View style={{ marginVertical: 20 }}>

        <View style={{ display: "flex", flexDirection: "row", gap: 20, paddingVertical: 10 }}>
          <Image style={{
            width: 20,
            height: 20,
            objectFit: "contain",
          }} source={require('./assets/003-pin.png')} />
          <Text style={{
            fontSize: 15, color: "#BDC5D3",
            fontWeight: "bold",
          }}>Rangamati, Bangladesh</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row", gap: 20, paddingVertical: 10 }}>
          <Image style={{
            width: 20,
            height: 20,
            objectFit: "contain",
          }} source={require('./assets/002-url.png')} />
          <Text style={{
            fontSize: 15, color: "#BDC5D3",
            fontWeight: "bold",
          }}>https://majharoltanvir.com</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row", gap: 20, paddingVertical: 10 }}>
          <Image style={{
            width: 20,
            height: 20,
            objectFit: "contain",
          }} source={require('./assets/004-twitter.png')} />
          <Text style={{
            fontSize: 15, color: "#BDC5D3",
            fontWeight: "bold",
          }}>MajharolTanvir</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row", gap: 20, paddingVertical: 10 }}>
          <Image style={{
            width: 20,
            height: 20,
            objectFit: "contain",
          }} source={require('./assets/001-office-building.png')} />
          <Text style={{
            fontSize: 15, color: "#BDC5D3",
            fontWeight: "bold",
          }}>@github</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingBottom: 40,
    paddingRight: 20,
    paddingLeft: 20
  },
});
