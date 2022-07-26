import { useState } from "react";
import { Image, Text, View, TextInput, TouchableOpacity, SafeAreaView } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import styles from "../styles";

export default function Login({navigation}: any) { //trocar tipagem
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.formSection}>
                    <View style={styles.rowTitlePage}>
                        <Image
                            source={{
                                uri: "https://i.pinimg.com/474x/62/32/05/623205e529286d153914a9c8953e9c5b.jpg",
                            }}
                            style={styles.imageStyle}
                        />
                        <Text style={styles.titleStyle}>Valex</Text>
                    </View>
                    <View style={styles.fieldsSection}>
                        <View style={{ width: "100%", marginBottom: "10px" }}>
                            <TextInput
                                style={styles.fieldsStyle}
                                placeholder="Email"
                                value={email}
                                onChangeText={(email) => setEmail(email)}
                            />
                        </View>
                        <View style={{ width: "100%", marginBottom: "10px" }}>
                            <TextInput
                                style={styles.fieldsStyle}
                                placeholder="Senha"
                                value={password}
                                onChangeText={(password) => setPassword(password)}
                                secureTextEntry={true}
                            />
                        </View>
                        <SelectDropdown data={['Company', 'Employee']} onSelect={(item, index) => {
                                console.log(item, index);
                            }} 
                            buttonTextAfterSelection={(item, index) => {
                                return item
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }} 
                            defaultButtonText='-Tipo de login-'
                        />
                        <TouchableOpacity style={styles.buttonStyle}>
                            Entrar
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.rowCreateAccount} onPress={() => { navigation.navigate('SignUp') }}>
                        Não possui uma conta? Cadastre-se!
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}
