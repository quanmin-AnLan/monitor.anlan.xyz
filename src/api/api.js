import Http from './service'

const apis = {
    getReportList: (params) => Http.get('/getReportList', params),
    getSpmList: (params) => Http.get('/getSpmList', params),
    addSpmList: (params) => Http.post('/addSpmList', params)
}

export default apis