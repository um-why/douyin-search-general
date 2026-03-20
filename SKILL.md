---
name: douyin-search-general
description: 抖音搜索技能封装, 支持视频、图文、用户信息及关联数据等多维度公开内容检索
version: 1.0.1
metadata:
  openclaw:
    requires:
      bins: ["node"]
      env: ["GUAIKEI_API_TOKEN"]
---

# 抖音搜索通用技能 (Douyin Search)

## 1. 技能概述
### 1.1 核心技能
本技能封装抖音公开内容的搜索功能，支持通过关键词检索：
- 视频类内容（标题、发布人、播放链接、点赞/评论/收藏/分享数据）
- 图文类内容（多图链接、互动数据）
- 用户/社交类等维度数据

### 1.2 适用场景
- 内容创作：通过关键词获取抖音热门相关内容，辅助创作灵感
- 数据采集：批量获取抖音公开视频/图文的链接、互动数据
- 时效性信息：获取最近发生的事件、热门话题或新闻时
- 链接提取：快速提取视频下载地址、图文原始链接

### 1.3 不适用场景
- 检索抖音私有/未公开内容（如私密视频、用户未公开主页）
- 批量爬取/高频请求（易触发平台风控，需合规使用）

## 2. 环境要求
### 2.1 软件依赖
- Node.js：建议 v14.x 及以上版本
- 依赖安装：需进入脚本目录执行 `npm install`

### 2.2 凭据配置
- 环境变量：`GUAIKEI_API_TOKEN`（必填）
- 配置方式：
  # Linux/Mac
  export GUAIKEI_API_TOKEN="你的token值"
  # Windows（cmd）
  set GUAIKEI_API_TOKEN="你的token值"
  # Windows（PowerShell）
  $env:GUAIKEI_API_TOKEN="你的token值"
- 申请方式：通过微信 13395823479 申请，需说明使用场景
- 也可使用技能内置的默认token值，无需申请。不过默认token值在使用时，有请求频率限制。

## 3. 快速使用
### 3.1 基本命令
```bash
# 语法：node [脚本绝对/相对路径] [搜索关键词]
# 示例1：基础搜索（当前目录为项目根目录）
node scripts/search.js 自动化
# 示例2：带编码的关键词（如含空格/特殊字符）
node scripts/search.js "工业自动化 教程"
```

