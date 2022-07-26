import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    formSection: {
        padding: '10px',
        width: '90%',
        borderRadius: 10,
        boxShadow: 'rgba(0, 0, 0, 0.5)',
        backgroundColor: '#F0E68C',
    },
    rowTitlePage: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '50%',
        marginHorizontal: 'auto',
        marginTop: '20px'
    },
    imageStyle: {
        width: '70px',
        height: '70px'
    },
    titleStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'darkred'
    },
    fieldsSection: {
        width: '90%',
        marginHorizontal: 'auto',
        marginTop: '40px'
    },
    fieldsStyle: {
        width: '100%',
        padding: '10px',
        border: 'none',
        backgroundColor: 'white',
        fontSize: 15
    },
    buttonStyle: {
        border: 'none',
        width: '100%',
        padding: '10px',
        backgroundColor: 'darkred',
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 16,
        color: 'white'
    },
    rowCreateAccount: {
        fontSize: 17,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        color: 'darkred',
        marginTop: '10px',
        marginHorizontal: 'auto'
    }
});

export const dropdownStyles = {
    selectStyle: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#eee',
        marginBottom: '10px'
    },
    dropdownStyle: {
        backgroundColor: 'lightgrey',
        padding: '5px'
    },
    rowStyles: {
        padding: '5px'
    }
}
export default styles;