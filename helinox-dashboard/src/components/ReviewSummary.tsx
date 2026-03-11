import React from 'react';

export default function ReviewSummary() {
  const platforms = [
    { name: '무신사', newReviews: 12, total: 342, score: 4.8 },
    { name: '29CM', newReviews: 8, total: 215, score: 4.7 },
    { name: '자사몰', newReviews: 4, total: 128, score: 4.9 },
    { name: '코오롱몰', newReviews: 2, total: 95, score: 4.6 },
  ];

  return (
    <section className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>📊 채널별 리뷰 요약</h2>
        <div style={{ fontSize: '0.85rem', color: '#6b7280' }}>최근 5일 기준</div>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        {platforms.map(p => (
          <div key={p.name} style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <strong style={{ fontSize: '1.1rem' }}>{p.name}</strong>
              <span className="badge badge-safe">+{p.newReviews}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#6b7280', fontSize: '0.9rem' }}>
              <span>누적 {p.total}건</span>
              <span>⭐ {p.score.toFixed(1)}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
