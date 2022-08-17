import { View, Text, StyleSheet } from 'react-native';
import StyledText from './StyledText';

const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
        <StyledText big bold>{props.id}</StyledText>
        <StyledText blue>{props.fullName}</StyledText>
        <StyledText bold>{props.description}</StyledText>
        <StyledText blue>{props.language}</StyledText>
        <StyledText small>{props.stargazersCount}</StyledText>
        <StyledText small>{props.forksCount}</StyledText>
        <StyledText small>{props.reviewCount}</StyledText>
        <StyledText small>{props.ratingAverage}</StyledText>
    </View>
)

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    }
})

export default RepositoryItem;