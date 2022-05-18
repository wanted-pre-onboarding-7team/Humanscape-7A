import axios from 'axios'
import { IDiseaseAPIRep } from 'types/disease'

const url = '/B551182/diseaseInfoService/getDissNameCodeList'

interface OpenDiseaseParams {
  searchText: string | null
}

export const getOpenDiseaseAPi = (params: OpenDiseaseParams) =>
  axios.get<IDiseaseAPIRep>(url, {
    params: {
      ...params,
      serviceKey: process.env.REACT_APP_OPEN_DATA,
      numOfRows: '10',
      sickType: '1',
      medTp: '2',
      diseaseType: 'SICK_NM',
    },
  })
