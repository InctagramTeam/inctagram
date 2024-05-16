import { CSSProperties, ComponentPropsWithoutRef, ReactElement } from 'react'

import HeadMeta from '@/components/HeadMeta/HeadMeta'
import { cn } from '@/utils/merge-cn'
import instagram from 'public/inctagram.png'

type Props = {
  description?: string
  favicon?: string
  paddingTop?: CSSProperties['paddingTop']
  title?: string
} & ComponentPropsWithoutRef<'section'>

export const PageWrapper = ({
  children,
  className,
  description,
  favicon,
  /**
   * Отступ страницы от секции
   * Например: Отступ страницы SingIn от Header
   (по умолчанию для главной странице с local url: http://localhost:3000 --> 24рх,
   задаем props при отрисовки согласно макета paddingTop = 36рх)
   */
  paddingTop = '24px',
  style,
  title,
  ...rest
}: Props): ReactElement => {
  const classesPage = cn(`flex items-center justify-center max-w-[1280px] w-full`, className)

  const styles: CSSProperties = { paddingTop: paddingTop, ...style }

  return (
    <section
      className={cn(`w-full max-w-[1280px] min-h-full p-[0_15px] mx-auto`, classesPage)}
      style={styles}
      {...rest}
    >
      <HeadMeta description={description} favicon={instagram.src} title={title} />
      {children}
    </section>
  )
}