import React from 'react';

export default function DailyBrief() {
  return (
    <div style={{ marginTop: '1.5rem', background: 'rgba(0,0,0,0.4)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid var(--cyan-blue)', lineHeight: '1.6' }}>
      <p style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
        <span><strong>🛡️ 리스크:</strong></span>
        <span>[해외/품질] 고어텍스 재킷 봉제 마감 관련 부정 리뷰 2건 발생 (무신사 1, 자사몰 1)</span>
      </p>
      <p style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginTop: '0.5rem' }}>
        <span><strong>📈 기회:</strong></span>
        <span>[트렌드] '경량 바람막이' 검색량 전주 대비 32% 급증, 봄 시즌 유입량 증가 추세</span>
      </p>
      <p style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginTop: '0.5rem' }}>
        <span><strong>🎯 액션:</strong></span>
        <span>아크테릭스 SS 할인 프로모션 대응 방안 및 경량 아우터 기획전 실행 필요</span>
      </p>
      <p style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginTop: '0.5rem' }}>
        <span><strong>📊 크림 프리미엄:</strong></span>
        <span>택티컬 숄더백 한정판 프리미엄 +18% 유지, 거래량 꾸준히 발생 (지난주 45건)</span>
      </p>
    </div>
  );
}
