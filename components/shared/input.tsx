import { useField } from 'formik';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from 'styles/components/shared/input.module.scss';
import { getCSSVarNumber } from 'utils/css';

type InputProps = {
	name: string;
	type?: string;
	label: string;
	placeholder?: string;
	disabled?: boolean;
	readOnly?: boolean;
	isShowPassword?: boolean;
	autoComplete?: 'on' | 'off';
	containerClassName?: string;
	labelClassName?: string;
	inputClassName?: string;
};

const Input = ({
	name,
	type = 'text',
	label,
	placeholder = '',
	disabled = false,
	readOnly = false,
	isShowPassword = true,
	autoComplete = 'off',
	containerClassName = '',
	labelClassName = '',
	inputClassName = '',
}: InputProps) => {
	const [inputType, setInputType] = useState(type);
	const [field, meta] = useField(name);

	return (
		<>
			<div className={`${styles.container} ${containerClassName}`}>
				{label && (
					<label htmlFor={name} className={`${styles.label} ${labelClassName}`}>
						{label}
					</label>
				)}

				<input
					type={inputType}
					id={name}
					placeholder={placeholder}
					className={`${styles.input} ${inputClassName}`}
					readOnly={readOnly}
					disabled={disabled}
					autoComplete={autoComplete}
					{...field}
				/>

				{type === 'password' && isShowPassword && (
					// eslint-disable-next-line @next/next/no-img-element
					<img
						src={`/images/icons/visibility_${
							inputType === 'text' ? 'on' : 'off'
						}.svg`}
						alt="icon"
						onClick={() =>
							setInputType(inputType === 'text' ? 'password' : 'text')
						}
						className={styles.password__icon}
					/>
				)}

				<div className={styles.error}>{meta.touched && meta.error}</div>
			</div>
		</>
	);
};

export default Input;
