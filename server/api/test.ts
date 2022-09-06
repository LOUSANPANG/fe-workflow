export default () => {
  return {
    code: 1,
    data: {
      title: '数据迁移中...',
      description: '首页',
    },
  }
}

// use 使用transform避免页面playload数据过多
// const { data } = useFetch('/api/test', {
//   transform(res) {
//     return res.data
//   },
// })
