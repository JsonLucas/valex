import { SafeAreaView, View, Text } from "react-native";
import styles from "./styles";

export default function Cards() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.header}>
                <Text style={styles.username}>
                    Olá, {'Fulano'}!
                </Text>
            </View>
            <View style={styles.container}>
                <Text style={{fontWeight: 'bold', fontSize: 18, marginBottom: '10px'}}>Seus cartões</Text>
                <View style={styles.cardStyle}>
                    <View></View>
                </View>
            </View>
        </SafeAreaView>
    );
}