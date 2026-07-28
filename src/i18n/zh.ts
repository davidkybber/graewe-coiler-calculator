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
    privacy: '隐私',
    company: '公司',
    products: '产品',
    service: '服务',
    social: '社交媒体',
    language: '语言',
    whoIsGraewe: 'GRAEWE是谁？',
    whatDoesGraewe: 'GRAEWE做什么？',
    graeweGroup: 'GRAEWE集团',
    pipeExtrusion: '管材挤出',
    profileExtrusion: '型材挤出',
    sheetExtrusion: '板材挤出',
    news: '新闻',
    usedMachines: '二手机械',
    downloads: '下载',
    visitWebsiteCta: '在graewe.com上探索我们的产品系列',
    goToWebsite: '前往网站'
  },
  share: {
    button: '分享',
    title: '分享配置',
    description: '此链接将使用您当前的数值和语言打开计算器。',
    copy: '复制链接',
    copied: '已复制！'
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
    unevenLayersDiagramAlt: '不均匀层卷绕图 – 显示管道直径 (d)、内径 (ID)、外径 (OD) 和束宽 (W)',
    evenLayersOffset: '均匀层偏移',
    evenLayersOffsetDescription: '管道数量恒定，偏移',
    evenLayersOffsetDiagramAlt: '均匀层偏移卷绕图 – 显示管道直径 (d)、内径 (ID)、外径 (OD) 和束宽 (W)',
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
  },

  seo: {
    title: '管材盘卷长度计算器 | GRAEWE Coiler Calculator',
    description:
      '免费在线计算管材和型材的盘卷长度与收卷终止位置：层数、每层管数、盘卷高度和外径，输入参数即可立即得出结果。',
    keywords: '盘卷长度计算, 收卷终止位置, 管材收卷机, 盘卷宽度, 管材挤出, GRAEWE',
    heading: '管材与型材盘卷长度计算器',
    aboutTitle: '关于 GRAEWE 盘卷计算器',
    aboutIntro:
      'GRAEWE Coiler Calculator 用于计算管材和型材在收卷时的盘卷长度与收卷终止位置。计算依据与 GRAEWE 收卷机相同的公式：各层按六方密排排列，层高为 d × √3/2，并按每一层的三维螺旋线长度累加。所有尺寸以毫米输入，盘卷长度以米输出，可直接在浏览器中使用，无需安装，并支持离线使用。',
    faq1Question: '什么是盘卷长度？',
    faq1Answer:
      '盘卷长度是指在给定内径 (ID)、外径 (OD) 和盘卷宽度 (W) 的条件下，一个盘卷所能容纳的最大管材或型材长度。计算器逐层排布，直到达到外径为止，并将各层的螺旋线长度相加。',
    faq2Question: '什么是收卷终止位置？',
    faq2Answer:
      '收卷终止位置表示已知长度 (L) 的管材在盘卷上的结束位置。计算器给出层数 (i)、最后一层的管数 (ni)、旋转圈数 (r)，以及由此得出的盘卷高度 (H) 和外径。',
    faq3Question: '不等层与等层错排有什么区别？',
    faq3Answer:
      '在“不等层”方式中，每层管数在 n 与 n−1 之间交替，使下一层的管材落入上一层的间隙中。在“等层错排”方式中，每层管数保持不变，各层错开半个管径。收卷方式会影响可用盘卷宽度和可达到的盘卷长度。',
    faq4Question: '需要输入哪些参数？',
    faq4Answer:
      '计算盘卷长度需要：管径 (d)、内径 (ID)、外径 (OD) 和盘卷宽度 (W)。计算终止位置需要：管径 (d)、长度 (L)、内径 (ID) 和每层管数。计算结果可能存在最多 10% 的偏差。',
    noscript: '交互式计算需要 JavaScript，请在浏览器中启用 JavaScript。'
  }
}
