import { NextResponse } from 'next/server';
import { analyzeSentimentWithHaiku } from '@/lib/claude';

export async function POST(request: Request) {
  try {
    const { reviews } = await request.json();
    
    if (!reviews || !Array.isArray(reviews) || reviews.length === 0) {
      return NextResponse.json({ success: false, error: 'Valid review array is required' }, { status: 400 });
    }

    const sentimentData = await analyzeSentimentWithHaiku(reviews);
    
    if (!sentimentData) {
      return NextResponse.json({ success: false, error: 'AI Analysis failed' }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: sentimentData });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
