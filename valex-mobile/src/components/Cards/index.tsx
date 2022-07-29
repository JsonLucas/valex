import React, { useState, useEffect, Fragment } from 'react';
import { SafeAreaView, View, Text } from "react-native";
import Loading from '../Loading';
import styles from "./styles";
import { Ionicons, AntDesign } from '@expo/vector-icons';

export default function Cards() {
    const [loading, setLoading] = useState<boolean>(false);
    const deleteCard = async ({target}: any) => {
        console.log(target);
    }
    const unlockCard = async () => {}
    const lockCard = async () => {}
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {loading && <Loading />}
            {!loading && <Fragment>
                <View style={styles.header}>
                    <Text style={styles.username}>
                        Olá, {'Fulano'}!
                    </Text>
                </View>
                <View style={styles.container}>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: '10px' }}>Seus cartões</Text>
                    <View style={styles.cardStyle}>
                        <View style={styles.informationRow}>
                            <Text style={styles.informationText}>Groceries</Text>
                            <Text style={styles.informationText} onPress={deleteCard}>
                                <Ionicons name="trash" size={18} color="white" />
                            </Text>
                        </View>
                        <View style={styles.informationRow}>
                            <Text style={styles.informationText}>Jason L S Freitas</Text>
                        </View>
                        <View style={styles.informationRow}>
                            <Text style={styles.informationText}>1234 1234 1234 1234</Text>
                            <Text style={styles.informationText}>09/27</Text>
                        </View>
                        <View style={styles.informationRow}>
                            <Text style={styles.informationText}>R$ 1000</Text>
                            <Text style={styles.informationText}>123</Text>
                        </View>
                        <View style={styles.informationRow}>
                            <Text style={styles.informationText}>Active</Text>
                            <Text style={styles.informationText}>
                                <AntDesign name="lock1" size={18} color="white" onPress={unlockCard}/>
                                {/*<AntDesign name="unlock" size={18} color="white" onPress={lockCard} />*/}
                            </Text>
                        </View>
                    </View>
                </View>
            </Fragment>
            }
        </SafeAreaView>
    );
}