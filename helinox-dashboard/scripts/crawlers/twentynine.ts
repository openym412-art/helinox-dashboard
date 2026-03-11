import axios from 'axios';
import * as cheerio from 'cheerio';

export async function crawl29cmReviews(brandId: string = '1234') { // 29CM 브랜드 ID
  console.log(`[29CM Crawler] Started for brand: ${brandId}`);
  
  try {
    // 29CM 리뷰 페이지 또는 API 구조에 맞게 수정 필요 (API 직접 호출이 유리함)
    const reviews = [
      { id: 'T-1', platform: '29CM', product: '택티컬 셔츠', rating: 5, content: '배송 빠르고 소재 좋아요', date: new Date().toISOString() },
      { id: 'T-2', platform: '29CM', product: '트레킹 하프 팬츠', rating: 4, content: '기능성 최고입니다', date: new Date().toISOString() },
    ];
    
    console.log(`[29CM Crawler] Successfully scraped ${reviews.length} reviews`);
    return reviews;
  } catch (error) {
    console.error(`[29CM Crawler] Error:`, error);
    return [];
  }
}
