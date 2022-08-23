
import StyledTextInput from '../components/StyledTextInput';
import StyledText from '../components/StyledText';
import { Formik, useField } from 'formik';
import { View, Button, StyleSheet } from 'react-native';
import { loginValidationSchema } from '../validationSchemas/login';

const initialValues = {
    email: '',
    password: ''
}

const styles = StyleSheet.create({
    error: {
        color: 'red'
    },
    form: {
        margin: 12
    }
});

const FormikInputValue = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name);
    return (
        <>
            <StyledTextInput
                error={meta.error}
                value={field.value}
                onChangeText={value => helpers.setValue(value)}
                {...props}
            />
            {meta.error && <StyledText style={styles.error}>
                {meta.error}
            </StyledText>}
        </>
    )
}

export default function LogInPage() {
    return (
        <Formik validationSchema={loginValidationSchema} initialValues={initialValues} onSubmit={values => console.log(values)}>
            {({ handleSubmit }) => {
                return (
                    <View styles={styles.form}>
                        <FormikInputValue
                            name='email'
                            placeholder='Email'
                        />
                        <FormikInputValue
                            name='password'
                            placeholder='Password'
                            secureTextEntryw
                        />
                        <Button onPress={handleSubmit} title='Sign In' />
                    </View>
                )
            }}
        </Formik>
    )
}