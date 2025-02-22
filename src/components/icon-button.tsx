import type { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface IconButtonProps extends ComponentProps<'button'> {
  children: ReactNode
}

export function IconButton({ className, ...props }: IconButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        'p-1.5 bg-gray-500 text-blue rounded-md transition-colors duration-300 cursor-pointer hover:bg-blue hover:text-gray-900',
        className
      )}
    />
  )
}
