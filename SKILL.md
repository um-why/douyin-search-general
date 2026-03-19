---
name: douyin-search-general
description: 抖音搜索通用接口, 支持搜索视频, 搜索图文, 搜索用户, 搜索社交数据等
version: 1.0.0
metadata:
  {
    "openclaw":
      { "requires": { "bins": ["node"], "env": ["GUAIKEI_API_TOKEN"] } },
  }
---

# 抖音搜索通用接口 (guaikei)

## 技能概述

本技能执行抓取抖音平台的搜索结果数据, 包括:

- 视频搜索
- 图文搜索
- 用户搜索
- 社交数据搜索
- 抖音视频(图文)描述
- douyin视频(图文)作者、发布时间、点赞数、评论数、转发数等
- 视频(图文)封面、视频链接地址

## 环境要求

1. **二进制工具**: `node` 必须在系统 PATH 中.
2. **凭据**: 需要有效的 `GUAIKEI_API_TOKEN` 环境变量.

## 使用

```bash
node scripts/search.js 抖音搜索关键词
```

## 输出格式示例

```
1 . 【标题】: 还在学自动化？别被骗了！ #自动化 #学技术 #找工作 #电气自动化 #工业
自动化
【发布人】: 鸿富技加-老实任
【发布时间】: 2025/11/26 17:19:59
【链接】: https://www.douyin.com/video/7576961373792374035
【视频封面】: https://p3-pc-sign.douyinpic.com/obj/tos-cn-i-dy/6951e1e28f7641238778501ac0dc71ae?lk3s=138a59ce&x-expires=1775048400&x-signature=uLMovX239x5mlfoF79AVvYDSFaM%3D&from=327834062_large&s=PackSourceEnum_SEARCH&se=false&sc=dynamic_cover&biz_tag=pcweb_cover&l=20260318215344A9CCEBE6842971BCFB65
【视频链接】: https://v26-web.douyinvod.com/367fd08e4db69dbede8ea87c686b9866/69bad8c7/video/tos/cn/tos-cn-ve-15/o8QeBigTIo0QIEADEBmsMCiFnkFSyAf29DAaKk/?a=6383&ch=11&cr=3&dr=0&lr=all&cd=0%7C0%7C0%7C3&cv=1&br=997&bt=997&cs=0&ds=6&ft=4TMWc6DnppftDFLB.s~.C_bAja-CInMhcIZc6B0sGo8uVYpHDDQcDZEolc6scusZ.&mime_type=video_mp4&qs=1&rc=aTQ5NWZpNDc7ZWgzPDo1ZEBpamZmPHc5cmxmNzMzNGkzM0AyXjMyLi8vXjAxMTReMjJhYSMvZG5oMmRjXmdhLS1kLS9zcw%3D%3D&btag=80000e00020000&cquery=100B_100H_100K_100o_101n&dy_q=1773842025&feature_id=0ea98fd3bdc3c6c14a3d0804cc272721&l=20260318215344A9CCEBE6842971BCFB65
【点赞】: 14    【评论】: 0     【收藏】: 6     【分享】: 1

2 . 【标题】: 零基础认识45种自动化元件。学会这45种自动化元件，走到哪里都不怕！
#工业自动化 #电子元器件 #西门子 #技术分享
【发布人】: 西门子一级代理商
【发布时间】: 2025/12/11 17:31:17
【链接】: https://www.douyin.com/note/7582530491603504433
【视频封面】: https://p3-pc-sign.douyinpic.com/tos-cn-i-0813c000-ce/oUAEfjI1E7gAoaOCI61DfEW99dAFAAowA9rpIR~noop.jpeg?biz_tag=pcweb_cover&card_type=303&column_n=0&from=327834062&l=20260318215344A9CCEBE6842971BCFB65&lk3s=138a59ce&s=PackSourceEnum_SEARCH&se=false&x-expires=1775048400&x-signature=CzlauhT4t7AcrgaObQ66PosHnlQ%3D
【图文】: ["https://p3-pc-sign.douyinpic.com/tos-cn-i-0813c000-ce/oUAEfjI1E7gAoaOCI61DfEW99dAFAAowA9rpIR~tplv-dy-aweme-images:q75.webp?lk3s=138a59ce&x-expires=1776430800&x-signature=%2Fow6py3Emh%2FW1GodlfICDE7geN0%3D&from=327834062&s=PackSourceEnum_SEARCH&se=false&sc=image&biz_tag=aweme_images&l=20260318215344A9CCEBE6842971BCFB65","https://p3-pc-sign.douyinpic.com/tos-cn-i-0813c000-ce/o4mIAA6E9oRfI9AXjwAo2IAOEA7pfgDWCd1EFC~tplv-dy-aweme-images:q75.webp?lk3s=138a59ce&x-expires=1776430800&x-signature=5ys04iXSK2jsKaKeXi8HlQ9hii0%3D&from=327834062&s=PackSourceEnum_SEARCH&se=false&sc=image&biz_tag=aweme_images&l=20260318215344A9CCEBE6842971BCFB65","https://p3-pc-sign.douyinpic.com/tos-cn-i-0813c000-ce/o41o6DO3IAod7IAAgEjEII9A0EA9wAFfp6CRYf~tplv-dy-aweme-images:q75.webp?lk3s=138a59ce&x-expires=1776430800&x-signature=FDgQ6nbHgsMNfOQnWMOm%2Bi1Yf%2FY%3D&from=327834062&s=PackSourceEnum_SEARCH&se=false&sc=image&biz_tag=aweme_images&l=20260318215344A9CCEBE6842971BCFB65","https://p9-pc-sign.douyinpic.com/tos-cn-i-0813c000-ce/okAAI2EIEEwpdMOfRjFo6dAIZ19fTAA7DCo9Ag~tplv-dy-aweme-images:q75.webp?lk3s=138a59ce&x-expires=1776430800&x-signature=UyOXwDc%2Bsi4dhG4kM8PCbZ9L6yE%3D&from=327834062&s=PackSourceEnum_SEARCH&se=false&sc=image&biz_tag=aweme_images&l=20260318215344A9CCEBE6842971BCFB65","https://p3-pc-sign.douyinpic.com/tos-cn-i-0813c000-ce/oMAEoIjQwA9lE7gI9FfRopDC3AO2aEAI1AfdA6~tplv-dy-aweme-images:q75.webp?lk3s=138a59ce&x-expires=1776430800&x-signature=WHhj8S5opDMABRQc467Xb1bYPRk%3D&from=327834062&s=PackSourceEnum_SEARCH&se=false&sc=image&biz_tag=aweme_images&l=20260318215344A9CCEBE6842971BCFB65","https://p3-pc-sign.douyinpic.com/tos-cn-i-0813c000-ce/o8A9EoEDA7fEIg1Ajpo6AIbI1AF4R9AOfdC4Hw~tplv-dy-aweme-images:q75.webp?lk3s=138a59ce&x-expires=1776430800&x-signature=mFkN2YKC8gOQF%2FXQxTNrmg%2BXJPs%3D&from=327834062&s=PackSourceEnum_SEARCH&se=false&sc=image&biz_tag=aweme_images&l=20260318215344A9CCEBE6842971BCFB65","https://p3-pc-sign.douyinpic.com/tos-cn-i-0813c000-ce/oYjSdAGQIJFIABB0eBAgQpALeR17F4Q6re27QH~tplv-dy-aweme-images:q75.webp?lk3s=138a59ce&x-expires=1776430800&x-signature=NaDtokwcLe8a0cGM8Ndajujm0JQ%3D&from=327834062&s=PackSourceEnum_SEARCH&se=false&sc=image&biz_tag=aweme_images&l=20260318215344A9CCEBE6842971BCFB65","https://p3-pc-sign.douyinpic.com/tos-cn-i-0813c000-ce/o49C9FE3ARdfAgO71pLMAdo6XAEAIAIfDojIEw~tplv-dy-aweme-images:q75.webp?lk3s=138a59ce&x-expires=1776430800&x-signature=INoMYjBPMcKtCHcm1OiFz8vEcY8%3D&from=327834062&s=PackSourceEnum_SEARCH&se=false&sc=image&biz_tag=aweme_images&l=20260318215344A9CCEBE6842971BCFB65","https://p3-pc-sign.douyinpic.com/tos-cn-i-0813c000-ce/ooAQj7ee7SIPAQJOFeG6Q6LRA14dgABE22jAIB~tplv-dy-aweme-images:q75.webp?lk3s=138a59ce&x-expires=1776430800&x-signature=Mp3n056BMHsVaxwV6QzIG1vq9SM%3D&from=327834062&s=PackSourceEnum_SEARCH&se=false&sc=image&biz_tag=aweme_images&l=20260318215344A9CCEBE6842971BCFB65","https://p3-pc-sign.douyinpic.com/tos-cn-i-0813c000-ce/o4jHrAAeSBJfPh81FBLIg6G7BdA7xuAQI2egQR~tplv-dy-aweme-images:q75.webp?lk3s=138a59ce&x-expires=1776430800&x-signature=17xmg5Evx7dwmX5MiZdOE%2BJxXbc%3D&from=327834062&s=PackSourceEnum_SEARCH&se=false&sc=image&biz_tag=aweme_images&l=20260318215344A9CCEBE6842971BCFB65","https://p3-pc-sign.douyinpic.com/tos-cn-i-0813c000-ce/oMBuEAs2B16CLAAqnAMjSAAqiAaPiYMZPiTIP~tplv-dy-aweme-images:q75.webp?lk3s=138a59ce&x-expires=1776430800&x-signature=5nhPY5HM3bimkoUvFfGijJ4NkxA%3D&from=327834062&s=PackSourceEnum_SEARCH&se=false&sc=image&biz_tag=aweme_images&l=20260318215344A9CCEBE6842971BCFB65","https://p3-pc-sign.douyinpic.com/tos-cn-i-0813c000-ce/oEA1aPvAIiTABMAjBq2MA6gqBAYPZSPACBEsi~tplv-dy-aweme-images:q75.webp?lk3s=138a59ce&x-expires=1776430800&x-signature=km8jqop6fD%2FDC9OVi9xcmLQpa5I%3D&from=327834062&s=PackSourceEnum_SEARCH&se=false&sc=image&biz_tag=aweme_images&l=20260318215344A9CCEBE6842971BCFB65","https://p3-pc-sign.douyinpic.com/tos-cn-i-0813c000-ce/o0jZoCPDiMGTAwSAPsAPiAMmq62qAIYEBaBA1~tplv-dy-aweme-images:q75.webp?lk3s=138a59ce&x-expires=1776430800&x-signature=ppVbC6Iy65CAYvXprn9jALn%2BDAQ%3D&from=327834062&s=PackSourceEnum_SEARCH&se=false&sc=image&biz_tag=aweme_images&l=20260318215344A9CCEBE6842971BCFB65","https://p3-pc-sign.douyinpic.com/tos-cn-i-0813c000-ce/oc1YTBCAPESsiBMAAAxDAIZ6qMPAasP2xBijq~tplv-dy-aweme-images:q75.webp?lk3s=138a59ce&x-expires=1776430800&x-signature=xQ%2BdkCE42vokB3Puav%2F2xromVIQ%3D&from=327834062&s=PackSourceEnum_SEARCH&se=false&sc=image&biz_tag=aweme_images&l=20260318215344A9CCEBE6842971BCFB65","https://p3-pc-sign.douyinpic.com/tos-cn-i-0813c000-ce/oolYAD9IkAFoE8gfAwq1EopsHB9YOAEeEQzCAG~tplv-dy-aweme-images:q75.webp?lk3s=138a59ce&x-expires=1776430800&x-signature=sq9kiiqjZ49Fkp1mV%2FtVPg%2BnF0U%3D&from=327834062&s=PackSourceEnum_SEARCH&se=false&sc=image&biz_tag=aweme_images&l=20260318215344A9CCEBE6842971BCFB65","https://p9-pc-sign.douyinpic.com/tos-cn-i-0813c000-ce/o8APT1ZaAPAjYWzMBDE0AB2AsISqiCzAM6Pqi~tplv-dy-aweme-images:q75.webp?lk3s=138a59ce&x-expires=1776430800&x-signature=k03y5J3WtE%2BGno3lw2uiGrX7hJo%3D&from=327834062&s=PackSourceEnum_SEARCH&se=false&sc=image&biz_tag=aweme_images&l=20260318215344A9CCEBE6842971BCFB65"]
【点赞】: 12993 【评论】: 110   【收藏】: 11062 【分享】: 2123
```

**注意**: 链接为纯文本 URL, 可直接复制, 无需额外处理

## 返回数据字段

## 注意事项

- 本技能依赖 `GUAIKEI_API_TOKEN` 环境变量, 请确保已设置.
- 凭据 `GUAIKEI_API_TOKEN` 可通过 wx 13395823479 申请.
- 搜索关键词建议使用中文, 英文可能会返回不相关结果.
- 搜索结果包含抖音平台的公开数据, 不包含私有信息.
- 本技能仅支持抖音公开数据, 不支持私有视频或用户.
- 搜索结果可能包含敏感内容, 请谨慎处理.
