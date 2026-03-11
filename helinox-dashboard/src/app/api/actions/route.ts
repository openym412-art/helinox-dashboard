import { NextResponse } from 'next/server';
import { generateActionItemsWithHaiku } from '@/lib/claude';

export async function POST(request: Request) {
  try {
    const { dashboardContext } = await request.json();
    
    if (!dashboardContext) {
      return NextResponse.json({ success: false, error: 'Dashboard context is required' }, { status: 400 });
    }

    const actionItems = await generateActionItemsWithHaiku(JSON.stringify(dashboardContext));
    
    return NextResponse.json({ success: true, data: actionItems });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
