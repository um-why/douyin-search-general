/**
 * 抖音热门搜索模块
 */

const constants = require("../config/constants");
const { getJson } = require("../utils/request");
const { withRetry } = require("../utils/retry");
const utils = require("../utils/utils");

async function getHotTask(token) {
  return await withRetry(
    async () => {
      const res = await getJson("/api/douyin/hot-search", {
        _: Date.now(),
        token: token,
      });
      return res.data;
    },
    constants.QUERY_MAX_ATTEMPTS,
    (attempt, err) => {
      utils.printError(
        `【获取抖音热榜重试】 ${attempt + 1}/${constants.QUERY_MAX_ATTEMPTS} 次 - ${err.message}`,
      );
    },
  );
}

module.exports = {
  getHotTask,
};
