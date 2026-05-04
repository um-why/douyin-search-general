---
name: douyin-search-keyword
description: 抖音公开内容智能分析工具。支持关键词搜索与热榜查询，支持多维度排序、时间筛选，助力短视频营销、竞品分析与舆情监控。
version: 1.1.2
license: MIT
metadata:
  openclaw:
    enabled: true
    type: command
    runtime: "nodejs@16.14.0+"
    entrypoint: 
      search: "src/douyin/search-cli.js"
      hot: "src/douyin/hot-cli.js"
    requires:
      bins: 
        - "node"
      env: 
        - "GUAIKEI_API_TOKEN"
    category: 
      - "Data&APIs"
      - "内容创作"
    tags: 
     - "douyin"
     - "抖音"
     - "search"
     - "搜索"
     - "数据挖掘"
     - "content-analysis"
     - "营销分析"
     - "数据分析"
     - "competitor-analysis"
     - "竞品分析"
     - "热点追踪"
     - "marketing"
     - "trend-tracking"
     - "workflow"
     - "insight"
     - "automation"
    examples:
      - name: 搜索"AI 教程"获取10条综合排序的抖音内容
        command: 'node src/douyin/search-cli.js "AI 教程"'
        description: 快速获取关键词相关视频数据，助力内容创作灵感
      - name: 搜索"AI"获取最多点赞的10条抖音内容
        command: "node src/douyin/search-cli.js AI --sort 1"
        description: 挖掘爆款视频特征，优化内容策略
      - name: 获取近7天"AI 模型"的抖音内容
        command: 'node src/douyin/search-cli.js "AI 模型" --time 7'
        description: 追踪近期热点趋势，把握内容窗口期
      - name: 获取半年内最新20条"AI 教程"的抖音内容
        command: 'node src/douyin/search-cli.js --keyword "AI 教程" --sort 2 --time 180 --limit 20'
        description: 监控长期内容趋势，制定内容规划
      - name: 获取抖音实时热搜榜单
        command: "node src/douyin/hot-cli.js"
        description: 实时掌握平台热点，快速响应热门话题
---

# 🚀 抖音数据智能分析助手 (Douyin Search & Analytics)

## 1. 技能概述

### 1.1 核心定位

**精准挖掘抖音爆款逻辑，赋能内容创作与竞品监控**

在信息爆炸的时代，**数据**是内容成功的基石。本工具专为短视频运营者、市场分析师及内容创作者打造，提供**关键词精准搜索**与**实时热榜查询**两大核心功能。无论您是寻找创作灵感，还是监控竞品动态，本技能都能为您提供结构化的数据支持。

### 1.2 核心能力

* 🔍 **爆款视频挖掘引擎**
  * **多维排序:** 支持按“综合”、“最多点赞”、“最新发布”排序。
  * **场景:** 一键找出行业内的“头部内容”，分析其标题、封面与互动数据，快速复制成功模式。
* 📡 **实时热点雷达**
  * **热榜直连:** 独立入口获取抖音实时热榜。
  * **场景:** 捕捉转瞬即逝的流量热点，让您的内容始终紧跟时代脉搏。
* **📦 专业级数据输出**
  * **双格式支持:** 支持 `JSON` (适配程序自动化处理/数据库入库) 和 `Markdown` (适配人工阅读/报告撰写)。
  * **场景:** 无缝对接您的工作流，无论是给老板写周报，还是喂给 AI 进行二次分析，都得心应手。
* **📅 精准时间筛选**
  * **时效控制:** 支持“全部”、“24小时内”、“7天内”、“半年内”四个时间维度。
  * **场景:** 拒绝过时信息，只看当下最火的内容，或进行长周期的趋势分析。
* 🔍 **抖音关键词精准搜索**：检索公开视频/图文内容，覆盖点赞、评论、收藏、分享等核心互动数据；
* 📊 **日志自动留存**：搜索任务自动生成JSON日志，便于数据追溯与二次分析。

### 1.3 适用场景

