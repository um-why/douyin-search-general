#!/usr/bin/env node

require("dotenv").config();

const utils = require("../lib/utils");
const key = require("../lib/key");
const douyin = require("../lib/douyin");
const fs = require("fs");
const path = require("path");
/**
 * 打印帮助信息
 */
function printHelp() {
  console.log("用法: node scripts/search.js <关键词>");
  console.log("");
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    printHelp();
    return;
  }
  let keyword = args[0];
  if (args.length > 1) {
    keyword = args.slice(0, args.length - 1).join(" ");
  }
  utils.printBanner();
  utils.printInfo(`搜索关键词: ${keyword}`);
  isRight = douyin.notIdealFormat(keyword);
  if (!isRight) {
    return;
  }
  const token = key.apiKey(process.env.GUAIKEI_API_TOKEN);
  const status = await douyin.createSearchTask(token, keyword);
  if (status.errcode === 0) {
    utils.printSuccess(`搜索任务创建成功, 正在搜索中...`);
  } else {
    utils.printError(
      `搜索任务创建失败时, 遇到未知错误, 请反馈给开发者 ${status} - ` +
        Date.now(),
    );
    return;
  }
  const task = await douyin.search(token, keyword);
  if (task.length === 0) {
    utils.printError(`搜索任务没有返回结果, 请稍后重试或联系开发者`);
    return;
  }
  const message = douyin.formatMessage(keyword, task);
  utils.printInfo(message);
  utils.printSuccess(`搜索任务完成, 共返回 ${task.length} 条结果`);

  const outPut = {
    keyword: keyword,
    results: task,
  };
  const outputPath = path.join(__dirname, "last-search.json");
  fs.writeFileSync(outputPath, JSON.stringify(outPut, null, 2));
  utils.printSuccess(`搜索结果已保存到 ${outputPath}`);
}

main().catch((error) => {
  utils.printError(error);
  process.exit(1);
});
