import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '60px',
        backgroundColor: 'black',
        justifyContent: 'center'
    },
    username: {
        fontWeight: 'bold',
        fontSize: 17,
        color: 'white',
        marginLeft: '10px'
    },
    container: {
        width: '95%',
        backgroundColor: 'transparent',
        marginHorizontal: 'auto',
        marginTop: '10px'
    },
    cardStyle: {
        width: '100%',
        height: '200px',
        backgroundColor: 'darkred',
        borderRadius: 10,
        marginBottom: '10px',
        color: 'white',
        padding: '5px'
    }
});

export default styles;