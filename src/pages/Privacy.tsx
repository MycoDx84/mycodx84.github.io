import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'

const privacyContent = {
  ko: {
    kicker: 'Privacy',
    title: '개인정보 수집·이용 안내',
    intro: '주식회사 마이코디엑스는 홈페이지 문의에 답변하기 위해 필요한 최소한의 개인정보를 처리합니다.',
    close: '닫기',
    sections: [
      ['수집 항목', '필수: 성명, 이메일, 문의 유형, 문의 내용 · 선택: 소속'],
      ['이용 목적', '문의 내용 확인, 담당자 배정, 답변 및 후속 연락'],
      ['보유 및 이용 기간', '문의 처리 목적이 달성되면 지체 없이 파기합니다. 단, 관련 법령에 보관 의무가 있는 경우에는 해당 기간 동안 보관합니다.'],
      ['처리 및 전송', '홈페이지 문의 폼은 일시 중단되어, 문의는 info@mycodx.com으로 직접 보내는 이메일로 접수합니다. 민감정보는 문의 내용에 포함하지 마세요.'],
      ['동의 거부 권리', '개인정보 제공을 거부할 수 있으나, 답변에 필요한 정보가 없으면 문의 대응이 제한될 수 있습니다.'],
      ['문의처', '개인정보 관련 문의: info@mycodx.com'],
    ],
  },
  en: {
    kicker: 'Privacy',
    title: 'Privacy notice for website inquiries',
    intro: 'MycoDx Co., Ltd. processes only the personal information needed to respond to website inquiries.',
    close: 'Close',
    sections: [
      ['Information collected', 'Required: name, email, inquiry type, and message · Optional: organization'],
      ['Purpose of use', 'Reviewing inquiries, assigning the appropriate contact, responding, and following up'],
      ['Retention', 'Information is deleted without delay once the inquiry has been handled, unless applicable law requires retention for a specified period.'],
      ['Processing and transfer', 'The website inquiry form is temporarily unavailable. Inquiries are accepted by email sent directly to info@mycodx.com. Please do not include sensitive personal information in your message.'],
      ['Right to decline', 'You may decline to provide personal information, but we may be unable to respond without the information needed to handle your inquiry.'],
      ['Contact', 'Privacy inquiries: info@mycodx.com'],
    ],
  },
  fr: {
    kicker: 'Confidentialité',
    title: 'Avis de confidentialité pour les demandes en ligne',
    intro: 'MycoDx Co., Ltd. traite uniquement les données personnelles nécessaires pour répondre aux demandes envoyées depuis le site.',
    close: 'Fermer',
    sections: [
      ['Données collectées', "Obligatoires : nom, e-mail, type de demande et message · Facultative : organisation"],
      ["Finalité", "Examen de la demande, attribution au bon interlocuteur, réponse et suivi"],
      ['Conservation', "Les données sont supprimées sans délai après le traitement de la demande, sauf lorsqu'une durée de conservation est imposée par la loi."],
      ['Traitement et transmission', "Le formulaire en ligne est temporairement indisponible. Les demandes sont reçues par e-mail envoyé directement à info@mycodx.com. Veuillez ne pas inclure de données personnelles sensibles dans votre message."],
      ['Droit de refus', "Vous pouvez refuser de fournir des données personnelles, mais nous pourrions ne pas être en mesure de répondre sans les informations nécessaires au traitement de votre demande."],
      ['Contact', 'Questions relatives aux données personnelles : info@mycodx.com'],
    ],
  },
  ja: {
    kicker: 'Privacy',
    title: 'お問い合わせに関する個人情報の取扱い',
    intro: '株式会社MycoDxは、ウェブサイトからのお問い合わせに回答するために必要な最小限の個人情報を取り扱います。',
    close: '閉じる',
    sections: [
      ['収集項目', '必須：氏名、メールアドレス、お問い合わせ種別、お問い合わせ内容 · 任意：所属'],
      ['利用目的', 'お問い合わせ内容の確認、担当者の割り当て、回答および必要なご連絡'],
      ['保有期間', 'お問い合わせ対応の目的を達成した後、遅滞なく削除します。ただし、法令により保管が必要な場合は所定の期間保管します。'],
      ['処理および送信', 'ウェブサイトのお問い合わせフォームは一時停止中です。お問い合わせはinfo@mycodx.comへ直接送信するメールで受け付けています。機微な個人情報は含めないでください。'],
      ['同意を拒否する権利', '個人情報の提供を拒否できますが、回答に必要な情報がない場合はお問い合わせに対応できないことがあります。'],
      ['お問い合わせ先', '個人情報に関するお問い合わせ：info@mycodx.com'],
    ],
  },
} as const

export default function Privacy() {
  const { i18n } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const language = i18n.resolvedLanguage?.split('-')[0] ?? i18n.language.split('-')[0]
  const content = privacyContent[language as keyof typeof privacyContent] ?? privacyContent.ko
  const openedFromContact = Boolean((location.state as { fromContact?: boolean } | null)?.fromContact)

  const closePrivacy = () => {
    if (openedFromContact) {
      navigate(-1)
      return
    }

    navigate('/#contact')
  }

  return (
    <div className="editorial-page legal-page">
      <header className="editorial-page__header">
        <p>{content.kicker}</p>
        <h1>{content.title}</h1>
        <span>{content.intro}</span>
      </header>

      <div className="legal-page__content">
        {content.sections.map(([title, description]) => (
          <section key={title}>
            <h2>{title}</h2>
            <p>{description}</p>
          </section>
        ))}
        <button type="button" className="legal-page__close" onClick={closePrivacy}>
          <span aria-hidden="true">←</span>
          {content.close}
        </button>
      </div>
    </div>
  )
}
