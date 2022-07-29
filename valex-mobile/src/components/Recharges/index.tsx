import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, TextInput, Button } from "react-native";
import CollapsibleList from "react-native-collapsible-list";
import styles from "./styles";
export default function Recharges() {
    const [toggled, setToggle] = useState<boolean>(false);
    const [loading, setLoding] = useState<boolean>(false);
    const [data, setData] = useState<Array<string>>([]);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <CollapsibleList
                    numberOfVisibleItems={0}
                    wrapperStyle={styles.wrapperListStyle}
                    buttonPosition="top"
                    buttonContent={
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontWeight: "bold" }}>-</Text>
                            <Text
                                style={{
                                    fontSize: 17,
                                    fontWeight: "bold",
                                    marginLeft: "5px",
                                }}
                            >
                                Groceries
                            </Text>
                        </View>
                    }
                >
                </CollapsibleList>
                <View style={{ marginTop: "5px" }}>
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Email"
                    />
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Valor da recarga"
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.inputStyle}
                        placeholder="Tipo de cartão"
                    />
                    <Button title="Enviar" />
                </View>
            </View>
        </SafeAreaView>
    );
}