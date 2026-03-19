/**
 * 通用工具函数模块
 */

function printBanner() {
  console.log("╔════════════════════════════════════════════╗");
  console.log("║                                            ║");
  console.log("║               🎬 抖音通用搜索               ║");
  console.log("║                                            ║");
  console.log("╚════════════════════════════════════════════╝");
  console.log("");
}

/**
 * 打印普通消息
 */
function printInfo(msg) {
  console.log(`ℹ️  ${msg}`);
}

/**
 * 打印成功消息
 */
function printSuccess(msg) {
  console.log(`✅  ${msg}`);
}

/**
 * 打印错误消息
 */
function printError(msg) {
  console.log(`❌  错误: ${msg}`);
}

module.exports = {
  printBanner,
  printInfo,
  printSuccess,
  printError,
};
