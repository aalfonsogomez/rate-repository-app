import { View, StyleSheet, ScrollView } from 'react-native';
import theme from '../theme';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight + 10
    },
    scroll: {
        paddingBottom: 15
    }
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal style={styles.scroll}>
                <AppBarTab to='/'>Repositories</AppBarTab>
                <AppBarTab to='/sigin'>Sign In</AppBarTab>
            </ScrollView>
        </View>
    )
};

export default AppBar;