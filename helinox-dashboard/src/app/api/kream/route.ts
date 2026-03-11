import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get('keyword') || '헬리녹스';

  try {
    // 크림(KREAM) 오픈 API 또는 내부 검색 API 구조 추정 기반 크롤링
    // 실제 KREAM 구조 파악 후 엔드포인트 수정 필요
    const url = `https://kream.co.kr/api/p/tabs/all/?keyword=${encodeURIComponent(keyword)}&tab=all`;
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
        // KREAM 접속에 필요한 부가적 토큰/헤더가 있을 수 있음
      }
    });
    
    return NextResponse.json({ success: true, message: '크림 데이터 크롤러 뼈대 완료', data: response.data });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
