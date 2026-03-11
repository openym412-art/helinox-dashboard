import React from 'react';

export default function IndustryNews() {
  const news = [
    { id: 1, title: '2026 캠핑 트렌드: 더 가볍고 미니멀하게', source: '테크아웃도어', date: '오늘' },
    { id: 2, title: '고프코어룩 열풍 지속... 일상으로 들어온 아웃도어', source: '패션비즈', date: '어제' },
    { id: 3, title: '친환경 소재 의류, 소비자가 직접 선택한다', source: '어패럴뉴스', date: '어제' },
    { id: 4, title: '기능성과 디자인 모두 잡은 "테크니컬 웨어" 급성장', source: '매일경제', date: '2일 전' },
  ];

  return (
    <section className="card">
      <h2 style={{ marginBottom: '1.5rem', fontSize: '1.25rem', fontWeight: 'bold' }}>📰 K아웃도어·라이프스타일 뉴스</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        {news.map(item => (
          <div key={item.id} style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
            <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem' }}>{item.title}</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#6b7280', fontSize: '0.85rem' }}>
              <span>{item.source}</span>
              <span>{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
