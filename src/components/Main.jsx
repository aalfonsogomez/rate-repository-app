import { View, Text } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import { Routes, Route } from 'react-router-native';

const Main = () => {
    return (
        <View style={{ flex: 1}}>
            <AppBar />
            <Routes>
                <Route path='/' exact element={<RepositoryList />} />
                <Route path='/sigin' exact element={<Text>Working on it</Text>} />
            </Routes>
        </View>
    );
};

export default Main;