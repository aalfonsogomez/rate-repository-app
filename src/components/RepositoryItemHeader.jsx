import { View, StyleSheet, Image, Platform } from 'react-native';
import StyledText from './StyledText';
import theme from '../theme';

const RepositoryItemHeader = ({ownerAvatarUrl, fullName, description, language}) => (
    <View style={{ flexDirection: 'row', paddindBottom: 2}}>
        <View style={{paddingRight: 10}}>
            <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
        </View>
        <View style={{}}>
            <StyledText fontWeight='bold'>{fullName}</StyledText>
            <StyledText color='secondary'>{description}</StyledText>
            <StyledText style={styles.language}>{language}</StyledText>
        </View>
    </View>
);

const styles = StyleSheet.create({
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: Platform.select({
            android: theme.colors.primary,
            ios: 'orange',
            default: 'purple'
        }),
        alignSelf: 'flex-start',
        marginVertical: 4,
        borderRadius: 4,
        overflow: 'hidden'
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4
    }
})

export default RepositoryItemHeader;
