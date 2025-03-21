import { cn } from '@utils/cn'
import { ComponentProps } from 'react'

type IOpenPLCIconProps = ComponentProps<'svg'>

export const OpenPLCIcon = (props: IOpenPLCIconProps) => {
  const { className, ...rest } = props
  return (
    <svg
      viewBox='0 0 12 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      // aria-labelledby='openplc-logo-title'
      className={cn('h-6 w-6', className)}
      {...rest}
    >
      <title id='openplc-logo-title'>GespantPLC Logo</title>
      {/* <rect width='12' height='12' rx='1.71429' fill='#0464FB' /> */}
      {/* <path
        d='M4.74903 3.42857L2.14285 6L4.74903 8.57143L5.32239 7.99417L3.73219 6.44024C3.61547 6.32618 3.45921 6.26239 3.29656 6.26239H2.87258V5.73761H3.29656C3.45921 5.73761 3.61547 5.67381 3.73219 5.55976L5.32239 4.00583L4.74903 3.42857Z'
        fill='red'
      />
      <path
        d='M7.25096 3.42857L9.85714 6L7.25096 8.57143L6.6776 7.99417L8.2678 6.44024C8.38452 6.32618 8.54078 6.26239 8.70343 6.26239H9.12741V5.73761H8.70343C8.54078 5.73761 8.38452 5.67381 8.2678 5.55976L6.6776 4.00583L7.25096 3.42857Z'
        fill='white'
      /> */}
 <path

      d="M 5.4466065,1.1452533 V 2.0378096 H 1.8532345 V 4.7382562 H 4.5342722 V 3.9822185 H 2.7131526 V 3.0588256 H 5.4605518 V 5.661649 H 0.92984173 V 1.1423841 Z"
       fill='#ffffff'
        />
    <path
        d="M 6.3749287,1.1617194 V 2.0542757 H 9.9683003 V 4.7547223 H 7.2872626 V 3.9986846 h 1.82112 V 3.0752922 H 6.3609834 v 2.602823 H 10.891692 V 1.1588507 Z"

        fill='#ffffff'
        />
    <path

d="M 6.3470365,11.058476 V 10.16592 H 9.9404073 V 7.4654733 H 7.2593703 V 8.2215111 H 9.0804896 V 9.1449036 H 6.3330912 V 6.5420805 H 10.8638 v 4.5192645 z"

        fill='#ffffff'
        />
    <path

d="M 5.4526785,11.058476 V 10.16592 H 1.8593069 V 7.4654737 H 4.5403446 V 8.2215115 H 2.719225 V 9.1449036 H 5.4666238 V 6.5420809 H 0.93591413 v 4.5192641 z"

        fill='#ffffff'
     />
    </svg>


  )
}
