import { NextResponse } from 'next/server';
import { searchNaverNews } from '@/lib/naver-api';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query') || '아웃도어 기술';
  
  try {
    const newsItems = await searchNaverNews(query, 10);
    return NextResponse.json({ success: true, data: newsItems });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
