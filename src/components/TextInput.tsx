import { Eye } from 'assets/icons/Eye'
import { EyeSlash } from 'assets/icons/EyeSlash'
import InfoIcon from 'assets/icons/InfoIcon'
import { useState } from 'react'
import {
	Control,
	FieldValues,
	Path,
	useController,
	UseFormRegister,
} from 'react-hook-form'

interface TextFieldProps<T extends FieldValues>
	extends React.ComponentPropsWithoutRef<'input'> {
	label?: React.ReactNode
	type: string
	name: Path<T>
	className?: string
	register: UseFormRegister<T>
	control: Control<T>
	prefixIcon?: React.ReactNode
}

export const TextInput = <T extends FieldValues>({
	label,
	name,
	type,
	className,
	register,
	control,
	prefixIcon,
	...inputProps
}: TextFieldProps<T>) => {
	const [togglePassword, setTogglePassword] = useState(false)
	const {
		fieldState: { error },
	} = useController({
		name,
		control,
	})

	return (
		<div className={`flex flex-col gap-1 ${className}`}>
			<label htmlFor={name} className=''>
				{label}
			</label>
			<div className='relative'>
				<input
					type={togglePassword ? 'text' : type}
					{...register(name)}
					name={name}
					id={name}
					className={`w-full appearance-none rounded px-4 py-2.5 ring-[1.5px] ${
						type === 'password' && 'pr-14'
					} ${prefixIcon && 'pl-12'} ${
						error
							? 'bg-red-50 ring-red-600'
							: 'bg-wustomers-primary ring-wustomers-primary-light'
					}`}
					{...inputProps}
				/>
				{type === 'password' ? (
					<button
						onClick={() => setTogglePassword(!togglePassword)}
						type='button'
						className='absolute right-0 top-1/2 mr-2 -translate-y-1/2 p-2 transition-transform active:scale-95'>
						{togglePassword ? <EyeSlash /> : <Eye />}
						<span className='sr-only'>hide password</span>
					</button>
				) : null}
			</div>
			{error ? (
				<p className='flex items-center gap-2 text-xs text-red-600 font-medium'>
					<InfoIcon />
					<span>{error.message}</span>
				</p>
			) : null}
		</div>
	)
}
