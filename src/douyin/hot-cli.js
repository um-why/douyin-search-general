#!/usr/bin/env node

const key = require("../utils/key");
const hot = require("../api/hot");
const utils = require("../utils/utils");
const validator = require("../validate/hot");

/**
 * 主函数 - 获取抖音热榜入口
 */
async function main() {
  utils.printBanner();

  const token = key.skillKey(process.env.GUAIKEI_API_TOKEN);
  let hotTask = null;
  try {
    hotTask = await hot.getHotTask(token);
  } catch (error) {
    utils.printError(`获取抖音热榜失败: ${error.message}`);
    const errorOutput = {
      status: "error",
      message: error.message,
      error_code: error.code || "UNKNOWN",
      timestamp: new Date().toLocaleString(),
      results: [],
    };
    console.log(JSON.stringify(errorOutput, null, 2));
    return;
  }

  if (!hotTask || !Array.isArray(hotTask) || hotTask.length === 0) {
    utils.printError(`抖音热榜没有返回结果, 请稍后重试或联系开发者`);
    const emptyOutput = {
      status: "empty",
      message: "没有找到最新的抖音热榜",
      error_code: "NO_MATCH",
      timestamp: new Date().toLocaleString(),
      results: [],
    };
    console.log(JSON.stringify(emptyOutput, null, 2));
    return;
  }

  // 输出热榜结果
  const message = validator.formatMessage(hotTask);
  utils.printInfo(message);
  utils.printSuccess(`抖音热榜任务完成, 共 ${hotTask.length} 条记录`);
}

main().catch((error) => {
  utils.printError(error);
  process.exit(1);
});
