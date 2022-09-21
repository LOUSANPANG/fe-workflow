export const useWebsiteName = () => useState<string>('WEBSITENAME', () => '前端工程化搭建指南')
export const useWebsiteContent = () =>
  useState<string>(
    'WEBSITECONTENT',
    () => '初始化项目脚手架/规范项目目录/编码规范/集成测试/性能优化/部署/数据分析',
  )
