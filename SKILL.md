---
name: douyin-search-keyword
description: 抖音搜索技能封装, 支持视频、图文、用户信息及关联数据等多维度公开内容检索
version: 1.0.2
license: MIT
metadata:
  openclaw:
    type: command
    tags: ["douyin", "search", "video", "social", "chinese"]
    requires:
      bins: ["node"]
      env: ["GUAIKEI_API_TOKEN"]
    examples:
      - name: 基础搜索
        command: "node scripts/search.js 自动化"
        description: 搜索关键词"自动化"的抖音内容
      - name: 带空格的关键词
        command: 'node scripts/search.js "工业自动化 教程"'
        description: 搜索包含空格的关键词
    help:
      usage: "node scripts/search.js <keyword>"
      description: "搜索抖音公开内容并返回详细信息"
      arguments:
        - name: keyword
          description: 搜索关键词
---

# 抖音搜索关键词技能 (Douyin Search Keyword)

## 1. 技能概述

### 1.1 核心技能

这是一个基于openclaw的抖音搜索技能，支持通过关键词搜索抖音公开内容，包括：

- 📹 视频（标题、发布人、播放链接、互动数据）
- 📷 图文（多图链接、互动数据）
- 👤 用户/社交相关数据

### 1.2 适用场景

- 内容创作：获取热门相关内容，激发创作灵感
- 数据采集：批量获取视频/图文链接和互动数据
- 信息获取：快速了解热点事件、热门话题
- 链接提取：直接获取视频下载地址和图文原始链接

### 1.3 技能特性

- **实时搜索**：获取最新的抖音公开内容
- **多维度数据**：返回视频、图文等多种类型内容
- **详细信息**：包含标题、发布人、互动数据等完整信息
- **易于集成**：支持openclaw环境和直接命令行调用

### 1.4 技术原理

该技能通过调用抖音搜索API，实现关键词搜索功能。具体流程如下：

1. 接收用户输入的搜索关键词
2. 验证关键词格式
3. 调用API创建搜索任务
4. 轮询获取搜索结果
5. 格式化输出结果
6. 保存结果到本地文件

## 2. 技能调用方式

```bash
# 语法：node [脚本路径] [搜索关键词]
# 示例1：基础搜索
node scripts/search.js 自动化
# 示例2：带空格的关键词
node scripts/search.js "工业自动化 教程"
```

## 3. 输出数据说明

### 3.1 输出示例

```bash
# 输出示例
1 . 【标题】: 还在学自动化？别被骗了！
【发布人】: 鸿xxx任
【发布时间】: 2025/11/26 17:19:59
【链接】: https://www.douyin.com/video/7xxx
【视频封面】: https://p3-pc-sign.douyinpic.com/obj/xxx
【视频链接】: https://v26-web.douyinvod.com/367fd08e4db69xxx
【图文】: ["https://p3-pc-sign.douyinpic.com/xxx","https://p3-pc-sign.douyinpic.com/xxx"]
【点赞】: 12993 【评论】: 110   【收藏】: 11062 【分享】: 2123
```

### 3.2 字段说明

```markdown
| 字段     | 类型   | 说明                                 | 示例                                              |
| -------- | ------ | ------------------------------------ | ------------------------------------------------- |
| 标题     | 字符串 | 内容原始标题                         | 还在学自动化？别被骗了！                          |
| 发布人   | 字符串 | 发布者昵称                           | 鸿xxx任                                           |
| 发布时间 | 字符串 | 发布时间（YYYY/MM/DD HH:mm:ss）      | 2025/11/26 17:19:59                               |
| 链接     | 字符串 | 抖音网页链接                         | https://www.douyin.com/video/7xxx                 |
| 视频封面 | 字符串 | 视频封面图链接（图文类为首张图）     | https://p3-pc-sign.douyinpic.com/obj/xxx          |
| 视频链接 | 字符串 | 视频下载链接（图文类无此字段）       | https://v26-web.douyinvod.com/367fd08e4db69xxx    |
| 图文     | 数组   | 图文内容的多图链接（视频类无此字段） | ["https://p3-pc-sign.douyinpic.com/obj/xxx", ...] |
| 点赞     | 数字   | 点赞数                               | 12993                                             |
| 评论     | 数字   | 评论数                               | 110                                               |
| 收藏     | 数字   | 收藏数                               | 11062                                             |
| 分享     | 数字   | 分享数                               | 2123                                              |
```

## 4. 注意事项

## 4.1 合规使用

- 仅搜索公开数据，禁止用于非法爬取或隐私窃取

### 4.2 风控提示

- 避免高频调用，以防触发平台限流

### 4.3 其他说明

- 视频/图片链接为临时CDN链接，可能过期，建议及时下载
