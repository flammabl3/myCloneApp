import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, FontAwesome ,Entypo,MaterialIcons } from '@expo/vector-icons';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topArea}>
        <Image source={require('./assets/6c7.jpg')} style={styles.profileImage}/>
        <View style={styles.itemBar}>
          <TouchableOpacity style={styles.topBtn}>
          <Entypo name="shop" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.nitroBtn}>
          <MaterialIcons name="discord" size={20} color="white" />
          <Text style={{color: "white",fontSize: 12, marginLeft: 5}}>Nitro</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topBtn}>
          <MaterialIcons name="settings" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomArea}>
        <Text>Bottom Area</Text>
      </View>
      <View style={styles.bottomBar}>
      <TouchableOpacity style={styles.iconContainer} onPress={() => alert("Home clicked!")}>
        <View style={styles.iconWrapper}>
          <MaterialCommunityIcons name="home-modern" size={39} color="#7b7b83" />
          <View style={styles.redbadge}>
            <Text style={styles.badgeText}>482</Text>
          </View>
        </View>
        <Text style={styles.iconLabel}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer} onPress={() => alert("Notifications clicked!")}>
        <View style={styles.iconWrapper}>
          <MaterialCommunityIcons name="bell" size={30} color="#7b7b83" />
          <View style={styles.redbadge}>
            <Text style={styles.badgeText}>3</Text>
          </View>
        </View>
        <Text style={styles.iconLabel}>Notifications</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer} onPress={() => alert("profile clicked!")}>
        <View style={styles.iconWrapper}>
          <Image source={require('./assets/6c7.jpg')} style={styles.profileImageInBar}/>
          <View style={styles.greenbadge} />
        </View>
        <Text style={styles.iconLabel}>You</Text>
      </TouchableOpacity>
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
    aspectRatio:1,
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
    height: 30,
    width: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nitroBtn: {
    margin: 5,
    opacity: 0.8,
    backgroundColor: "#111214",
    borderRadius: 50, // Slightly rounded corners
    height: 30,
    paddingHorizontal: 10, // Adds space on both sides of the content
    display: 'flex',
    flexDirection: 'row', // Ensures icon and text are aligned horizontally
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomBar: {
    flexDirection: 'row',
    backgroundColor: "#2d2d35",
    height: 90,
    justifyContent: 'space-around', // Adds spacing between buttons
    alignItems: 'center',
    paddingHorizontal: 20, // Optional: Adds padding on the sides of the bar
  },
  iconContainer: {
    alignItems: 'center',
    width: 90, // Optional: Ensures consistent width for buttons
  },
  iconWrapper: {
    position: 'relative', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconLabel: {
    fontSize: 12,
    color: '#7b7b83',
    marginTop: 2,
  },
  redbadge: {
    position: 'absolute',
    top: -5, // Adjusted for better placement
    right: -5, // Adjusted for better placement
    backgroundColor: '#f2464a',
    borderRadius: 10,
    height: 16,
    minWidth: 16, // Ensures badge width accommodates text
    paddingHorizontal: 3, // Adds space for larger numbers
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  greenbadge: {
    position: 'absolute',
    bottom: -2,
    right: -5,
    backgroundColor: '#3ba55b',
    borderRadius: 10,
    height: 16,
    minWidth: 16, // Ensures badge width accommodates text
    paddingHorizontal: 3, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImageInBar: {
    width: 35,
    height: 35,
    borderRadius: 17.5, 
    backgroundColor: '#7b7b83', 
  },
});
