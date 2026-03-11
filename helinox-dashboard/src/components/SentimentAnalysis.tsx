import React from 'react';

export default function SentimentAnalysis() {
  return (
    <section className="card">
      <h2 style={{ marginBottom: '1.5rem', fontSize: '1.25rem', fontWeight: 'bold' }}>📈 감성 분석 (5차원)</h2>
      
      <div style={{ padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px', marginBottom: '1rem' }}>
        <h3 style={{ fontSize: '0.9rem', color: '#6b7280', marginBottom: '0.5rem' }}>브랜드 컨셉 (기술과 미학) 소구율</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ flex: 1, backgroundColor: '#e5e7eb', height: '8px', borderRadius: '4px' }}>
            <div style={{ width: '78%', height: '100%', backgroundColor: 'var(--cyan-blue)', borderRadius: '4px' }}></div>
          </div>
          <span style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--cyan-blue)' }}>78%</span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ width: '80px', fontWeight: '500' }}>디자인</span>
          <div style={{ flex: 1, margin: '0 1rem', display: 'flex', gap: '4px', height: '16px' }}>
            <div style={{ flex: 8.5, backgroundColor: 'var(--success-green)', borderRadius: '2px' }} title="긍정 85%"></div>
            <div style={{ flex: 1.0, backgroundColor: 'var(--warning-yellow)', borderRadius: '2px' }} title="중립 10%"></div>
            <div style={{ flex: 0.5, backgroundColor: 'var(--danger-red)', borderRadius: '2px' }} title="부정 5%"></div>
          </div>
          <span style={{ width: '40px', textAlign: 'right', fontWeight: 'bold' }}>8.5</span>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ width: '80px', fontWeight: '500' }}>기능성</span>
          <div style={{ flex: 1, margin: '0 1rem', display: 'flex', gap: '4px', height: '16px' }}>
            <div style={{ flex: 9.0, backgroundColor: 'var(--success-green)', borderRadius: '2px' }} title="긍정 90%"></div>
            <div style={{ flex: 0.8, backgroundColor: 'var(--warning-yellow)', borderRadius: '2px' }} title="중립 8%"></div>
            <div style={{ flex: 0.2, backgroundColor: 'var(--danger-red)', borderRadius: '2px' }} title="부정 2%"></div>
          </div>
          <span style={{ width: '40px', textAlign: 'right', fontWeight: 'bold' }}>9.0</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ width: '80px', fontWeight: '500' }}>퀄리티</span>
          <div style={{ flex: 1, margin: '0 1rem', display: 'flex', gap: '4px', height: '16px' }}>
            <div style={{ flex: 7.2, backgroundColor: 'var(--success-green)', borderRadius: '2px' }} title="긍정 72%"></div>
            <div style={{ flex: 1.5, backgroundColor: 'var(--warning-yellow)', borderRadius: '2px' }} title="중립 15%"></div>
            <div style={{ flex: 1.3, backgroundColor: 'var(--danger-red)', borderRadius: '2px' }} title="부정 13%"></div>
          </div>
          <span style={{ width: '40px', textAlign: 'right', fontWeight: 'bold', color: 'var(--danger-red)' }}>7.2</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ width: '80px', fontWeight: '500' }}>가격</span>
          <div style={{ flex: 1, margin: '0 1rem', display: 'flex', gap: '4px', height: '16px' }}>
            <div style={{ flex: 7.8, backgroundColor: 'var(--success-green)', borderRadius: '2px' }} title="긍정 78%"></div>
            <div style={{ flex: 1.8, backgroundColor: 'var(--warning-yellow)', borderRadius: '2px' }} title="중립 18%"></div>
            <div style={{ flex: 0.4, backgroundColor: 'var(--danger-red)', borderRadius: '2px' }} title="부정 4%"></div>
          </div>
          <span style={{ width: '40px', textAlign: 'right', fontWeight: 'bold' }}>7.8</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ width: '80px', fontWeight: '500' }}>서비스</span>
          <div style={{ flex: 1, margin: '0 1rem', display: 'flex', gap: '4px', height: '16px' }}>
            <div style={{ flex: 8.2, backgroundColor: 'var(--success-green)', borderRadius: '2px' }} title="긍정 82%"></div>
            <div style={{ flex: 1.2, backgroundColor: 'var(--warning-yellow)', borderRadius: '2px' }} title="중립 12%"></div>
            <div style={{ flex: 0.6, backgroundColor: 'var(--danger-red)', borderRadius: '2px' }} title="부정 6%"></div>
          </div>
          <span style={{ width: '40px', textAlign: 'right', fontWeight: 'bold' }}>8.2</span>
        </div>
      </div>
    </section>
  );
}
