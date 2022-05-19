export interface IDiseaseAPIRep {
  response: IResponse
}

export interface IResponse {
  header: IHeader
  body: IBody
}

export interface IBody {
  items: Items
  numOfRows: number
  pageNo: number
  totalCount: number
}

export interface Items {
  item: Item | Item[]
}

export interface Item {
  sickCd: string
  sickNm: string
}

export interface IHeader {
  resultCode: string
  resultMsg: string
}
