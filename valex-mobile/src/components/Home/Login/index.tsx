import { useState } from "react";
import { Image, Text, View, TextInput, TouchableOpacity, SafeAreaView } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import styles, { dropdownStyles } from "../styles";

export default function Login({navigation}: any) { //trocar tipagem
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loginType, setLoginType] = useState<string>('');
    const login = async () => {
        const body = { email, password, accountType: loginType };
        try{}catch(e: any){
            console.error(e);
        }
    }
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
                                setLoginType(item);
                            }} 
                            buttonTextAfterSelection={(item, index) => {
                                return item
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }} 
                            defaultButtonText='-Tipo de login-'
                            dropdownIconPosition="left"
                            rowStyle={{padding: '5px'}}
                            rowTextStyle={{fontSize: 16}}
                            buttonTextStyle={{fontWeight: 'bold'}}
                            buttonStyle={dropdownStyles.selectStyle}
                            dropdownStyle={dropdownStyles.dropdownStyle}
                        />
                        <TouchableOpacity style={styles.buttonStyle} onPress={login}>
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
