'use client'

import { memo } from 'react'

import { FollowersInfoHeader } from '@/entities/profile/ui/followers-info-header'
import { ProfileInfoDescription } from '@/entities/profile/ui/profile-info-description'

export const ProfileFollowerInfoBlock = memo(() => {
  return (
    <div className={`_profile-followers-info_ ml-[36px] w-full max-w-[734px] pl-[36px]`}>
      <FollowersInfoHeader />
      {/* todo: Text - aboutMe текст что с сервера должен прийти.. */}
      <ProfileInfoDescription />
    </div>
  )
})
