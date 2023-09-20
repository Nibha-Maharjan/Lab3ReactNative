import React from "react";
import { View, Text ,StyleSheet, Button, TouchableOpacity, TextInput} from "react-native";

export default function Regform() {
    const [userName, setUserName] = React.useState("");
    const [userEmail, setUserEmail] = React.useState("");
    const [userNumber, setUserNumber] = React.useState("");
    const buttonClicked = () => {
        alert(`Thank you for entering your Contact information\nYour name: ${userName}\nYour Email: ${userEmail}\nYour Number: ${userNumber}`);
        setUserName("");
        setUserEmail("");
        setUserNumber("");
        
    }
    const textClicked = () => {
        setUserName("");
        setUserEmail("");
        setUserNumber("");
    }
    return (
        <View>
            <Text style={styles.headd}>Contact Form</Text>
            <TextInput style={styles.textinput}
                placeholder="Enter Your Name"
                onChangeText={value => setUserName(value) }
                value={userName}
            />
            <TextInput style={styles.textinput}
                placeholder="Enter Your Email"
                onChangeText={value => setUserEmail(value) }
                value={userEmail}
            />
            <TextInput style={styles.textinput}
                placeholder="Enter Your Number"
                onChangeText={value => setUserNumber(value) }
                value={userNumber}
            />

            <Button style={styles.submit}
                onPress={buttonClicked}
                title="Send">
                
            </Button>
            <TouchableOpacity
                styles={styles.opacitybutton}
                onPress={textClicked}>
                { <Text style={styles.textView}>Clear</Text> }
            </TouchableOpacity>
        </View>

    );
}


const styles = StyleSheet.create({

    headd:{
        fontSize: 30,
        marginBottom: 40,
        padding:40,
        
    },
    textinput: {
        alignSelf: "stretch",
        height: 40,
        marginBottom: 10,
        paddingLeft: 15,
        color: "#000",
        borderColor: "#008000",
        borderWidth:1,
        borderRadius: 30,
    },
    submit: {
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#68a0cf',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
      },
    opacitybutton: {
        alignSelf: "stretch",
        justifyContent: 'center',
        padding: 15,
        backgroundColor: "#59cbbd",
        marginTop: 10,
    },
        textView:{
        marginLeft:107,
        marginTop:10,
        marginBottom:10,
        color: "gray",
        fontSize:20
        
    }
    
});
