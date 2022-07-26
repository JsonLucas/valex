import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import styles, { dropdownStyles } from "../styles";

export default function SignUp({navigation}: any) { //trocar tipagem
    const [companyName, setCompanyName] = useState<string>('');
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [accountType, setAccountType] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const signUp = async () => {
        const body = { companyName, login, password, confirmPassword, accountType };
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
                                placeholder="Nome da compania"
                                style={styles.fieldsStyle}
                                value={companyName}
                                onChangeText={(name) => setCompanyName(name)}
                            />
                        </View>
                        <View style={{ width: "100%", marginBottom: "10px" }}>
                            <TextInput
                                placeholder={accountType !== 'Company' ? "Email" : 'Login'}
                                style={styles.fieldsStyle}
                                value={login}
                                onChangeText={(login) => setLogin(login)}
                            />
                        </View>
                        <View style={{ width: "100%", marginBottom: "10px" }}>
                            <TextInput
                                placeholder="Senha"
                                style={styles.fieldsStyle}
                                value={password}
                                onChangeText={(password) => setPassword(password)}
                                secureTextEntry={true}
                            />
                        </View>
                        <View style={{ width: "100%", marginBottom: "10px" }}>
                            <TextInput
                                placeholder="Confirmar Senha"
                                style={styles.fieldsStyle}
                                value={confirmPassword}
                                onChangeText={(password) => setConfirmPassword(password)}
                                secureTextEntry={true}
                            />
                        </View>
                        <SelectDropdown data={['Company', 'Employee']} onSelect={(item, index) => {
                                setAccountType(item);
                            }}
                            buttonTextAfterSelection={(item, index) => {
                                return item
                            }}
                            rowTextForSelection={(item, index) => {
                                return item
                            }}
                            defaultButtonText='-Tipo de cadastro-'
                            dropdownIconPosition="left"
                            buttonStyle={dropdownStyles.selectStyle}
                            dropdownStyle={dropdownStyles.dropdownStyle}
                            rowStyle={{padding: '5px'}}
                            rowTextStyle={{fontSize: 16}}
                            buttonTextStyle={{fontWeight: 'bold'}}
                        />
                        <TouchableOpacity style={styles.buttonStyle} onPress={signUp}>
                            Cadastrar
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.rowCreateAccount} onPress={() => { navigation.navigate('Login') }}>
                        Já possui uma conta? Faça login!
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}