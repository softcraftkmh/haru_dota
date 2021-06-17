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
	isShowError?: boolean;
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
	isShowError = true,
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
					<Image
						src={
							inputType === 'text'
								? '/icons/visibility_on.svg'
								: '/icons/visibility_off.svg'
						}
						alt="icon"
						onClick={() =>
							setInputType(inputType === 'text' ? 'password' : 'text')
						}
						className={styles.password_icon}
						width={getCSSVarNumber('--icon-normal-width')}
						height={getCSSVarNumber('--icon-normal-height')}
					/>
				)}

				{isShowError && (
					<div className={styles.error}>{meta.touched && meta.error}</div>
				)}
			</div>
		</>
	);
};

export default Input;
