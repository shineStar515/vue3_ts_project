import { defineStore } from 'pinia'
import { postUsersListData } from '@/service/modules/main/system'
import type { ISystemStore, IList } from '@/stores/main/types/systemTypes'

const useSystemStore = defineStore('system', {
  state: (): ISystemStore => ({
    usersList: [],
    totalCount: 0
  }),
  actions: {
    //用户数据
    async postUsersListAction() {
      const usersListResult = await postUsersListData()
      console.log(usersListResult.data)
      if (usersListResult) {
        const { list, totalCount } = usersListResult.data
        this.usersList = list
        this.totalCount = totalCount
      }
    }
  }
})
export default useSystemStore