## 4. 输出数据字段
当前仅展示示例，未明确字段含义。
```bash
# 输出示例
1 . 【标题】: 还在学自动化？别被骗了！
【发布人】: 鸿富技加-老实任
【发布时间】: 2025/11/26 17:19:59
【链接】: https://www.douyin.com/video/7576961373792374035
【视频封面】: https://p3-pc-sign.douyinpic.com/obj/tos-cn-i-dy/6951e1e28f7641238778501ac0dc71ae?lk3s=138a59ce&x-expires=1775048400&x-signature=uLMovX239x5mlfoF79AVvYDSFaM%3D&from=327834062_large&s=PackSourceEnum_SEARCH&se=false&sc=dynamic_cover&biz_tag=pcweb_cover&l=20260318215344A9CCEBE6842971BCFB65
【视频链接】: https://v26-web.douyinvod.com/367fd08e4db69dbede8ea87c686b9866/69bad8c7/video/tos/cn/tos-cn-ve-15/o8QeBigTIo0QIEADEBmsMCiFnkFSyAf29DAaKk/?a=6383&ch=11&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=997&bt=997&cs=0&ds=6&ft=4TMWc6DnppftDFLB.s~.C_bAja-CInMhcIZc6B0sGo8uVYpHDDQcDZEolc6scusZ.&mime_type=video_mp4&qs=1&rc=aTQ5NWZpNDc7ZWgzPDo1ZEBpamZmPHc5cmxmNzMzNGkzM0AyXjMyLi8vXjAxMTReMjJhYSMvZG5oMmRjXmdhLS1kLS9zcw%3D%3D&btag=80000e00020000&cquery=100B_100H_100K_100o_101n&dy_q=1773842025&feature_id=0ea98fd3bdc3c6c14a3d0804cc272721&l=20260318215344A9CCEBE6842971BCFB65
【点赞】: 14    【评论】: 0     【收藏】: 6     【分享】: 1

2 . 【标题】: 零基础认识45种自动化元件。学会这45种自动化元件，走到哪里都不怕！#工业自动化 \#电子元器件 \#西门子 \#技术分享
【发布人】: 西门子一级代理商
【发布时间】: 2025/12/11 17:31:17
【链接】: https://www.douyin.com/note/7582530491603504433
【视频封面】: https://p3-pc-sign.douyinpic.com/tos-cn-i-0813c000-ce/oUAEfjI1E7gAoaOCI61DfEW99dAFAAowA9rpIR~noop.jpeg?biz_tag=pcweb_cover&card_type=303&column_n=0&from=327834062&l=20260318215344A9CCEBE6842971BCFB65&lk3s=138a59ce&s=PackSourceEnum_SEARCH&se=false&x-expires=1775048400&x-signature=CzlauhT4t7AcrgaObQ66PosHnlQ%3D
【图文】: ["https://p3-pc-sign.douyinpic.com/tos-cn-i-0813c000-ce/oUAEfjI1E7gAoaOCI61DfEW99dAFAAowA9rpIR~tplv-dy-aweme-images:q75.webp?lk3s=138a59ce&x-expires=1776430800&x-signature=%2Fow6py3Emh%2FW1GodlfICDE7geN0%3D&from=327834062&s=PackSourceEnum_SEARCH&se=false&sc=image&biz_tag=aweme_images&l=20260318215344A9CCEBE6842971BCFB65","https://p3-pc-sign.douyinpic.com/tos-cn-i-0813c000-ce/o4mIAA6E9oRfI9AXjwAo2IAOEA7pfgDWCd1EFC~tplv-dy-aweme-images:q75.webp?lk3s=138a59ce&x-expires=1776430800&x-signature=5ys04iXSK2jsKaKeXi8HlQ9hii0%3D&from=327834062&s=PackSourceEnum_SEARCH&se=false&sc=image&biz_tag=aweme_images&l=20260318215344A9CCEBE6842971BCFB65","https://p3-pc-sign.douyinpic.com/tos-cn-i-0813c000-ce/o41o6DO3IAod7IAAgEjEII9A0EA9wAFfp6CRYf~tplv-dy-aweme-images:q75.webp?lk3s=138a59ce&x-expires=1776430800&x-signature=FDgQ6nbHgsMNfOQnWMOm%2Bi1Yf%2FY%3D&from=327834062&s=PackSourceEnum_SEARCH&se=false&sc=image&biz_tag=aweme_images&l=20260318215344A9CCEBE6842971BCFB65"]
【点赞】: 12993 【评论】: 110   【收藏】: 11062 【分享】: 2123

......
```

## 5. 返回数据字段详解
```markdown
| 字段名 | 类型 | 说明 | 示例 |
|--------|------|------|------|
| 标题 | 字符串 | 内容的原始标题 | 还在学自动化？别被骗了！ |
| 发布人 | 字符串 | 内容发布者昵称 | 鸿富技加-老实任 |
| 发布时间 | 字符串 | 发布时间（格式：YYYY/MM/DD HH:mm:ss） | 2025/11/26 17:19:59 |
| 链接 | 字符串 | 内容的抖音网页链接 | https://www.douyin.com/video/7576961373792374035 |
| 视频封面 | 字符串 | 视频封面图的CDN链接（图文类为首张图） | https://p3-pc-sign.douyinpic.com/obj/xxx |
| 视频链接 | 字符串 | 视频原始下载链接（图文类无此字段） | https://v26-web.douyinvod.com/367fd08e4db69xxx |
| 图文 | 数组 | 图文类内容的多图链接列表（视频类无此字段） | ["https://p3-pc-sign.douyinpic.com/obj/xxx", ...] |
| 点赞 | 数字 | 内容的点赞数 | 14 |
| 评论 | 数字 | 内容的评论数 | 0 |
| 收藏 | 数字 | 内容的收藏数 | 6 |
| 分享 | 数字 | 内容的分享数 | 1 |
```

## 6. 注意事项
### 6.1 凭据相关
- 务必确保 `GUAIKEI_API_TOKEN` 已正确设置，未配置会导致技能调用失败
- Token 仅限申请方使用，请勿泄露或共享，失效请联系申请渠道重置

### 6.2 数据合规
- 搜索结果仅包含抖音平台公开数据，严禁用于非法爬取、用户隐私窃取等场景
- 敏感内容处理：结果可能包含平台未过滤的敏感内容，需自行做内容审核，合规使用

### 6.3 风控限制
- 请勿高频次调用（建议单次间隔≥1秒），否则可能触发抖音平台反爬或 API 限流
- 单关键词返回结果数量受平台限制，无法获取全量数据

### 6.4 其他
- 链接有效期：视频/图片链接为临时CDN链接，可能随时间失效，建议及时下载
- 兼容性：脚本仅在 Node.js 14+ 环境测试通过，低版本可能出现未知错误


