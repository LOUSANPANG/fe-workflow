/**
 * @description 生成规范锚点链接
 * 1、解码链接
 * 2、去除首尾空格
 * 3、空格替换为'-'
 * 4、去除特殊字符
 * 5、小写
 * 6、如果首字符为数字，则在前面加上'_'
 */
export const useFormatHash = (hashLink: string) => {
  const pattern = /[\!\@\#\$\%\^\&\*\(\)\+\{\[\}\]\|\:\;\"\'\<\,\>\.\?\`\~\～\·\！\@\#\¥\%\…\…\&\*\（\）\+\=\「\【\」\】\｜\、\/\\\：\；\“\‘\《\，\》\。\？]/g;
  hashLink = hashLink
          .trim()
          .replace(/\s/g, '-')
          .replace(pattern, '')
          .replace(/--/g, '-')
          .toLowerCase();
  
  if (!isNaN(Number(hashLink[0]))) {
    hashLink = `_${hashLink}`
  }

  return `#${hashLink}`
}
