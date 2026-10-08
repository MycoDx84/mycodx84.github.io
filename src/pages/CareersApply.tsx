import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const applicationAreas = ['바이오·체외진단 연구개발', '생산·품질', '헬스케어 융합기술', '기타 사업']
const CAREERS_ENDPOINT = 'https://formsubmit.co/jakim@mycodx.com'

export default function CareersApply() {
  const [searchParams] = useSearchParams()
  const [messageLength, setMessageLength] = useState(0)
  const submitted = searchParams.get('submitted') === 'true'
  const successUrl = `${window.location.origin}/careers/apply?submitted=true`

  return (
    <div className="careers-apply-page">
      <header className="careers-apply-header">
        <Link to="/careers">← 상시 인재풀 안내</Link>
        <p>Application Guide</p>
        <h1>지원서 작성</h1>
        <span>지원 안내를 확인한 후 입사지원서와 증빙서류를 제출해 주세요.</span>
      </header>

      <section className="careers-application">
        <form className="careers-form" action={CAREERS_ENDPOINT} method="POST" encType="multipart/form-data">
          {submitted && <div className="careers-form__success" role="status"><strong>지원서가 접수되었습니다.</strong><span>마이코디엑스 인재풀에 지원해 주셔서 감사합니다.</span></div>}
          <div className="careers-form__heading">
            <span>Application form</span>
            <h2>지원자 정보</h2>
            <p><i>*</i> 표시는 필수 입력 항목입니다. 제출 정보는 채용 검토를 위해 지원일로부터 1년간 보관·이용됩니다.</p>
          </div>
          <fieldset className="careers-form__areas"><legend>지원 분야 <i>*</i></legend><div>{applicationAreas.map((title, index) => <label key={title}><input type="radio" name="지원 분야" value={title} defaultChecked={index === 0} required /><span>{title}</span></label>)}</div></fieldset>
          <div className="careers-form__grid">
            <label><span>성명 <i>*</i></span><input name="성명" type="text" autoComplete="name" required /></label>
            <label><span>이메일 <i>*</i></span><input name="email" type="email" autoComplete="email" placeholder="email@example.com" required /></label>
            <label><span>연락처 <i>*</i></span><input name="연락처" type="tel" autoComplete="tel" placeholder="010-0000-0000" required /></label>
            <label><span>최종 학력 <i>*</i></span><select name="최종 학력" defaultValue="" required><option value="" disabled>선택해 주세요</option><option>학사</option><option>석사</option><option>박사</option><option>기타</option></select></label>
            <label className="careers-form__wide"><span>경력 구분 <i>*</i></span><select name="경력 구분" defaultValue="" required><option value="" disabled>선택해 주세요</option><option>신입</option><option>경력</option></select></label>
          </div>
          <label className="careers-form__message">
            <span>주요 경력 및 지원 내용</span>
            <textarea
              name="주요 경력 및 지원 내용"
              rows={6}
              maxLength={1000}
              placeholder="주요 경력, 연구 경험 및 관심 직무를 간략히 작성해 주세요."
              onChange={(event) => setMessageLength(event.currentTarget.value.length)}
            />
            <small><span>{messageLength.toLocaleString()}</span> / 1,000자</small>
          </label>
          <div className="careers-form__files">
            <div className="careers-form__files-heading">
              <div><h3>서류 첨부 <i>*</i></h3><p>PDF 또는 DOCX 형식으로 첨부해 주세요. 전체 파일 용량은 10MB 이하여야 하며, 민감정보가 포함된 불필요한 서류는 제출하지 마세요.</p></div>
              <a
                className="careers-download"
                href="/forms/MycoDx_상시채용지원서_동의서포함.docx"
                download="MycoDx_상시채용지원서_동의서포함.docx"
              >
                <span>자사 입사지원서 다운로드</span>
                <small>DOCX · 개인정보 동의서 포함</small>
              </a>
            </div>
            <label><span>자사 입사지원서 <i>*</i></span><input name="자사 입사지원서" type="file" accept=".pdf,.doc,.docx" required /></label>
            <label><span>학위 증명서 <i>*</i></span><input name="학위 증명서" type="file" accept=".pdf,.zip" multiple required /></label>
            <label><span>성적 증명서 <i>*</i></span><input name="성적 증명서" type="file" accept=".pdf,.zip" multiple required /></label>
            <label><span>논문 및 기타 자료</span><input name="논문 및 기타 자료" type="file" accept=".pdf,.zip" multiple /></label>
          </div>
          <label className="careers-form__consent"><input type="checkbox" name="개인정보 수집 및 인재풀 등록 동의" value="동의함" required /><span>개인정보 수집·이용 및 인재풀 등록에 동의합니다. 제출 정보는 채용 검토를 위해 지원일로부터 1년간 보관·이용됩니다. <i>(필수)</i></span></label>
          <input type="text" name="_honey" className="careers-form__honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <input type="hidden" name="_subject" value="[MycoDx 채용] 신규 지원서 접수" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />
          <input type="hidden" name="_next" value={successUrl} />
          <div className="careers-form__footer"><button type="submit">지원서 제출하기</button></div>
        </form>
      </section>
    </div>
  )
}