|      场景      |       用户痛点       |               技能如何解决               |
| :------------: | :------------------: | :--------------------------------------: |
| **短视频营销** | 缺乏爆款视频创意灵感、无法量化热门内容特征 | 一键获取关键词相关视频数据，按点赞数排序挖掘爆款特征，输出结构化数据支撑创意决策 |
|  **竞品分析**  | 难以追踪竞品内容策略、无法批量获取竞品数据 | 精准搜索竞品相关视频，提取互动数据（点赞/评论/收藏），按时间筛选监控内容发布节奏    |
|  **热点追踪**  |  错过热点话题黄金期、无法实时掌握平台热点  |   支持1天内/7天内时间筛选追踪近期热点，或通过hot-cli.js获取实时热搜榜单   |
|  **数据留存**  | 临时链接易失效、无法追溯历史搜索结果 | 自动生成含元数据的JSON日志，留存搜索结果与执行参数，支持后续复盘分析 |

## 2. 快速调用指南

### 2.1 前置条件

* 环境要求：安装Node.js 16.14.0及以上版本 (验证命令：`node -v`，输出≥v16.14.0即可);
* 权限配置：配置环境变量 `GUAIKEI_API_TOKEN` (私有TOKEN申请渠道wx: [13395823479]，默认TOKEN有调用频率限制);
* 依赖检查：确保系统已安装node命令 (验证命令：`which node`(Linux/Mac)/`where node`(Windows))。

### 2.2 基础语法

#### 2.2.1 抖音关键词搜索

```bash
# 基础语法
node src/douyin/search-cli.js <关键词> [选项] 

# 完整选项说明
--keyword <关键词> ：必传，搜索关键词（2-50个汉字，避免特殊符号，支持空格分隔多关键词）；
--sort <0/1/2>     ：可选，排序方式（0=综合排序(默认)/1=最多点赞/2=最新发布）；
--time <0/1/7/180> ：可选，发布时间范围（0=全部(默认)/1=1天内/7=7天内/180=半年内）；
--limit <1-60>     ：可选，搜索数量（默认10，最大60）；
--output <json/markdown>：可选，输出格式（默认json）；
--help/-h          ：可选，显示帮助信息。

# 示例
node src/douyin/search-cli.js "AI 教程"
node src/douyin/search-cli.js AI --sort 1
node src/douyin/search-cli.js "AI 模型" --time 7
```

#### 2.2.2 抖音热搜榜单

```bash
# 语法
node src/douyin/hot-cli.js
```

### 2.3 进阶使用示例

```bash
# 爆款挖掘：寻找“AI”领域点赞最高的视频 (适配选题策划)
node src/douyin/search-cli.js AI --sort 1 --time 7

# 舆情监控：查看“新能源汽车”最近24小时的最新动态 (适配热点追踪)
node src/douyin/search-cli.js 新能源汽车 --sort 2 --time 1

# 深度调研：获取“职场干货”半年内的综合搜索结果 (适配竞品分析)
node src/douyin/search-cli.js "职场干货" --sort 0 --time 180 --output json
```

### 2.4 快速上手(复制即用)

#### 步骤1: 环境准备

```bash
# 安装Node.js 16.14.0+
node -v # 验证版本

# 配置环境变量（Linux/Mac）
export GUAIKEI_API_TOKEN="你的令牌"
# 配置环境变量（Windows）
set GUAIKEI_API_TOKEN="你的令牌"
```

#### 步骤2: 一键运行示例

```bash
# 搜索抖音 "AI 教程" 的信息
node src/douyin/search-cli.js "AI 教程"

# 搜索抖音最多点赞的 AI 相关信息
node src/douyin/search-cli.js AI --sort 1

# 搜索抖音 "AI 模型" 最近7天内发布的信息
node src/douyin/search-cli.js "AI 模型" --time 7

# 获取抖音的热门搜索关键词
node src/douyin/hot-cli.js
```

## 3. 注意事项

### 3.1 合规要求

* 仅用于抖音公开数据采集，禁止爬取私密/违规内容，禁止用于商业侵权场景；
* 符合OpenClaw安全规范与数据采集合规要求，使用前需阅读平台数据使用政策；
* 采集数据仅限内部分析/创作参考，禁止对外分发或售卖。

### 3.2 风控与使用提示

* 默认 TOKEN 有调用频率限制，生产环境建议申请私有TOKEN
* CDN 链接（视频 / 图片）为临时链接，需及时下载留存
* 关键词包含违规内容时，技能会直接拦截并提示
* 结果为空：若搜索结果为空，可能是关键词过于特殊/时间范围过窄，建议放宽筛选条件重试
* 日志留存：所有搜索任务日志默认保存为「时间戳_关键词_排序_时间_search.json」，便于问题排查
