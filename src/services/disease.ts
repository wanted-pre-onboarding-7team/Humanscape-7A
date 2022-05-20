import axios from 'axios'
import { IDiseaseAPIRep } from 'types/disease'

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy'

const url = '/B551182/diseaseInfoService/getDissNameCodeList'

interface OpenDiseaseParams {
  searchText: string | null | undefined
}

export const getOpenDiseaseAPi = (params: OpenDiseaseParams) =>
  axios.get<IDiseaseAPIRep>(`${PROXY}${url}`, {
    params: {
      ...params,
      serviceKey: process.env.REACT_APP_OPEN_DATA,
      numOfRows: '10',
      sickType: '1',
      medTp: '2',
      diseaseType: 'SICK_NM',
    },
  })
