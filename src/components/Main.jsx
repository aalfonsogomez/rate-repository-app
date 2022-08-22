import { View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import LogInPage from '../pages/Login.jsx';
import { Routes, Route } from 'react-router-native';

const Main = () => {
    return (
        <View style={{ flex: 1}}>
            <AppBar />
            <Routes>
                <Route path='/' exact element={<RepositoryList />} />
                <Route path='/sigin' exact element={<LogInPage>Working on it</LogInPage>} />
            </Routes>
        </View>
    );
};

export default Main;