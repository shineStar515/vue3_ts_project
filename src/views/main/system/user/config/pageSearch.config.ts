export const searchFormConfig = {
  searchForms: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名',
      modelData: ''
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名',
      modelData: ''
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '电话号码',
      placeholder: '请输入电话号码',
      modelData: ''
    },
    {
      field: 'enable',
      type: 'select',
      label: '用户状态',
      placeholder: '请选择用户状态',
      modelData: '',
      options: [
        { title: '启用', value: 1 },
        { title: '禁用', value: 0 }
      ]
    },
    {
      field: 'createAt',
      type: 'datepicker',
      label: '创建时间',
      modelData: '',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        rangeSeparator: '-',
        type: 'daterange'
      }
    }
  ]
}
