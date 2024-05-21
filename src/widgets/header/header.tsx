import { cn } from '@/shared/lib/utils'
import { Flex } from '@/shared/ui/flex'
import { Logo } from '@/shared/ui/logo/logo'
import { HeaderDesktop } from '@/widgets/header/header-desktop/header-desktop'
import { NotificationProps } from '@/widgets/header/notifications-dropdown'

type Props = {
  className?: string
  countNotifications?: number
  isAuth?: boolean
  notifications?: NotificationProps[]
}

export const Header = ({ className, ...rest }: Props) => {
  const classes = {
    button: `py-[6px] text-center !text-H3-16 hover:translate-y-0`,
    countNotifications: cn(
      `bg-Danger-500 text-Light-100 rounded-full w-[13px] h-[13px] flex items-center justify-center`,
      `absolute top-0 right-0 text-[0.6rem] leading-[0.5rem]`
    ),
    dropdownTrigger: cn(
      `w-[24px] !h-[24px] justify-center hover:translate-y-0 !p-0 relative`,
      `hover:bg-Primary-500 active:opacity-50 duration-300 transition-opacity`
    ),
    header: `fixed inset-0 border-b-[1px] shadow-sm shadow-Dark-300 border-Dark-100 w-full h-[60px] py-[15px] z-10 bg-Dark-700`,
    loginLink: cn(
      `px-[26px] !text-Primary-500 duration-300`,
      `hover:no-underline hover:!text-Primary-100`,
      `active:!text-Primary-700`,
      `focus:no-underline`
    ),
    signupLink: `px-[20px]`,
    wrapper: `max-w-[1186px] w-full mx-auto px-[15px]`,
  }

  return (
    <header className={classes.header}>
      <Flex className={classes.wrapper} gap={'20'} items={'center'} justify={'spaceBetween'}>
        <Logo />
        <HeaderDesktop {...rest} />
      </Flex>
    </header>
  )
}

Header.displayName = 'Header'
