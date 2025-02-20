import type { ComponentProps, ReactNode } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode
}

export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className="
				flex justify-between 
				items-center 
				px-5 h-12 
				bg-gray-500 
				text-blue 
				font-semibold 
				rounded-xl 
				w-full t
				ransition-colors 
				duration-300 
				cursor-pointer 
				hover:bg-blue 
				hover:text-gray-900
			"
    />
  )
}
