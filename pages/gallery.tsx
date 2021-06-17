import { useState } from 'react';
import * as Yup from 'yup';

import Input from 'components/shared/input';
import AppSEO from 'components/shared/SEO';
import { Form, Formik } from 'formik';
import Image from 'next/image';
import gallery1 from 'public/images/gallery/img (1).jpg';
import gallery10 from 'public/images/gallery/img (10).jpg';
import gallery11 from 'public/images/gallery/img (11).jpg';
import gallery12 from 'public/images/gallery/img (12).jpg';
import gallery13 from 'public/images/gallery/img (13).jpg';
import gallery14 from 'public/images/gallery/img (14).jpg';
import gallery2 from 'public/images/gallery/img (2).jpg';
import gallery3 from 'public/images/gallery/img (3).jpg';
import gallery4 from 'public/images/gallery/img (4).jpg';
import gallery5 from 'public/images/gallery/img (5).jpg';
import gallery6 from 'public/images/gallery/img (6).jpg';
import gallery7 from 'public/images/gallery/img (7).jpg';
import gallery8 from 'public/images/gallery/img (8).jpg';
import gallery9 from 'public/images/gallery/img (9).jpg';
import styles from 'styles/pages/Gallery.module.scss';

const images = [
	gallery1,
	gallery2,
	gallery3,
	gallery4,
	gallery5,
	gallery6,
	gallery7,
	gallery8,
	gallery9,
	gallery10,
	gallery11,
	gallery12,
	gallery13,
	gallery14,
];

const signupInitialValues = {
	magikWord: '',
};

const signupValidationSchema = Yup.object().shape({
	magikWord: Yup.string()
		.oneOf(['opensesame'], 'Hint: open ??????')
		.required('Magik word is required.'),
});

const Gallery = () => {
	const [isVerified, setIsVerified] = useState(false);

	const onFormSubmit = () => {
		setIsVerified(true);
	};

	return (
		<>
			<AppSEO title="Gallery" />
			<div className={styles.container}>
				{!isVerified ? (
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
				) : (
					<div className={styles.images__container}>
						{images.map((src, i) => (
							<Image
								key={src + '' + i}
								alt="gallery"
								layout="responsive"
								objectFit="cover"
								src={src}
							/>
						))}
					</div>
				)}
			</div>
		</>
	);
};

export default Gallery;
