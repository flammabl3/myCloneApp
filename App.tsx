import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, FontAwesome ,Entypo,MaterialIcons } from '@expo/vector-icons'; //icon library


export default function App() {
  return (
    //main container
    <View style={styles.container}> 

      {/* top area container done by Harry */}
      <View style={styles.topArea}> 

        <Image source={require('./assets/6c7.jpg')} style={styles.profileImage}/>
        <View style={styles.itemBar}> 

          {/* shop button */}
          <TouchableOpacity style={styles.topBtn}> 
          <Entypo name="shop" size={20} color="white" />
          </TouchableOpacity>
          
          {/* Nitro button */}
          <TouchableOpacity style={styles.nitroBtn}> 
          <MaterialIcons name="discord" size={20} color="white" />
          <Text style={{color: "white",fontSize: 12, marginLeft: 5}}>Nitro</Text>
          </TouchableOpacity>
          
          {/* settings button */}
          <TouchableOpacity style={styles.topBtn}> 
          <MaterialIcons name="settings" size={20} color="white" />
          </TouchableOpacity>

        </View>

      </View>
      
      {/* middle area container yet to be done by AK */}
<<<<<<< Updated upstream
      <View style={styles.middleArea}> 
        <Text>Bottom Area</Text>
=======
      {/* Middle Area */}
      <View style={styles.middleArea}>
        <View style={styles.card}>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>About Me</Text>
            <Text style={styles.cardSubtitle}>
              What can I say, I'm just a cat bro
            </Text>
            <Text style={styles.cardLink}>https://onlydogs.co</Text>
            <Text style={styles.cardTitle2}>Member Since</Text>
            <View style={styles.iconRow}>
              <MaterialCommunityIcons
                name="discord"
                size={18}
                color="#ffffff"
              />
              <Text style={styles.cardSubtitle2}>September 11, 2001</Text>
            </View>
          </View>
        </View>

        {/* Connections card */}
        <View style={styles.card}>
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Connections</Text>
            <View style={styles.connectionsColumn}>
              <View style={styles.connectionItem}>
                <MaterialCommunityIcons
                  name="instagram"
                  size={30}
                  color="#E4405F"
                />
                <Text style={styles.connectionHandle}>Rae Lil Cat </Text>
              </View>
              <View style={styles.connectionItem}>
                <MaterialCommunityIcons
                  name="twitter"
                  size={30}
                  color="#1DA1F2"
                />
                <Text style={styles.connectionHandle}>Rae Lil Cat</Text>
              </View>
            </View>
          </View>
        </View>
>>>>>>> Stashed changes
      </View>

      {/* bottom area container done by Neeraj */}
      <View style={styles.bottomBar}> 

      {/* Home button */}
      <TouchableOpacity style={styles.iconContainer} onPress={() => alert("Home clicked!")}> 
        <View style={styles.iconWrapper}>
          <MaterialCommunityIcons name="home-modern" size={39} color="#7b7b83" />
          <View style={styles.redbadge}>
            <Text style={styles.badgeText}>482</Text>
          </View>
        </View>
        <Text style={styles.iconLabel}>Home</Text>
      </TouchableOpacity>

      {/* Notification button */}
      <TouchableOpacity style={styles.iconContainer} onPress={() => alert("Notifications clicked!")}> 
        <View style={styles.iconWrapper}>
          <MaterialCommunityIcons name="bell" size={30} color="#7b7b83" />
          <View style={styles.redbadge}>
            <Text style={styles.badgeText}>3</Text>
          </View>
        </View>
        <Text style={styles.iconLabel}>Notifications</Text>
      </TouchableOpacity>

      {/* profile button */}
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
  //style for overall container
  container: { 
    display: "flex", 
    flex: 1,
    flexDirection: "column", 
    margin: 0,
  },

  //styling for top area
  topArea: {
    flex: 1, 
    backgroundColor: "purple",
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1
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
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  //styling for middle area yet to be done by AK
  middleArea: {
    flex: 4, 
    backgroundColor: "#111214",
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0
  },

  //styling for bottom area done by Neeraj
  bottomBar: {
    flexDirection: 'row',
    backgroundColor: "#2d2d35",
    height: 90,
    justifyContent: 'space-around', // Adds spacing between buttons
    alignItems: 'center',
    paddingHorizontal: 20, 
  },
  iconContainer: {
    alignItems: 'center',
    width: 90, 
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
    top: -5, 
    right: -5, 
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
    minWidth: 16, 
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
