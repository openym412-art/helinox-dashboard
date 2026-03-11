import React from 'react';

const DUMMY_ACTIONS = [
  { id: 1, priority: 'HIGH', priorityClass: 'badge-risk', category: '감성 분석', team: '생산팀', text: '고어텍스 재킷 봉제 마감 부정 리뷰 2건, 긴급 품질 점검', dDay: 'D-1' },
  { id: 2, priority: 'HIGH', priorityClass: 'badge-risk', category: '검색 트렌드', team: '마케팅팀', text: '\'경량 바람막이\'(+32%) 급증, 봄 시즌 경량 아우터 캠페인 실행', dDay: 'D-2' },
  { id: 3, priority: 'MID', priorityClass: 'badge-warning', category: '경쟁사', team: '기획팀', text: '아크테릭스 SS 기획전 25% 할인 대응 전략 수립', dDay: 'D-3' },
  { id: 4, priority: 'MID', priorityClass: 'badge-warning', category: '크림', team: 'E-biz팀', text: '택티컬 숄더백 프리미엄 +18% 유지, 리스톡 물량 검토', dDay: 'D-5' },
  { id: 5, priority: 'LOW', priorityClass: 'badge', category: '리뷰 분석', team: '디자인팀', text: '트레킹 팬츠 핏 관련 긍정 리뷰 급증, 다음 시즌 라인 확대 검토', dDay: 'D-7' },
  { id: 6, priority: 'LOW', priorityClass: 'badge', category: '플랫폼', team: '영업팀', text: '무신사 아웃도어 카테고리 순위 하락, 입점 프로모션 협의', dDay: 'D-10' },
];

export default function ActionItems() {
  return (
    <section className="card">
      <h2 style={{ marginBottom: '1.5rem', fontSize: '1.25rem', fontWeight: 'bold' }}>📋 주간 종합 액션 아이템</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {DUMMY_ACTIONS.map(action => (
          <div key={action.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
            <span className={`badge ${action.priorityClass}`} style={{ minWidth: '60px', justifyContent: 'center', backgroundColor: action.priority === 'LOW' ? '#9ca3af' : undefined, color: action.priority === 'LOW' ? 'white' : undefined }}>{action.priority}</span>
            <span style={{ fontSize: '0.85rem', color: '#6b7280', minWidth: '80px' }}>#{action.category}</span>
            <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--cyan-blue)', minWidth: '60px' }}>@{action.team}</span>
            <p style={{ flex: 1, margin: 0 }}>{action.text}</p>
            <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#ef4444' }}>{action.dDay}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
