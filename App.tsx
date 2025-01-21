import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topArea}>
        <Image source={require('./assets/6c7.jpg')} style={styles.profileImage}/>
        <View style={styles.itemBar}>
          <TouchableOpacity style={styles.topBtn}><Text style={{color: "white"}}>a</Text></TouchableOpacity>
          <TouchableOpacity style={styles.topBtn}><Text style={{color: "white"}}>b</Text></TouchableOpacity>
          <TouchableOpacity style={styles.topBtn}><Text style={{color: "white"}}>c</Text></TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomArea}>
        <Text>Bottom Area</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex", 
    flex: 1,
    flexDirection: "column", 
    margin: 0,
  },
  topArea: {
    flex: 1, 
    backgroundColor: "purple",
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1
  },
  bottomArea: {
    flex: 4, 
    backgroundColor: "#111214",
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0
  },
  profileImage: {
    aspectRatio: 1,
    height: 100,
    width: 100,
    borderRadius: 100,
    position: 'absolute',
    left: 20,
    bottom: -40,
    borderStyle: "solid",
    borderColor: "#111214",
    borderWidth: 6,
  },
  itemBar: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    margin: 5,
  },
  topBtn: {
    margin: 5,
    opacity: 0.8,
    backgroundColor: "#111214",
    borderRadius: 100,
    height: 25,
    width: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
