/**
 * Russian (Русский) translations for GRAEWE Coiler Calculator
 */

import { TranslationKeys } from './de'

export const ru: TranslationKeys = {
  errors: {
    unknownCalculationError: 'Неизвестная ошибка вычисления',
    missingParamsCoilLength: 'Отсутствуют обязательные параметры для расчета длины катушки',
    missingParamsEndPosition: 'Отсутствуют обязательные параметры для расчета конечной позиции',
    pipeDiameterGreaterThanZero: 'Диаметр трубы должен быть больше 0',
    innerDiameterGreaterThanZero: 'Внутренний диаметр должен быть больше 0',
    pipeDiameterSmallerThanInner: 'Диаметр трубы должен быть меньше внутреннего диаметра',
    outerDiameterGreaterThanInner: 'Внешний диаметр должен быть больше внутреннего диаметра для расчета длины катушки',
    bundleWidthRequired: 'Необходимо указать ширину пучка для расчета длины катушки',
    pipeLengthRequired: 'Необходимо указать длину трубы для расчета конечной позиции',
    pipesPerLayerRequired: 'Необходимо указать количество труб на слой для расчета конечной позиции',
    calculationFailed: 'Расчет не удался',
    invalidNumber: 'Недействительно'
  },
  errorBoundary: {
    title: 'Что-то пошло не так',
    description: 'Калькулятор столкнулся с неожиданной ошибкой. Пожалуйста, обновите страницу, чтобы повторить попытку.',
    refreshButton: 'Обновить страницу',
    errorDetails: 'Детали ошибки (Разработка)'
  },
  layout: {
    productCalculator: 'Калькулятор продукции',
    headerSubtitle: 'Профессиональные расчеты катушек',
    headerDescription: 'Длина намотки и конечное положение',
    quickLinks: 'Быстрые ссылки',
    madeWithLove: 'Сделано с ❤️ для производства',
    companyInfo: 'Ваш партнер по профессиональным экструзионным системам и расчетам продукции в области переработки пластмасс.',
    visitWebsite: 'Посетить сайт',
    originalCalculator: 'Оригинальный калькулятор продукции',
    ourProducts: 'Наши продукты',
    contact: 'Контакт',
    aboutCalculator: 'Об этом калькуляторе',
    aboutDescription: 'Прогрессивное веб-приложение для мобильного и настольного использования. Оптимизировано для профессиональных пользователей в производстве.',
    version: 'Версия 1.0.0 • PWA Ready',
    copyright: '© 2024 GRAEWE GmbH. Все права защищены.',
    imprint: 'Выходные данные',
    privacy: 'Конфиденциальность'
  },
  provider: {
    contextError: 'useCalculator должен использоваться внутри CalculatorProvider'
  },

  calculator: {
    title: 'Калькулятор GRAEWE',
    subtitle: 'Расчет длины намотки и конечного положения для труб и профилей',
    selectCalculationType: 'Выберите тип расчета',
    coilLength: 'Длина намотки',
    coilLengthDescription: 'Расчет максимальной длины трубы',
    endPosition: 'Конечное положение',
    endPositionDescription: 'Расчет конечного положения',
    basicParameters: 'Основные параметры',
    pipeDiameter: 'Диаметр трубы d [мм]',
    innerDiameter: 'Внутренний диаметр ID [мм]',
    outerDiameter: 'Внешний диаметр OD [мм]',
    bundleWidth: 'Ширина пучка W [мм]',
    pipeLength: 'Длина L [м]',
    pipesPerLayer: 'Труб на слой [шт]',
    coilingMethod: 'Метод намотки',
    unevenLayers: 'Неравные слои',
    unevenLayersDescription: 'Переменное количество труб на слой',
    evenLayersOffset: 'Равные слои со смещением',
    evenLayersOffsetDescription: 'Постоянное количество труб, со смещением',
    calculate: 'Рассчитать',
    calculating: 'Расчет...',
    reset: 'Сбросить',
    readyToCalculate: 'Готов к расчету',
    readyToCalculateDescription: 'Введите необходимые параметры для начала расчета',
    calculationError: 'Ошибка расчета',
    calculationSuccess: 'Расчет выполнен успешно',
    results: 'Результаты',
    coilLengthResult: 'Длина намотки',
    numberOfLayers: 'Количество слоев i [шт]',
    pipesOnLastLayer: 'Труб на последнем слое ni [шт]',
    numberOfRotations: 'Количество оборотов r [шт]',
    bundleHeight: 'Высота пучка H [мм]',
    disclaimer: 'Расчетные длины намотки могут отличаться до 10%. Мы не несем ответственности за точность результатов.',
    disclaimerTitle: 'Примечание'
  }
}
