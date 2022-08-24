import axios from '@/utils/http'
export const getDataApi = (_page, _limit) => {
  return axios.get('/articles', {
    params: {
      _page,
      _limit
    }
  })
}
