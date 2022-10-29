export interface ISystemStore {
  usersList: IList[]
  totalCount: number
}

export interface IList {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  departmentId: number
  roleId: number
  createAt: string
  updateAt: string
}
