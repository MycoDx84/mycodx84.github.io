import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import careersTeamImage from '../assets/mycodx-careers-team-v2.jpg'

const careersContent = {
  ko: {
    kicker: 'Careers · Talent Pool',
    title: '함께 새로운 가능성을\n만들어갈 인재를 기다립니다.',
    lead: '마이코디엑스는 감염병 진단을 중심으로 바이오·체외진단·헬스케어 기술을 연구하며, 각 분야의 전문성과 새로운 시각을 가진 인재와 함께 성장하고자 합니다.',
    heroAlt: '연구 결과를 함께 검토하는 MycoDx 팀',
    introLabel: 'Why MycoDx',
    introTitle: '채용 시기에 한정하지 않는\n상시 인재풀을 운영합니다.',
    introBody: '현재 진행 중인 채용이 없더라도 마이코디엑스와 함께하고 싶은 분은 언제든지 지원하실 수 있습니다. 향후 채용 수요가 발생하면 전공·경력·연구 경험 및 직무 적합성을 검토하여 적합한 분께 개별적으로 연락드립니다.',
    fieldsLabel: 'Application Areas',
    fieldsTitle: '지원 분야',
    fieldsDescription: '연구개발부터 제품화, 생산 및 품질, 새로운 기술과 산업의 융합까지 다양한 분야의 인재를 기다립니다.',
    fields: [
      ['바이오·체외진단 연구개발', '감염병 진단을 중심으로 한 바이오·체외진단 기술 연구 및 제품 개발'],
      ['생산·품질', '제품 생산, 품질관리 및 안정적인 제품 공급을 위한 운영'],
      ['헬스케어 융합기술', '바이오 기술과 데이터·소프트웨어 등 새로운 기술의 융합'],
      ['기타 사업', '사업개발, 운영 및 마이코디엑스의 성장에 필요한 다양한 분야'],
    ],
    processLabel: 'Talent Pool Journey',
    processTitle: '인재풀은 이렇게 운영됩니다',
    steps: [
      ['01', '프로필 등록', '경력과 관심 분야를 알려주세요.'],
      ['02', '인재풀 검토', '보내주신 정보를 안전하게 검토합니다.'],
      ['03', '포지션 매칭', '적합한 기회가 생기면 개별 연락드립니다.'],
      ['04', '채용 절차 안내', '포지션에 맞는 다음 절차를 안내합니다.'],
    ],
    notice: '인재풀 등록은 특정 포지션의 채용이나 전형 진행을 보장하지 않습니다.',
    ctaEyebrow: 'Stay connected',
    ctaTitle: '새로운 가능성을 함께 만들어가요.',
    ctaBody: '준비된 지원 서류와 함께 인재풀에 등록해 주세요.',
    ctaButton: '지원서 작성하기',
  },
  en: {
    kicker: 'Careers · Talent Pool',
    title: 'Build the next standard\nin diagnostics with us',
    lead: 'Even when no role is currently open, we welcome people who are interested in growing with MycoDx.',
    heroAlt: 'The MycoDx team reviewing research results together',
    introLabel: 'Why MycoDx',
    introTitle: 'Turning research potential\ninto real-world change.',
    introBody: 'MycoDx develops an integrated platform spanning the infectious-disease diagnostic journey. We bring different disciplines together to create faster, more precise diagnostic experiences.',
    fieldsLabel: 'Opportunity Areas',
    fieldsTitle: 'Where you could join us',
    fieldsDescription: 'When future roles open in these areas, we plan to review relevant talent-pool profiles first.',
    fields: [
      ['Research & Development', 'Research in microbial culture, molecular diagnostics, drug-resistance analysis, and image-based diagnostics'],
      ['Engineering & Product', 'Connecting diagnostic instruments, software, data, and product experiences'],
      ['Business & Operations', 'Bringing research into practice through business development, regulatory, quality, and operations'],
    ],
    processLabel: 'Talent Pool Journey',
    processTitle: 'How the talent pool works',
    steps: [
      ['01', 'Share your profile', 'Tell us about your experience and interests.'],
      ['02', 'Profile review', 'We review the information you provide.'],
      ['03', 'Opportunity match', 'We contact you when a relevant role opens.'],
      ['04', 'Hiring process', 'We guide you through the process for that role.'],
    ],
    notice: 'Joining the talent pool does not guarantee an open position or a hiring process.',
    ctaEyebrow: 'Stay connected',
    ctaTitle: 'Let’s explore what comes next\nwith MycoDx.',
    ctaBody: 'Detailed information and talent-pool registration are being prepared.',
    ctaButton: 'Registration coming soon',
  },
  fr: {
    kicker: 'Carrières · Vivier de talents',
    title: 'Construisons ensemble\nle diagnostic de demain',
    lead: 'Même sans poste ouvert aujourd’hui, nous souhaitons rencontrer les personnes qui aimeraient évoluer avec MycoDx.',
    heroAlt: "L’équipe MycoDx examine ensemble des résultats de recherche",
    introLabel: 'Pourquoi MycoDx',
    introTitle: 'Transformer le potentiel scientifique\nen progrès concret.',
    introBody: "MycoDx développe une plateforme intégrée couvrant le parcours du diagnostic des maladies infectieuses. Nous réunissons des expertises diverses pour rendre le diagnostic plus rapide et plus précis.",
    fieldsLabel: 'Domaines',
    fieldsTitle: 'Les domaines où nous rejoindre',
    fieldsDescription: 'Lors de futures ouvertures, les profils pertinents du vivier pourront être examinés en priorité.',
    fields: [
      ['Recherche & Développement', 'Culture microbienne, diagnostic moléculaire, résistance aux médicaments et diagnostic par imagerie'],
      ['Ingénierie & Produit', 'Développement reliant instruments, logiciels, données et expérience produit'],
      ['Business & Opérations', 'Déploiement des innovations par le développement commercial, le réglementaire, la qualité et les opérations'],
    ],
    processLabel: 'Parcours du vivier',
    processTitle: 'Comment fonctionne le vivier',
    steps: [
      ['01', 'Dépôt du profil', 'Présentez-nous votre expérience et vos intérêts.'],
      ['02', 'Étude du profil', 'Nous examinons les informations transmises.'],
      ['03', 'Mise en relation', 'Nous vous contactons lorsqu’une opportunité correspond.'],
      ['04', 'Processus de recrutement', 'Nous vous présentons les prochaines étapes.'],
    ],
    notice: "L’inscription au vivier ne garantit ni un poste ouvert ni le lancement d’un recrutement.",
    ctaEyebrow: 'Restons en contact',
    ctaTitle: 'Imaginons la suite\navec MycoDx.',
    ctaBody: "Les modalités détaillées et l’inscription au vivier sont en préparation.",
    ctaButton: 'Ouverture prochaine',
  },
  ja: {
    kicker: '採用 · タレントプール',
    title: '次の診断基準を\nともにつくる仲間へ',
    lead: '現在募集中のポジションがない場合でも、MycoDxとともに成長したい方との出会いを大切にしています。',
    heroAlt: '研究結果をともに確認するMycoDxチーム',
    introLabel: 'Why MycoDx',
    introTitle: '研究の可能性を\n現場の変化へつなげます。',
    introBody: 'MycoDxは感染症診断の全プロセスをつなぐ統合診断プラットフォームを開発しています。異なる専門性を結集し、より迅速で正確な診断体験を目指します。',
    fieldsLabel: 'Opportunity Areas',
    fieldsTitle: '活躍いただける分野',
    fieldsDescription: '今後、以下の分野でポジションがオープンした際に、タレントプール登録者を優先的に検討する予定です。',
    fields: [
      ['Research & Development', '微生物培養、分子診断、薬剤耐性解析、画像診断技術の研究'],
      ['Engineering & Product', '診断機器、ソフトウェア、データ、製品体験をつなぐ開発'],
      ['Business & Operations', '事業開発、薬事、品質、運営を通じた研究成果の実用化支援'],
    ],
    processLabel: 'Talent Pool Journey',
    processTitle: 'タレントプールの流れ',
    steps: [
      ['01', 'プロフィール登録', 'ご経験と関心分野をお知らせください。'],
      ['02', '内容確認', 'お送りいただいた情報を確認します。'],
      ['03', 'ポジション照合', '適した機会が生まれた際にご連絡します。'],
      ['04', '選考のご案内', 'ポジションに応じた次のステップをご案内します。'],
    ],
    notice: 'タレントプールへの登録は、採用や選考の開始を保証するものではありません。',
    ctaEyebrow: 'Stay connected',
    ctaTitle: 'MycoDxとつくる\n次の可能性へ。',
    ctaBody: '詳細な募集案内とタレントプールの登録方法を準備しています。',
    ctaButton: '近日受付開始',
  },
} as const

