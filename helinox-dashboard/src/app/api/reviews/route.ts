import { NextResponse } from 'next/server';
import { getSheetData } from '@/lib/google-sheets';

export async function GET() {
  try {
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    if (!spreadsheetId) {
      throw new Error('GOOGLE_SHEET_ID is not set');
    }
    
    // 예시: 'Reviews' 시트의 A:F 열 데이터를 가져옴
    // 실제로는 시트 구조에 맞게 가져올 범위 조정
    const data = await getSheetData(spreadsheetId, 'Reviews!A:F');
    
    // 더미 데이터를 대체할 수 있도록 포맷팅 가능
    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
