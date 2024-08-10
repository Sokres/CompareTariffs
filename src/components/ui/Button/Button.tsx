import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import cl from './Button.module.css';
import cn from 'classnames';

export interface ButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	children: ReactNode;
	appearance: 'primary' | 'ghost' | 'normal';
}
const Button = ({
	appearance,
	children,
	className,
	...props
}: ButtonProps): JSX.Element => {
	return (
		<button
			className={cn(cl.button, className, {
				[cl.primary]: appearance === 'primary',
				[cl.ghost]: appearance === 'ghost',
				[cl.normal]: appearance === 'normal',
			})}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