export default function Careers() {
  const { i18n } = useTranslation()
  const language = (i18n.resolvedLanguage ?? i18n.language).split('-')[0]
  const content = careersContent[language as keyof typeof careersContent] ?? careersContent.ko
  return (
    <div className="careers-page">
      <header className="careers-hero">
        <div className="careers-hero__copy">
          <p className="careers-kicker">{content.kicker}</p>
          <h1>
            {language === 'ko' ? (
              <><span>함께 <strong>새로운 가능성</strong>을</span><span>만들어갈 인재를 기다립니다.</span></>
            ) : content.title.split('\n').map((line) => <span key={line}>{line}</span>)}
          </h1>
          <p className="careers-hero__lead">{content.lead}</p>
          <div className="careers-hero__actions">
            <Link to="/careers/apply">{content.ctaButton}<span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <figure className="careers-hero__visual">
          <img src={careersTeamImage} alt={content.heroAlt} />
        </figure>
      </header>

      <section className="careers-intro" id="talent-pool">
        <p className="careers-section-label"><b>01</b>{content.introLabel}</p>
        <div>
          <h2>
            {language === 'ko' ? (
              <><span>채용 시기에 한정하지 않는</span><span><strong>상시 인재풀을 운영</strong>합니다.</span></>
            ) : content.introTitle.split('\n').map((line) => <span key={line}>{line}</span>)}
          </h2>
          <div className="careers-intro__body">
            <p>
              {language === 'ko' ? (
                <>현재 진행 중인 채용이 없더라도 마이코디엑스와 함께하고 싶은 분은 언제든지 지원하실 수 있습니다. 향후 채용 수요가 발생하면 전공·경력·연구 경험 및 직무 적합성을 검토하여 <strong>적합한 분께 개별적으로 연락드립니다.</strong></>
              ) : content.introBody}
            </p>
            <small>{content.notice}</small>
          </div>
        </div>
      </section>

      <section className="careers-fields" id="career-fields">
        <div className="careers-section-heading">
          <p className="careers-section-label"><b>02</b>{content.fieldsLabel}</p>
          <div><h2>{content.fieldsTitle}</h2><p>{content.fieldsDescription}</p></div>
        </div>
        <div className="careers-field-grid">
          {content.fields.map(([title, description], index) => (
            <article key={title} className="careers-field-card">
              <span>0{index + 1}</span><h3>{title}</h3><p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="careers-process" id="talent-process">
        <div className="careers-section-heading">
          <p className="careers-section-label"><b>03</b>{content.processLabel}</p>
          <div><h2>{content.processTitle}</h2><p>지원서 등록 후 채용 수요와 직무 적합성에 따라 아래와 같이 검토가 진행됩니다.</p></div>
        </div>
        <ol>
          {content.steps.map(([number, title, description]) => (
            <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></li>
          ))}
        </ol>
      </section>

      <section className="careers-cta">
        <p>{content.ctaEyebrow}</p>
        <h2>{content.ctaTitle.split('\n').map((line) => <span key={line}>{line}</span>)}</h2>
        <span>{content.ctaBody}</span>
        <Link to="/careers/apply">{content.ctaButton}</Link>
      </section>
    </div>
  )
}
