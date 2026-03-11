import React from 'react';

export default function PlatformTrends() {
  return (
    <section className="card">
      <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem', fontWeight: 'bold' }}>📱 플랫폼 트렌드</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#6b7280' }}>29CM (아웃도어)</strong>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem' }}>
            <li style={{ padding: '0.35rem 0', borderBottom: '1px solid #f3f4f6' }}>1. 아크테릭스 <span style={{color: '#9ca3af'}}>-</span></li>
            <li style={{ padding: '0.35rem 0', color: 'var(--cyan-blue)', fontWeight: 'bold', borderBottom: '1px solid #f3f4f6' }}>2. 헬리녹스 웨어 <span style={{color: 'var(--danger-red)'}}>▲1</span></li>
            <li style={{ padding: '0.35rem 0', borderBottom: '1px solid #f3f4f6' }}>3. 살로몬 <span style={{color: 'var(--cyan-blue)'}}>▼1</span></li>
          </ul>
        </div>
        <div>
          <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#6b7280' }}>무신사 (아웃도어)</strong>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem' }}>
            <li style={{ padding: '0.35rem 0', borderBottom: '1px solid #f3f4f6' }}>1. 노스페이스 <span style={{color: '#9ca3af'}}>-</span></li>
            <li style={{ padding: '0.35rem 0', borderBottom: '1px solid #f3f4f6' }}>2. 스노우피크 <span style={{color: '#9ca3af'}}>-</span></li>
            <li style={{ padding: '0.35rem 0', color: 'var(--cyan-blue)', fontWeight: 'bold', borderBottom: '1px solid #f3f4f6' }}>8. 헬리녹스 웨어 <span style={{color: 'var(--danger-red)'}}>▲2</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
