import { View, Text, StyleSheet } from 'react-native';

const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
        <Text style={styles.strong}>{props.id}</Text>
        <Text>{props.fullName}</Text>
        <Text>{props.description}</Text>
        <Text>{props.language}</Text>
        <Text>{props.stargazersCount}</Text>
        <Text>{props.forksCount}</Text>
        <Text>{props.reviewCount}</Text>
        <Text>{props.ratingAverage}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
    strong: {
        color: '#09f',
        fontWeight: 'bold',
        marginBottom: 5
    }
})

export default RepositoryItem;