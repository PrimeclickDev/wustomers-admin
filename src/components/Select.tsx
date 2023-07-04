import * as RadixSelect from '@radix-ui/react-select'
import ChevronRight from 'assets/icons/ChevronRight'
import * as React from 'react'

const Select = RadixSelect.Root
const SelectGroup = RadixSelect.Group
const SelectValue = RadixSelect.Value

const SelectTrigger = React.forwardRef<
	React.ElementRef<typeof RadixSelect.Trigger>,
	React.ComponentPropsWithoutRef<typeof RadixSelect.Trigger>
>(({ className, children, ...props }, ref) => (
	<RadixSelect.Trigger
		ref={ref}
		className={`flex h-9 items-center justify-between gap-[5px] rounded border border-wustomers-blue bg-wustomers-primary-light pl-2 pr-[15px] text-sm leading-none data-[placeholder]:text-wustomers-blue-light/50 ${className}`}
		{...props}>
		{children}
		<RadixSelect.Icon asChild>
			<ChevronRight className='rotate-90 ml-2' />
		</RadixSelect.Icon>
	</RadixSelect.Trigger>
))

const SelectContent = React.forwardRef<
	React.ElementRef<typeof RadixSelect.Content>,
	React.ComponentPropsWithoutRef<typeof RadixSelect.Content>
>(({ className, children, ...props }, ref) => (
	<RadixSelect.Portal>
		<RadixSelect.Content
			ref={ref}
			className={`z-50 overflow-hidden rounded bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] ${className}`}
			position='popper'
			sideOffset={5}
			{...props}>
			<RadixSelect.Viewport className='p-1'>
				{children}
			</RadixSelect.Viewport>
		</RadixSelect.Content>
	</RadixSelect.Portal>
))

const SelectItem = React.forwardRef<
	React.ElementRef<typeof RadixSelect.Item>,
	React.ComponentPropsWithoutRef<typeof RadixSelect.Item>
>(({ className, children, ...props }, ref) => (
	<RadixSelect.Item
		ref={ref}
		className={`relative flex h-[32px] select-none items-center rounded pr-[35px] pl-[25px] text-[13px] leading-none data-[disabled]:pointer-events-none data-[highlighted]:bg-wustomers-blue data-[disabled]:text-gray-500 data-[highlighted]:text-white data-[highlighted]:outline-none ${className}`}
		{...props}>
		{/* <span className='absolute right-2 flex h-3.5 w-3.5 items-center justify-center'>
			<RadixSelect.ItemIndicator>
				<CheckIcon className='h-4 w-4' />
			</RadixSelect.ItemIndicator>
		</span> */}
		<RadixSelect.ItemText>{children}</RadixSelect.ItemText>
	</RadixSelect.Item>
))

export {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
}
