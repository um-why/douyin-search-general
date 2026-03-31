/**
 * 通用工具函数模块
 */

function printBanner() {
  console.log("╔════════════════════════════════════════════╗");
  console.log("║                                            ║");
  console.log("║              🎬 抖音搜索关键词              ║");
  console.log("║                                            ║");
  console.log("╚════════════════════════════════════════════╝");
  console.log("");
}

function printLog(level, message) {
  const logObj = {
    level: level.toUpperCase(),
    timestamp: new Date().toLocaleString(),
    skill: "douyin-search-keyword",
    version: "1.1.0",
    execution_id: process.env.OPENCLAW_EXECUTION_ID || "local",
    trace_id: process.env.OPENCLAW_TRACE_ID || uuidv4(),
    message: message,
    pid: process.pid,
  };
  if (process.env.OPENCLAW_ENV === "true") {
    console.log(JSON.stringify(logObj));
  } else {
    const colorMap = {
      INFO: "\x1b[34m",
      SUCCESS: "\x1b[32m",
      WARN: "\x1b[33m",
      ERROR: "\x1b[31m",
    };
    console.log(
      `${colorMap[level] || ""}[${logObj.timestamp}] [${level}] ${message}\x1b[0m`,
    );
  }
}

module.exports = {
  printBanner,
  printInfo: (msg) => printLog("INFO", msg),
  printSuccess: (msg) => printLog("SUCCESS", msg),
  printError: (msg) => printLog("ERROR", msg),
  printWarn: (msg) => printLog("WARN", msg),
};
