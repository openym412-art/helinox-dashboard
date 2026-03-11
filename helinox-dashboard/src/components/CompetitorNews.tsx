import React from 'react';

export default function CompetitorNews() {
  const news = [
    { id: 1, brand: '아크테릭스', title: '아크테릭스, 봄 시즌 기능성 아우터 신제품 출시', isBenchmark: true },
    { id: 2, brand: '살로몬', title: '살로몬 트레일러닝화 XT-6 신규 컬러 공개', isBenchmark: true },
    { id: 3, brand: '노스페이스', title: '노스페이스 화이트라벨 팝업스토어 성수동 오픈', isBenchmark: false },
    { id: 4, brand: '스노우피크', title: '스노우피크 어패럴 24SS 룩북 공개', isBenchmark: false },
  ];

  return (
    <section className="card">
      <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 'bold' }}>🏢 경쟁사 동향</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {news.map(item => (
          <div key={item.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid #f3f4f6' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: item.isBenchmark ? 'var(--cyan-blue)' : '#6b7280' }}>
                {item.brand} {item.isBenchmark && '⭐'}
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
