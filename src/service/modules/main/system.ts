import Request from '@/service'

export function postUsersListData() {
  return Request.post({
    url: '/users/list',
    data: {
      offset: 0,
      size: 10
    }
  })
}
