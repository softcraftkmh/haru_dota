import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import styles from 'styles/pages/Gallery.module.scss';
import Input from 'components/shared/input';
import { useState } from 'react';

const signupInitialValues = {
	magikWord: '',
};

const signupValidationSchema = Yup.object().shape({
	magikWord: Yup.string()
		.oneOf(['opensesame'], 'Incorrect magik word.')
		.required('Magik word is required.'),
});

const Gallery = () => {
	const [isVerified, setIsVerified] = useState(false);

	const onFormSubmit = () => {
		setIsVerified(true);
	};

	return (
		<div>
			{!isVerified && (
				<div className={styles.form__container}>
					<Formik
						initialValues={signupInitialValues}
						validationSchema={signupValidationSchema}
						onSubmit={onFormSubmit}
					>
						{() => (
							<Form className={styles.form__content}>
								<Input
									name="magikWord"
									type="password"
									label="Say the magik word"
								/>
							</Form>
						)}
					</Formik>
				</div>
			)}
		</div>
	);
};

export default Gallery;
