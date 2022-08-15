import Http from './service'

const apis = {
    getReportList: (params) => Http.get('/report/getList', params),
    getSpmList: (params) => Http.get('/report/spm/getList', params),
    addSpmList: (params) => Http.post('/report/spm/add', params)
}

export default apis