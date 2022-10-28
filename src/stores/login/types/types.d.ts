export interface ILoginStore {
  token?: string
  userInfo?: IUserInfo
  userMenu?: IUserMenu
}

/* userInfo */
export interface IUserInfo {
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  createAt: string
  updateAt: string
  role: Role
  department: Department
}

export interface Role {
  id: number
  name: string
  intro: string
  createAt: string
  updateAt: string
}

export interface Department {
  id: number
  name: string
  parentId: any
  createAt: string
  updateAt: string
  leader: string
}

/* userMenu */
export type IUserMenu = Root2[]

export interface Root2 {
  id: number
  name: string
  type: number
  url: string
  icon: string
  sort: number
  children: Children[]
}

export interface Children {
  id: number
  url: string
  name: string
  sort: number
  type: number
  children?: Children2[]
  parentId: number
}

export interface Children2 {
  id: number
  url: any
  name: string
  sort: any
  type: number
  parentId: number
  permission: string
}
