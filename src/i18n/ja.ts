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
    privacy: 'プライバシー',
    company: '会社',
    products: '製品',
    service: 'サービス',
    social: 'ソーシャル',
    language: '言語',
    whoIsGraewe: 'GRAEWEとは？',
    whatDoesGraewe: 'GRAEWEは何をしているか？',
    graeweGroup: 'GRAEWEグループ',
    pipeExtrusion: 'パイプ押出',
    profileExtrusion: 'プロファイル押出',
    sheetExtrusion: 'シート押出',
    news: 'ニュース',
    usedMachines: '中古機械',
    downloads: 'ダウンロード',
    visitWebsiteCta: 'graewe.comで製品ラインナップをご覧ください',
    goToWebsite: 'ウェブサイトへ'
  },
  share: {
    button: '共有',
    title: '設定を共有',
    description: 'このリンクを開くと、現在の数値と言語で計算機が開きます。',
    copy: 'リンクをコピー',
    copied: 'コピーしました！'
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
    unevenLayersDiagramAlt: '不均一層の巻き線図 – パイプ径 (d)、内径 (ID)、外径 (OD)、束幅 (W) を示す',
    evenLayersOffset: '均一な層オフセット',
    evenLayersOffsetDescription: 'パイプ数が一定、オフセット',
    evenLayersOffsetDiagramAlt: '均一層オフセットの巻き線図 – パイプ径 (d)、内径 (ID)、外径 (OD)、束幅 (W) を示す',
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
  },

  seo: {
    title: 'パイプ巻取り長さ計算ツール | GRAEWE Coiler Calculator',
    description:
      'パイプ・プロファイルの巻取り長さと巻取り終了位置を無料で計算するオンラインツール。層数、1層あたりの本数、バンドル高さ、外径をすぐに算出します。',
    keywords: '巻取り長さ 計算, 巻取り終了位置, パイプコイラー, バンドル幅, パイプ押出, GRAEWE',
    heading: 'パイプ・プロファイルの巻取り長さ計算ツール',
    aboutTitle: 'GRAEWE 巻取り計算ツールについて',
    aboutIntro:
      'GRAEWE Coiler Calculator は、パイプやプロファイルを巻き取る際の巻取り長さと巻取り終了位置を計算します。GRAEWE のコイラーと同じ計算式（層を六方最密で積み上げ、層の高さは d × √3/2、各層の三次元ヘリックス長を合計）を使用しています。寸法はすべてミリメートルで入力し、巻取り長さはメートルで表示されます。ブラウザーで直接動作し、インストール不要でオフラインでも利用できます。',
    faq1Question: '巻取り長さとは何ですか？',
    faq1Answer:
      '巻取り長さとは、内径 (ID)、外径 (OD)、バンドル幅 (W) が与えられたときに、1 つのバンドルに収まるパイプまたはプロファイルの最大長さです。本ツールは外径に達するまで層を 1 層ずつ積み上げ、すべての層のヘリックス長を合計します。',
    faq2Question: '巻取り終了位置とは何ですか？',
    faq2Answer:
      '巻取り終了位置は、既知の長さ (L) のパイプがバンドル上のどこで終わるかを示します。層数 (i)、最終層の本数 (ni)、回転数 (r)、およびその結果得られるバンドル高さ (H) と外径が算出されます。',
    faq3Question: '不等層と等層オフセットの違いは何ですか？',
    faq3Answer:
      '「不等層」では 1 層あたりの本数が n と n−1 で交互に変わり、次の層のパイプが前の層の谷間に収まります。「等層オフセット」では 1 層あたりの本数が一定で、各層はパイプ半径分（直径の 1/2）ずらして巻かれます。巻取り方法は有効なバンドル幅と到達できる巻取り長さの両方に影響します。',
    faq4Question: 'どの入力値が必要ですか？',
    faq4Answer:
      '巻取り長さの計算には、パイプ径 (d)、内径 (ID)、外径 (OD)、バンドル幅 (W) が必要です。終了位置の計算には、パイプ径 (d)、長さ (L)、内径 (ID)、1 層あたりの本数が必要です。計算値は最大 10% 程度異なる場合があります。',
    noscript: 'インタラクティブな計算には JavaScript が必要です。ブラウザーで JavaScript を有効にしてください。'
  }
}
