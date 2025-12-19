export const lawyers = {
    partners: [
        { id: 'takemura', name: '竹村 葉子', role: 'パートナー' },
        { id: 'aiba', name: '相羽 利昭', role: 'パートナー' },
        { id: 'odagiri', name: '小田切 豪', role: 'パートナー' },
        { id: 'iwashita', name: '岩下 明弘', role: 'パートナー' },
        { id: 'minomo', name: '蓑毛 良和', role: 'パートナー' },
        { id: 'shiho', name: '志甫 治宣', role: 'パートナー' },
        { id: 'ichikawa', name: '市川 浩行', role: 'パートナー' },
    ],
    associates: [
        { id: 'hayashi', name: '林 直美', role: 'アソシエイト' },
        { id: 'kubo', name: '久保 拓海', role: 'アソシエイト' },
        { id: 'sugimura', name: '椙村 昂平', role: 'アソシエイト' },
        { id: 'kasagi', name: '笠木 秀竜', role: 'アソシエイト' },
        { id: 'kono', name: '河野 力也', role: 'アソシエイト' },
        { id: 'tamura', name: '田村 雅経', role: 'アソシエイト' },
    ],
}

export const caseStudies = [
    {
        year: '1980',
        company: '吉野家',
        type: '会社更生',
        description: '急成長に伴う資金繰り悪化から会社更生法を申請。更生債権の全額返済を達成。',
    },
    {
        year: '1984',
        company: '大沢商会',
        type: '会社更生',
        description: '戦後3番目の規模となる1,250億円の負債を抱えて会社更生法を申請。再建を実現。',
    },
    {
        year: '1997',
        company: '京樽',
        type: '会社更生',
        description: '1,013億円の負債を抱えて会社更生法適用。保全管理人補佐・管財人補佐として再建を支援。',
    },
    {
        year: '2023',
        company: 'アッシュ・ペー・フランス',
        type: '会社更生',
        description: 'インポートブランド小売業の会社更生事件。保全管理人として選任。',
    },
    {
        year: '2023',
        company: 'エクシア',
        type: '破産',
        description: '破産管財人として選任。証券取引等監視委員会が法改正を提言するきっかけとなった事件。',
    },
    {
        year: '2024',
        company: 'アリシアクリニック',
        type: '破産',
        description: '医療脱毛大手の破産事件。負債約124億円、債権者約9万人。破産管財人として選任。',
    },
]

export const publications = [
    {
        title: '破産申立マニュアル〔第3版〕',
        authors: '蓑毛良和・志甫治宣・小田切豪・市川浩行・岩下明弘',
        publisher: '商事法務',
        year: '2025',
    },
    {
        title: '中小企業の事業再生等に関するガイドラインのすべて〔第2版〕',
        authors: '蓑毛良和・小田切豪',
        publisher: '商事法務',
        year: '2025',
    },
    {
        title: '事業再生ファイナンスの実務',
        authors: '志甫治宣 ほか',
        publisher: 'きんざい',
        year: '2022',
    },
    {
        title: '倒産法の実践',
        authors: '池田靖・志甫治宣',
        publisher: '有斐閣',
        year: '2016',
    },
]

export const expertise = [
    {
        id: 'restructuring',
        title: '事業再生・倒産',
        items: ['会社更生手続', '民事再生手続', '破産手続', '特別清算手続', '私的整理', '事業再生ADR'],
    },
    {
        id: 'corporate',
        title: '会社法務',
        items: ['M&A・事業譲渡', '事業承継', 'コーポレート・ガバナンス', 'コンプライアンス'],
    },
    {
        id: 'litigation',
        title: '企業訴訟',
        items: ['商事関係訴訟', '不動産関係訴訟', '建築関係訴訟', '民事保全・執行'],
    },
    {
        id: 'court-appointed',
        title: '裁判所選任',
        items: ['破産管財人', '更生管財人', '監督委員', '検査役'],
    },
]

export const committees = [
    { year: '2019年', role: '法制審議会 民法・不動産登記法部会 幹事' },
    { year: '2020年〜', role: '日弁連 倒産法等検討委員会 委員' },
    { year: '2020年〜', role: '事業再生研究機構 専務理事' },
    { year: '2021年', role: '中小企業の事業再生等に関する研究会 委員' },
    { year: '2024年', role: '法務省「早期の事業再生の円滑化に関する新制度」検討会 委員' },
]
