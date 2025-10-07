/**
 * Chinese (中文) translations for GRAEWE Coiler Calculator
 */

import { TranslationKeys } from './de'

export const zh: TranslationKeys = {
  errors: {
    unknownCalculationError: '未知计算错误',
    missingParamsCoilLength: '线圈长度计算缺少必需参数',
    missingParamsEndPosition: '末端位置计算缺少必需参数',
    pipeDiameterGreaterThanZero: '管道直径必须大于0',
    innerDiameterGreaterThanZero: '内径必须大于0',
    pipeDiameterSmallerThanInner: '管道直径必须小于内径',
    outerDiameterGreaterThanInner: '线圈长度计算时外径必须大于内径',
    bundleWidthRequired: '线圈长度计算必须指定束宽',
    pipeLengthRequired: '末端位置计算必须指定管道长度',
    pipesPerLayerRequired: '末端位置计算必须指定每层管道数',
    calculationFailed: '计算失败',
    invalidNumber: '无效'
  },
  errorBoundary: {
    title: '出现错误',
    description: '计算器遇到意外错误。请刷新页面重试。',
    refreshButton: '刷新页面',
    errorDetails: '错误详情（开发）'
  },
  layout: {
    productCalculator: '产品计算器',
    headerSubtitle: '专业线圈计算',
    headerDescription: '线圈长度和最终位置',
    quickLinks: '快速链接',
    madeWithLove: '用❤️为制造业打造',
    companyInfo: '您在塑料加工领域的专业挤出系统和产品计算合作伙伴。',
    visitWebsite: '访问网站',
    originalCalculator: '原始产品计算器',
    ourProducts: '我们的产品',
    contact: '联系方式',
    aboutCalculator: '关于此计算器',
    aboutDescription: '适用于移动和桌面使用的渐进式网络应用。为制造业专业用户优化。',
    version: '版本 1.0.0 • PWA Ready',
    copyright: '© 2024 GRAEWE GmbH. 保留所有权利。',
    imprint: '版本说明',
    privacy: '隐私'
  },
  provider: {
    contextError: 'useCalculator 必须在 CalculatorProvider 内使用'
  },

  calculator: {
    title: 'GRAEWE 产品计算器',
    subtitle: '计算管道和型材的线圈长度和最终位置',
    selectCalculationType: '选择计算类型',
    coilLength: '线圈长度',
    coilLengthDescription: '计算最大管道长度',
    endPosition: '最终位置',
    endPositionDescription: '计算最终位置',
    basicParameters: '基本参数',
    pipeDiameter: '管道直径 d [mm]',
    innerDiameter: '内径 ID [mm]',
    outerDiameter: '外径 OD [mm]',
    bundleWidth: '束宽 W [mm]',
    pipeLength: '长度 L [m]',
    pipesPerLayer: '每层管道数 [个]',
    coilingMethod: '卷绕方法',
    unevenLayers: '不均匀层',
    unevenLayersDescription: '每层管道数量可变',
    evenLayersOffset: '均匀层偏移',
    evenLayersOffsetDescription: '管道数量恒定，偏移',
    calculate: '计算',
    calculating: '计算中...',
    reset: '重置',
    readyToCalculate: '准备计算',
    readyToCalculateDescription: '输入所需参数以开始计算',
    calculationError: '计算错误',
    calculationSuccess: '计算成功',
    results: '结果',
    coilLengthResult: '线圈长度',
    numberOfLayers: '层数 i [个]',
    pipesOnLastLayer: '最后一层管道数 ni [个]',
    numberOfRotations: '旋转次数 r [个]',
    bundleHeight: '束高 H [mm]',
    disclaimer: '计算的线圈长度可能有高达10%的偏差。我们对结果的准确性不承担任何责任。',
    disclaimerTitle: '注意'
  }
}
