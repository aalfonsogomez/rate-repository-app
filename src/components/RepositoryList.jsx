import { View, Text, FlatList, StyleSheet } from 'react-native';
import repositories from '../data/repositories';

const RepositoryList = () => {
    return (
        <FlatList
            data={repositories}
            ItemSeparatorComponent={() => <Text></Text>}
            renderItem={({ item: repo }) => (
                <View key={repo.id}>
                    <Text>{repo.id}</Text>
                    <Text>{repo.fullName}</Text>
                    <Text>{repo.description}</Text>
                    <Text>{repo.language}</Text>
                    <Text>{repo.stargazersCount}</Text>
                    <Text>{repo.forksCount}</Text>
                    <Text>{repo.reviewCount}</Text>
                    <Text>{repo.ratingAverage}</Text>
                </View>
            )}
        />
    )
};

export default RepositoryList;