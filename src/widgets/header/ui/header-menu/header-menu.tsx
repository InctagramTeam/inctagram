import * as React from 'react'
import { MD_BREAKPOINT } from '@/shared/constants'
import { useResponsive } from '@/shared/lib/hooks'
import { ReturnComponent } from '@/shared/types'
import { Flex } from '@/shared/ui/flex'

import { LangSelectSwitcher } from '@/shared/lib/translate'
import { NotificationProps } from '../notifications-dropdown-list'
import { NotificationsDropdown } from '../notifications-dropdown'
import { AuthButtons } from '../auth-buttons'
import { MobileDropdown } from '../mobile-dropdown'

type Props = {
  isAuth?: boolean
  logout?: () => void
  notifications?: NotificationProps[]
}
export const HeaderMenu = ({ isAuth, logout, notifications }: Props): ReturnComponent => {
  const { width } = useResponsive()

  if (width === null) {
    return null
  }

  const isDesktop = width > MD_BREAKPOINT

  return (
    <Flex gap={'40'}>
      {isDesktop && <NotificationsDropdown notifications={notifications} />}

      {/* Селект для смены языка в Арр */}
      <LangSelectSwitcher />
      {isDesktop && !isAuth && (
        <Flex className={'flex-nowrap'} gap={'24'}>
          <AuthButtons />
        </Flex>
      )}
      {!isDesktop && <MobileDropdown logout={logout} />}
    </Flex>
  )
}
