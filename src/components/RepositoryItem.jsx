import { View, Text } from 'react-native';

const RepositoryItem = (props) => (
    <View key={props.id} style={{ padding: 20, paddingBottom: 5, paddingTop: 5 }}>
        <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>{props.id}</Text>
        <Text>{props.fullName}</Text>
        <Text>{props.description}</Text>
        <Text>{props.language}</Text>
        <Text>{props.stargazersCount}</Text>
        <Text>{props.forksCount}</Text>
        <Text>{props.reviewCount}</Text>
        <Text>{props.ratingAverage}</Text>
    </View>
)

export default RepositoryItem;