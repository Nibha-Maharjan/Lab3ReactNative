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

            <Text style={styles.textt}>Full Name:</Text>
            <TextInput style={styles.textinput}
                placeholder="Enter Your Name"
                onChangeText={value => setUserName(value) }
                value={userName}
            />

            <Text style={styles.textt}>Email:</Text>
            <TextInput style={styles.textinput}
                placeholder="Enter Your Email"
                onChangeText={value => setUserEmail(value) }
                value={userEmail}
            />

            <Text style={styles.textt}>Phone Number:</Text>    
            <TextInput style={styles.textinput}
                placeholder="Enter Your Number"
                onChangeText={value => setUserNumber(value) }
                value={userNumber}
            />

            <TouchableOpacity style={styles.submit}
                onPress={buttonClicked}>
                { <Text style={styles.textView}>Send</Text> }
            </TouchableOpacity>

            <TouchableOpacity style={styles.opacitybutton}
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
    textt: {
        alignSelf: "stretch",
        paddingLeft: 15,
        marginBottom: 5,
        marginTop: 5
    },
    textinput: {
        alignSelf: "stretch",
        fontSize: 16,
        height: 40,
        marginBottom: 10,
        paddingLeft: 15,
        color: "#000",
        borderColor: "#008000",
        borderWidth:1,
        borderRadius: 30,
    },
    submit: {
        elevation: 8,
        backgroundColor: "#00ff97",
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 10
      },
    opacitybutton: {
        elevation: 8,
        backgroundColor: "#effac3",
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 10
    },
    textView:{
        fontSize: 18,
        color: "gray",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
        
    }
    
});
