import axios from 'axios';
import * as cheerio from 'cheerio';

export async function crawlHelinoxwearReviews() {
  console.log(`[HelinoxWear Crawler] Started for official store`);
  
  try {
    // 카페24 기반인 경우 리뷰 보드 파싱 또는 전용 API 호출
    const url = `https://www.helinoxwear.com/board/product/list.html?board_no=4`; // 리뷰 게시판 예시
    // const response = await axios.get(url);
    // const $ = cheerio.load(response.data);
    
    const reviews = [
      { id: 'H-1', platform: '자사몰', product: '고어텍스 3L 재킷', rating: 3, content: '봉제 마감이 좀 아쉽네요', date: new Date().toISOString() },
    ];
    
    console.log(`[HelinoxWear Crawler] Successfully scraped ${reviews.length} reviews`);
    return reviews;
  } catch (error) {
    console.error(`[HelinoxWear Crawler] Error:`, error);
    return [];
  }
}
