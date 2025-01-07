interface ICategory {
  /* 物料类型名称 */
  name: string
}
interface IMaterialData {
  /* 版本 */
  version: string
  source: string
}
// 物料类型
export interface IMaterial extends IMaterialData {
  /* 物料名称 */
  name: string
  /* 物料标题 */
  title: string
  /* 物料类型 */
  type: string
  /* 分类 */
  category: ICategory
  /* 物料唯一标识 */
  id: string
  thumbnail: string
  data: IMaterialData[]
}

// 物料加载器
export interface IMaterialLoad {
  type: string
  load: (material: IMaterial) => Promise<any>
}
