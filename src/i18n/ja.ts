/**
 * Japanese (日本語) translations for GRAEWE Coiler Calculator
 */

import { TranslationKeys } from './de'

export const ja: TranslationKeys = {
  errors: {
    unknownCalculationError: '不明な計算エラー',
    missingParamsCoilLength: 'コイル長計算に必要なパラメータが不足しています',
    missingParamsEndPosition: '終端位置計算に必要なパラメータが不足しています',
    pipeDiameterGreaterThanZero: 'パイプ直径は0より大きくする必要があります',
    innerDiameterGreaterThanZero: '内径は0より大きくする必要があります',
    pipeDiameterSmallerThanInner: 'パイプ直径は内径より小さくする必要があります',
    outerDiameterGreaterThanInner: 'コイル長計算では外径が内径より大きくする必要があります',
    bundleWidthRequired: 'コイル長計算にはバンドル幅を指定する必要があります',
    pipeLengthRequired: '終端位置計算にはパイプ長を指定する必要があります',
    pipesPerLayerRequired: '終端位置計算には層あたりのパイプ数を指定する必要があります',
    calculationFailed: '計算に失敗しました',
    invalidNumber: '無効'
  },
  errorBoundary: {
    title: '問題が発生しました',
    description: '計算機で予期しないエラーが発生しました。ページを更新して再試行してください。',
    refreshButton: 'ページを更新',
    errorDetails: 'エラー詳細（開発）'
  },
  layout: {
    productCalculator: '製品計算機',
    headerSubtitle: 'プロフェッショナルコイル計算',
    headerDescription: 'コイル長さと最終位置',
    quickLinks: 'クイックリンク',
    madeWithLove: '製造業のために❤️で作成',
    companyInfo: 'プラスチック加工における専門的な押出システムと製品計算のパートナー。',
    visitWebsite: 'ウェブサイトを訪問',
    originalCalculator: 'オリジナル製品計算機',
    ourProducts: '当社の製品',
    contact: '連絡先',
    aboutCalculator: 'この計算機について',
    aboutDescription: 'モバイルおよびデスクトップ使用のためのプログレッシブウェブアプリ。製造業の専門ユーザー向けに最適化。',
    version: 'バージョン 1.0.0 • PWA Ready',
    copyright: '© 2024 GRAEWE GmbH. 全著作権所有。',
    imprint: 'インプリント',
    privacy: 'プライバシー'
  },
  provider: {
    contextError: 'useCalculatorはCalculatorProvider内で使用する必要があります'
  },

  calculator: {
    title: 'GRAEWE製品計算機',
    subtitle: 'パイプおよびプロファイルのコイル長さと最終位置の計算',
    selectCalculationType: '計算タイプを選択',
    coilLength: 'コイル長さ',
    coilLengthDescription: '最大パイプ長の計算',
    endPosition: '最終位置',
    endPositionDescription: '最終位置の計算',
    basicParameters: '基本パラメータ',
    pipeDiameter: 'パイプ直径 d [mm]',
    innerDiameter: '内径 ID [mm]',
    outerDiameter: '外径 OD [mm]',
    bundleWidth: 'バンドル幅 W [mm]',
    pipeLength: '長さ L [m]',
    pipesPerLayer: '層あたりのパイプ数 [個]',
    coilingMethod: '巻き方法',
    unevenLayers: '不均一な層',
    unevenLayersDescription: '層ごとのパイプ数が可変',
    evenLayersOffset: '均一な層オフセット',
    evenLayersOffsetDescription: 'パイプ数が一定、オフセット',
    calculate: '計算',
    calculating: '計算中...',
    reset: 'リセット',
    readyToCalculate: '計算準備完了',
    readyToCalculateDescription: '計算を開始するために必要なパラメータを入力してください',
    calculationError: '計算エラー',
    calculationSuccess: '計算成功',
    results: '結果',
    coilLengthResult: 'コイル長さ',
    numberOfLayers: '層数 i [個]',
    pipesOnLastLayer: '最終層のパイプ数 ni [個]',
    numberOfRotations: '回転数 r [個]',
    bundleHeight: 'バンドル高さ H [mm]',
    disclaimer: '計算されたコイル長さは最大10%変動する可能性があります。結果の正確性について当社は一切の責任を負いません。',
    disclaimerTitle: '注意'
  }
}
