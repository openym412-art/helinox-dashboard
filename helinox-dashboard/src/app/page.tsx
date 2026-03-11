import DailyBrief from '@/components/DailyBrief';
import ActionItems from '@/components/ActionItems';
import ReviewSummary from '@/components/ReviewSummary';
import SentimentAnalysis from '@/components/SentimentAnalysis';
import CompetitorNews from '@/components/CompetitorNews';
import SearchTrends from '@/components/SearchTrends';
import PlatformTrends from '@/components/PlatformTrends';
import IndustryNews from '@/components/IndustryNews';

export default function Home() {
  return (
    <main>
      <header className="header-dark">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="cyan-glow">Helinox</span> Wear Morning Dashboard
          </h1>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            {new Date().toLocaleDateString('ko-KR')} 일일 브리프
          </p>
          
          <DailyBrief />
        </div>
      </header>

      <div style={{ maxWidth: '1200px', margin: '2rem auto', padding: '0 1rem', display: 'grid', gap: '2rem' }}>
        <ActionItems />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <ReviewSummary />
          <SentimentAnalysis />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem' }}>
          <CompetitorNews />
          <SearchTrends />
          <PlatformTrends />
        </div>

        <IndustryNews />
      </div>
    </main>
  );
}
