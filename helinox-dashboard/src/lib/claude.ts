import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function analyzeSentimentWithHaiku(reviews: string[]) {
  const prompt = `
당신은 헬리녹스 웨어(Helinox Wear)의 고객 리뷰 데이터를 분석하는 수석 데이터 어낼리스트입니다.
아래 리뷰들을 분석하여 5가지 차원(디자인, 기능성, 퀄리티, 가격, 서비스)의 감성 점수(1~10점)와 
'기술과 미학(Technology & Aesthetics)'이라는 브랜드 컨셉이 얼마나 소구되고 있는지(0~100%) 분석해주세요.
아웃풋 형식은 반드시 JSON 형태여야 합니다.

[리뷰 데이터]
${reviews.map((r, i) => `${i + 1}. ${r}`).join('\n')}

[JSON 출력 포맷 형식]
{
  "brandConceptAppealRate": 75,
  "dimensions": {
    "design": { "score": 8.5, "positive": 85, "neutral": 10, "negative": 5 },
    "functionality": { "score": 9.0, "positive": 90, "neutral": 8, "negative": 2 },
    "quality": { "score": 7.2, "positive": 72, "neutral": 15, "negative": 13 },
    "price": { "score": 7.8, "positive": 78, "neutral": 18, "negative": 4 },
    "service": { "score": 8.2, "positive": 82, "neutral": 12, "negative": 6 }
  }
}
`;

  const response = await anthropic.messages.create({
    model: 'claude-3-haiku-20240307',
    max_tokens: 1000,
    temperature: 0,
    system: "Return only valid JSON object without markdown formatting.",
    messages: [{ role: 'user', content: prompt }],
  });

  try {
    const content = 'text' in response.content[0] ? response.content[0].text : '{}';
    return JSON.parse(content);
  } catch (e) {
    console.error('JSON parsing error:', e);
    return null;
  }
}

export async function generateBriefWithHaiku(contextData: string) {
  const prompt = `
당신은 헬리녹스 웨어(Helinox Wear)의 전략 기획 팀장입니다.
제공된 대시보드 데이터 컨텍스트를 분석하여 매일 아침 확인할 수 있는 4줄의 일일 브리프를 작성해주세요.

[포맷 요구사항]
1. 🛡️ 리스크: (품질 이슈, 부정 리뷰, 재고 부족 등)
2. 📈 기회: (검색량 급증, 특정 아이템 언급 증가 등)
3. 🎯 액션: (가장 시급한 대응 방안)
4. 📊 크림 프리미엄: (크림 플랫폼 거래 동향 요약)
반드시 4줄로, 간결하고 명확하게 작성하세요.

[데이터 컨텍스트]
${contextData}
`;

  const response = await anthropic.messages.create({
    model: 'claude-3-haiku-20240307',
    max_tokens: 500,
    temperature: 0.5,
    messages: [{ role: 'user', content: prompt }],
  });
  
  return 'text' in response.content[0] ? response.content[0].text : '';
}

export async function generateActionItemsWithHaiku(contextData: string) {
  const prompt = `
당신은 헬리녹스 웨어의 프로젝트 매니저입니다.
최신 대시보드 데이터를 바탕으로 이번 주 가장 중요하게 처리해야 할 액션 아이템 4~6가지를 도출해주세요.
담당 팀은 [기획팀, 생산팀, 영업팀, 마케팅팀, E-biz팀, 디자인팀] 중에서만 선택해야 합니다.
아웃풋 형식은 반드시 JSON 배열 형태여야 합니다.

[데이터 컨텍스트]
${contextData}

[JSON 출력 포맷 형식 예시]
[
  { "priority": "HIGH", "category": "감성 분석", "team": "생산팀", "text": "재킷 봉제 마감 부정 리뷰 2건 점검", "dDay": "D-1", "priorityClass": "badge-risk" }
]
우선순위(priority)는 HIGH, MID, LOW 중 하나, priorityClass는 HIGH이면 badge-risk, MID면 badge-warning, LOW면 badge를 사용하세요.
`;

  const response = await anthropic.messages.create({
    model: 'claude-3-haiku-20240307',
    max_tokens: 1000,
    temperature: 0.2,
    system: "Return only valid JSON array without markdown formatting.",
    messages: [{ role: 'user', content: prompt }],
  });

  try {
    const content = 'text' in response.content[0] ? response.content[0].text : '[]';
    return JSON.parse(content);
  } catch (e) {
    console.error('JSON parsing error:', e);
    return [];
  }
}
