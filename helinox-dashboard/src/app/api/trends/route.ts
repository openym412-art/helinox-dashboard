import { NextResponse } from 'next/server';
import { getNaverDataLabTrends } from '@/lib/naver-api';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { startDate, endDate, keywordGroups } = body;
    
    if (!startDate || !endDate || !keywordGroups) {
      return NextResponse.json({ success: false, error: 'Missing parameters' }, { status: 400 });
    }

    const trends = await getNaverDataLabTrends(startDate, endDate, 'date', keywordGroups);
    return NextResponse.json({ success: true, data: trends });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
