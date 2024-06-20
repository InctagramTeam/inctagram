import {
  AuthButtons,
  MobileDropdown,
  NotificationProps,
  NotificationsDropdown,
} from '@/widgets/header/ui'
import { getLanguages, LangSelectSwitcher } from '@/feature/translate'
import { Flex, useTranslation } from '@/shared'

const renderNotificationsDropdown = (isDesktop: boolean, notifications?: NotificationProps[]) => {
  if (!isDesktop) {
    return
  }
  return <NotificationsDropdown notifications={notifications} />
}

/** Render-function */
const renderLangSelectSwitcher = (width: number, sidebarItems: ReturnType<typeof getLanguages>) => {
  return <LangSelectSwitcher width={width} sidebarItems={sidebarItems} />
}

const renderAuthButtons = (isDesktop: boolean, isAuth?: boolean) => {
  if (isDesktop && !isAuth) {
    return (
      <Flex className={'flex-nowrap'} gap={'24'}>
        <AuthButtons />
      </Flex>
    )
  }
  return null
}

const renderMobileDropdown = (isDesktop: boolean, logout?: () => void) => {
  if (isDesktop) {
    return
  }
  return <MobileDropdown logout={logout} />
}

export const HeaderMenuContent = ({
  isDesktop,
  notifications,
  sidebarItems,
  isAuth,
  logout,
  width,
  t,
}: {
  isDesktop: boolean
  notifications?: NotificationProps[]
  sidebarItems: ReturnType<typeof getLanguages>
  isAuth?: boolean
  logout?: () => void
  width: number
  t: ReturnType<typeof useTranslation>['t']
}) => (
  <Flex gap={'40'}>
    {renderNotificationsDropdown(isDesktop, notifications)}
    {renderLangSelectSwitcher(width, sidebarItems)}
    {renderAuthButtons(isDesktop, isAuth)}
    {renderMobileDropdown(!isDesktop, logout)}
  </Flex>
)