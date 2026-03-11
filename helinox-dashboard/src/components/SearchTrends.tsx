import React from 'react';

export default function SearchTrends() {
  const trends = [
    { id: 1, category: '아우터', keyword: '경량 바람막이', change: '+32.4%', isUp: true },
    { id: 2, category: '하의', keyword: '트레킹 팬츠', change: '+18.1%', isUp: true },
    { id: 3, category: '상의', keyword: '테크니컬 티셔츠', change: '-4.2%', isUp: false },
    { id: 4, category: '브랜드', keyword: '헬리녹스웨어', change: '+12.5%', isUp: true },
  ];

  return (
    <section className="card">
      <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 'bold' }}>🔍 검색 트렌드</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {trends.map(trend => (
          <div key={trend.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem', paddingBottom: '0.75rem', borderBottom: '1px solid #f3f4f6' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#6b7280', fontSize: '0.8rem' }}>[{trend.category}]</span>
              <strong>{trend.keyword}</strong>
            </div>
            <span style={{ color: trend.isUp ? 'var(--danger-red)' : 'var(--cyan-blue)', fontWeight: 'bold' }}>
              {trend.change} {trend.isUp ? '▲' : '▼'}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
