import {
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'powderblue',
    },
    header: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    main: {
//        marginBottom: 5,
    },
    footer: {
        marginTop: 10,
        flexDirection: 'column',
        alignItems: 'center',
    },
    field: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    input: {
        width: 170,
        textAlign: 'right',
        fontSize: 27,
    },
    value: {
        width: 170,
        textAlign: 'right',
        fontSize: 27,
        paddingTop: 7
    },
    button: {
        padding: 16,
        backgroundColor: 'white',
        borderRadius: 16,
    },
});

module.exports = styles;
