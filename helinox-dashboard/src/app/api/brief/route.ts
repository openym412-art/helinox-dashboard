import { NextResponse } from 'next/server';
import { generateBriefWithHaiku } from '@/lib/claude';

export async function POST(request: Request) {
  try {
    const { dashboardContext } = await request.json();
    
    if (!dashboardContext) {
      return NextResponse.json({ success: false, error: 'Dashboard context is required' }, { status: 400 });
    }

    const briefText = await generateBriefWithHaiku(JSON.stringify(dashboardContext));
    
    return NextResponse.json({ success: true, data: { brief: briefText } });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
