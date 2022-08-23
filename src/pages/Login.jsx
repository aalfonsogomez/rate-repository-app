
import { Formik, useField } from 'formik';
import { View, Button, StyleSheet } from 'react-native';
import { StyledTextInput } from '../components/StyledTextInput';
import { StyledText } from '../components/StyledText';

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
    const [ field, meta, helpers ] = useField(name);
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

const validate = values => {
    const errors = { }
    if (!values.email) {
        errors.email = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    return errors;
}

export default function LogInPage() {
    return (
        <Formik validate={validate} initialValues={initialValues} onSubmit={values => console.log(values)}>
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