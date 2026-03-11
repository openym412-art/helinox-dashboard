import { crawlMusinsaReviews } from './crawlers/musinsa';
import { crawl29cmReviews } from './crawlers/twentynine';
import { crawlHelinoxwearReviews } from './crawlers/helinoxwear';
import { crawlKolonmallReviews } from './crawlers/kolonmall';
import { crawlKreamData } from './crawlers/kream';
import { getGoogleSheetsClient } from '../src/lib/google-sheets';

async function uploadToGoogleSheets(data: any[], sheetName: string) {
  try {
    const sheets = await getGoogleSheetsClient();
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    
    // 데이터 포맷팅: 2차원 배열로 변환
    const values = data.map(item => Object.values(item));

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:Z`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });
    console.log(`[Google Sheets] Successfully uploaded ${data.length} items to ${sheetName}`);
  } catch (error) {
    console.error(`[Google Sheets] Upload Error for ${sheetName}:`, error);
  }
}

async function runAllCrawlers() {
  console.log('--- Starting All Helinox Wear Crawlers ---');
  
  // 1. 리뷰 데이터 수집
  console.log('\\n[1] Fetching Reviews...');
  const musinsaReviews = await crawlMusinsaReviews();
  const twentyNineReviews = await crawl29cmReviews();
  const helinoxReviews = await crawlHelinoxwearReviews();
  const kolonReviews = await crawlKolonmallReviews();
  
  const allReviews = [
    ...musinsaReviews,
    ...twentyNineReviews,
    ...helinoxReviews,
    ...kolonReviews
  ];
  
  // 2. KREAM 데이터 수집
  console.log('\\n[2] Fetching KREAM Data...');
  const kreamData = await crawlKreamData();
  
  // 3. Google Sheets 적재 (실제 환경변수 설정 후 활성화)
  console.log('\\n[3] Uploading to Google Sheets...');
  if (process.env.GOOGLE_CLIENT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
    if (allReviews.length > 0) {
      await uploadToGoogleSheets(allReviews, 'Raw_Reviews');
    }
    if (kreamData.length > 0) {
      await uploadToGoogleSheets(kreamData, 'Kream_Data');
    }
  } else {
    console.log('⚠️ Google Sheets API keys not found. Skipping upload.');
  }

  console.log('\\n--- Crawling Finished ---');
}

runAllCrawlers().catch(console.error);
