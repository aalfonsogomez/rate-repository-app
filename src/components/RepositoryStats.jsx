import { View, StyleSheet } from 'react-native';
import StyledText from './StyledText';

const parseThousands = (number) => {
    return number >= 1000
        ? `${Math.round(number / 100) / 10}k`
        : String(number);
};

const RepositoryStats = (props) => (
    <View style={styles.container}>
        <View>
            <StyledText align='center' fontWeight='bold'>Starts</StyledText>
            <StyledText align='center'>{parseThousands(props.stargazersCount)}</StyledText>
        </View>
        <View>
            <StyledText align='center' fontWeight='bold'>Forks</StyledText>
            <StyledText align='center'>{parseThousands(props.forksCount)}</StyledText>
        </View>
        <View>
            <StyledText align='center' fontWeight='bold'>Reviews</StyledText>
            <StyledText align='center'>{props.reviewCount}</StyledText>
        </View>
        <View>
            <StyledText align='center' fontWeight='bold'>Rating</StyledText>
            <StyledText align='center'>{props.ratingAverage}</StyledText>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }

})
export default RepositoryStats;