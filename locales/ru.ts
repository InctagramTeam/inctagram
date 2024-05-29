/**  Чтобы typescript подсказывал поля заполняем сначала файл en.ts */
import { LocaleType } from './en'

export const ru: LocaleType = {
  button: {
    answer: 'Ответить',
    back: 'Вернуться',
    backToHome: 'Вернутся на домашнюю',
    backToPayment: 'Вернуться к оплате',
    backToSignIn: 'Страница входа',
    backToSignUp: 'Вернуться к регистрации',
    createNewPassword: 'Создать новый пароль',
    discard: 'Отменить',
    done: 'Готово',
    favorites: 'Избранное',
    logOut: 'Выйти',
    next: 'Далее',
    no: 'Нет',
    ok: 'OK',
    profileSettings: 'Настройки профиля',
    publish: 'Опубликовать',
    resendVerificationLink: 'Отправить повторное подтверждение',
    save: 'Сохранить изменения',
    saveDraft: 'Сохранить черновик',
    selectFromComputer: 'Выбрать с Компьютера',
    sendLink: 'Отправить ссылку',
    sendLinkAgain: 'Отправить ссылку повторно',
    showLess: 'Показать меньше',
    showMore: 'Показать больше',
    signIn: 'Войти',
    signUp: 'Зарегистрироваться',
    simple_save: 'Сохранить',
    statistics: 'Статистика',
    yes: 'Да',
  },
  label: {
    email: 'Электронная почта',
    error: 'Ошибка',
    password: 'Пароль',
    userName: 'Имя пользователя',
    confirmPassword: 'Подтвердите пароль',
  },
  placeholders: {
    email: 'email@inctagram.com',
    firstName: 'Введите ваше имя',
    lastName: 'Введите вашу фамилию',
    password: 'Введите ваш пароль',
    passwordConfirm: 'Введите ваш пароль снова',
    username: 'Введите имя пользователя',
  },
  lang: {
    en: 'Английский',
    ru: 'Русский',
  },
  layout: {
    sidebar: {
      create: 'Создать',
      favorites: 'Избранное',
      home: 'Главная',
      logout: 'Выйти',
      messenger: 'Чат',
      profile: 'Мой профиль',
      search: 'Поиск',
      statistics: 'Статистика',
    },
  },
  pages: {
    signUp: {
      agreement: {
        description: `Я согласен с <1>privacy</1> и <2>terms</2>`,
        privacy: 'Политикой конфиденциальности',
        terms: 'Условиями использования',
      },
      metaDescription:
        'Создайте учетную запись, чтобы начать пользоваться нашими услугами и получать эксклюзивные преимущества.',
      metaTitle: 'Регистрация',
      modalBtn: 'Хорошо',
      modalText: 'Мы отправили ссылку для подтверждения вашего электронного адреса на ',
      question: 'У вас уже есть аккаунт?',
      title: 'Регистрация',
    },
  },
  tabs: {
    devices: 'Устройства',
    general: 'Общая информация',
    management: 'Управление аккаунтом',
    payments: 'Мои платежи',
  },
  validation: {
    minLength: (len: number) => `Минимальное количество символов ${len}`,
    required: 'Обязательное поле',
    maxLength: (len: number) => `Максимальное количество символов ${len}`,
    passwordVerification: 'Пароль должен содержать минимум 1 заглавную букву, спец. символ и цифру',
    emailVerification: 'Почта должна соответствовать формату example@example.com',
    passwordMismatch: 'Пароли должны совпадать',
    userNameVerification:
      'Имя пользователя может содержать только буквы "a-z" (заглавные и строчные), цифры и символы "_" и "-"',
  },
}
