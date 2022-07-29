import { ThreeDots } from "react-loader-spinner";
import { SafeAreaView } from "react-native";
import styles from "./styles";

export default function Loading() {
    return (
        <SafeAreaView style={styles.container}>
            <ThreeDots width={40} height={40} color='darkred' />
        </SafeAreaView>
    );
}