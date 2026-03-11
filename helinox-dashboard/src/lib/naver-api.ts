import axios from 'axios';

const NAVER_CLIENT_ID = process.env.NAVER_CLIENT_ID;
const NAVER_CLIENT_SECRET = process.env.NAVER_CLIENT_SECRET;

export async function searchNaverNews(query: string, display: number = 5) {
  try {
    const response = await axios.get('https://openapi.naver.com/v1/search/news.json', {
      params: { query, display, sort: 'sim' },
      headers: {
        'X-Naver-Client-Id': NAVER_CLIENT_ID,
        'X-Naver-Client-Secret': NAVER_CLIENT_SECRET,
      },
    });
    return response.data.items;
  } catch (error) {
    console.error('Naver News API Error:', error);
    return [];
  }
}

export async function getNaverDataLabTrends(startDate: string, endDate: string, timeUnit: string, keywordGroups: any[]) {
  try {
    const response = await axios.post('https://openapi.naver.com/v1/datalab/search', {
      startDate,
      endDate,
      timeUnit,
      keywordGroups,
    }, {
      headers: {
        'X-Naver-Client-Id': NAVER_CLIENT_ID,
        'X-Naver-Client-Secret': NAVER_CLIENT_SECRET,
        'Content-Type': 'application/json',
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Naver DataLab API Error:', error);
    return [];
  }
}
