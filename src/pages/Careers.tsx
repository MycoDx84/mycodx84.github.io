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
    processDescription: '지원서 등록 후 채용 수요와 직무 적합성에 따라 아래와 같이 검토가 진행됩니다.',
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
    title: 'Join us in creating\nnew possibilities',
    lead: 'MycoDx researches biotechnology, in vitro diagnostics, and healthcare technologies centered on infectious-disease diagnostics. We aim to grow with people who bring expertise and fresh perspectives.',
    heroAlt: 'The MycoDx team reviewing research results together',
    introLabel: 'Why MycoDx',
    introTitle: 'Our talent pool is open\nbeyond specific hiring periods.',
    introBody: 'You are welcome to apply even when no position is currently open. When a hiring need arises, we review each applicant’s education, experience, research background, and role fit, then contact suitable candidates individually.',
    fieldsLabel: 'Application Areas',
    fieldsTitle: 'Areas of opportunity',
    fieldsDescription: 'We welcome people with diverse expertise—from research and product development to manufacturing, quality, and the convergence of new technologies and industries.',
    fields: [
      ['Bio & IVD Research and Development', 'Research and product development in biotechnology and in vitro diagnostics, with a focus on infectious-disease diagnostics'],
      ['Manufacturing & Quality', 'Product manufacturing, quality management, and operations supporting a reliable product supply'],
      ['Healthcare Convergence Technology', 'Convergence of biotechnology with data, software, and other emerging technologies'],
      ['Other Business Functions', 'Business development, operations, and other functions supporting the growth of MycoDx'],
    ],
    processLabel: 'Talent Pool Journey',
    processTitle: 'How the talent pool works',
    processDescription: 'After registration, applications are reviewed according to hiring needs and suitability for relevant roles.',
    steps: [
      ['01', 'Share your profile', 'Tell us about your experience and interests.'],
      ['02', 'Profile review', 'We review the information you provide.'],
      ['03', 'Opportunity match', 'We contact you when a relevant role opens.'],
      ['04', 'Hiring process', 'We guide you through the process for that role.'],
    ],
    notice: 'Joining the talent pool does not guarantee an open position or a hiring process.',
    ctaEyebrow: 'Stay connected',
    ctaTitle: 'Let’s explore what comes next\nwith MycoDx.',
    ctaBody: 'Prepare your application documents and submit them through our online form.',
    ctaButton: 'Apply now',
  },
  fr: {
    kicker: 'Carrières · Vivier de talents',
    title: 'Créons ensemble\nde nouvelles possibilités',
    lead: 'MycoDx mène des recherches en biotechnologie, diagnostic in vitro et technologies de santé, centrées sur le diagnostic des maladies infectieuses. Nous souhaitons évoluer avec des talents qui apportent expertise et regard neuf.',
    heroAlt: "L’équipe MycoDx examine ensemble des résultats de recherche",
    introLabel: 'Pourquoi MycoDx',
    introTitle: 'Notre vivier de talents reste ouvert\nau-delà des périodes de recrutement.',
    introBody: "Vous pouvez postuler même lorsqu’aucun poste n’est actuellement ouvert. Lorsqu’un besoin apparaît, nous examinons la formation, l’expérience, le parcours de recherche et l’adéquation au poste, puis contactons individuellement les profils correspondants.",
    fieldsLabel: 'Domaines de candidature',
    fieldsTitle: 'Domaines d’opportunité',
    fieldsDescription: 'Nous recherchons des profils variés, de la R&D et l’industrialisation à la production, la qualité et la convergence de nouvelles technologies.',
    fields: [
      ['R&D en biotechnologie et diagnostic in vitro', 'Recherche et développement de produits en biotechnologie et diagnostic in vitro, centrés sur les maladies infectieuses'],
      ['Production & Qualité', 'Fabrication, gestion de la qualité et opérations assurant un approvisionnement fiable'],
      ['Technologies convergentes en santé', 'Convergence de la biotechnologie avec les données, les logiciels et les technologies émergentes'],
      ['Autres fonctions', 'Développement commercial, opérations et autres fonctions contribuant à la croissance de MycoDx'],
    ],
    processLabel: 'Parcours du vivier',
    processTitle: 'Comment fonctionne le vivier',
    processDescription: 'Après l’enregistrement, les candidatures sont examinées selon les besoins de recrutement et l’adéquation aux postes concernés.',
    steps: [
      ['01', 'Dépôt du profil', 'Présentez-nous votre expérience et vos intérêts.'],
      ['02', 'Étude du profil', 'Nous examinons les informations transmises.'],
      ['03', 'Mise en relation', 'Nous vous contactons lorsqu’une opportunité correspond.'],
      ['04', 'Processus de recrutement', 'Nous vous présentons les prochaines étapes.'],
    ],
    notice: "L’inscription au vivier ne garantit ni un poste ouvert ni le lancement d’un recrutement.",
    ctaEyebrow: 'Restons en contact',
    ctaTitle: 'Imaginons la suite\navec MycoDx.',
    ctaBody: 'Préparez vos documents et envoyez votre candidature via notre formulaire en ligne.',
    ctaButton: 'Postuler',
  },
  ja: {
    kicker: '採用 · タレントプール',
    title: '新たな可能性を\nともにつくる仲間を募集します',
    lead: 'MycoDxは感染症診断を中心に、バイオ・体外診断・ヘルスケア技術を研究しています。各分野の専門性と新しい視点を持つ方とともに成長していきたいと考えています。',
    heroAlt: '研究結果をともに確認するMycoDxチーム',
    introLabel: 'Why MycoDx',
    introTitle: '採用時期に限らず\n常時タレントプールを運営しています。',
    introBody: '現在募集中のポジションがない場合でも、いつでもご応募いただけます。採用ニーズが発生した際に、専攻・経歴・研究経験・職務適性を確認し、適した方へ個別にご連絡します。',
    fieldsLabel: '応募分野',
    fieldsTitle: '募集分野',
    fieldsDescription: '研究開発から製品化、生産・品質、新技術と産業の融合まで、幅広い専門性を持つ方を募集しています。',
    fields: [
      ['バイオ・体外診断研究開発', '感染症診断を中心としたバイオ・体外診断技術の研究および製品開発'],
      ['生産・品質', '製品の生産、品質管理、安定供給を支える運営'],
      ['ヘルスケア融合技術', 'バイオ技術とデータ・ソフトウェアなど新しい技術との融合'],
      ['その他事業', '事業開発、運営、その他MycoDxの成長に必要な分野'],
    ],
    processLabel: 'Talent Pool Journey',
    processTitle: 'タレントプールの流れ',
    processDescription: '登録後、採用ニーズと職務適性に応じて以下の流れで確認を行います。',
    steps: [
      ['01', 'プロフィール登録', 'ご経験と関心分野をお知らせください。'],
      ['02', '内容確認', 'お送りいただいた情報を確認します。'],
      ['03', 'ポジション照合', '適した機会が生まれた際にご連絡します。'],
      ['04', '選考のご案内', 'ポジションに応じた次のステップをご案内します。'],
    ],
    notice: 'タレントプールへの登録は、採用や選考の開始を保証するものではありません。',
    ctaEyebrow: 'Stay connected',
    ctaTitle: 'MycoDxとつくる\n次の可能性へ。',
    ctaBody: '必要書類をご準備のうえ、オンラインフォームからご応募ください。',
    ctaButton: '応募する',
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
          <div><h2>{content.processTitle}</h2><p>{content.processDescription}</p></div>
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
