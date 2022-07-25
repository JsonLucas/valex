import { View } from "react-native";
import FormField from "../Fields/FormField";
import styles from "./styles";

export default function Home (){
    return (
        <View style={styles.container}>
            <View style={styles.formSection}>
                <View>
                    <FormField />
                </View>
            </View>
        </View>
    );
}