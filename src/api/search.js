/**
 * 抖音搜索模块
 */
const constants = require("../config/constants");
const { postJson, getJson } = require("../utils/request");
const { withRetry } = require("../utils/retry");
const utils = require("../utils/utils");

/**
 * 处理搜索结果数据
 * @param {Array} data - 原始搜索结果数组
 * @returns {Array} 处理后的结果数组
 */
function processSearchResults(data) {
  if (!Array.isArray(data)) {
    return [];
  }

  return data.map((item) => {
    const processedItem = { ...item };

    if (item.author_sec_uid) {
      processedItem.author_url = `https://www.douyin.com/user/${item.author_sec_uid}`;
    }

    if (item.create_time && !item.create_time_str) {
      processedItem.create_time_str = new Date(item.create_time * 1000).toLocaleString();
    }

    return processedItem;
  });
}

/**
 * 通用 API 请求方法
 * @param {string} method - HTTP 方法 (GET/POST)
 * @param {string} path - 请求路径
 * @param {object} params - URL 参数
 * @param {object} [data] - 请求体数据 (仅 POST)
 * @param {number} maxAttempts - 最大重试次数
 * @param {string} actionName - 操作名称（用于日志）
 * @returns {Promise<object>} API 响应
 */
async function requestApi(method, path, params, data, maxAttempts, actionName) {
  return await withRetry(
    async () => {
      let response;
      if (method === "POST") {
        response = await postJson(path, params, data);
      } else {
        response = await getJson(path, params);
      }
      return response;
    },
    maxAttempts,
    (attempt, err) => {
      utils.printError(`【${actionName}重试】 ${attempt + 1}/${maxAttempts} 次 - ${err.message}`);
    },
  );
}

/**
 * 创建抖音搜索任务
 * @param {string} token - 技能令牌
 * @param {string} keyword - 搜索关键词
 * @param {number} sort - 排序依据, 0: 综合排序, 1: 最多点赞, 2: 最新发布
 * @param {number} time - 发布时间, 0: 全部, 1: 一天内, 7: 七天内, 180: 半年内
 * @param {number} limit - 搜索数量, 1-60
 * @returns {Promise<Object>} 搜索任务状态
 * @throws {Error} API调用失败时抛出错误
 */
async function createSearchTask(token, keyword, sort, time, limit) {
  const params = {
    _: Date.now(),
    token: token,
  };

  const data = {
    keyword,
    sort_type: sort,
    publish_time: time,
    limit: limit,
  };

  return await requestApi(
    "POST",
    "/api/douyin/general-search/keyword",
    params,
    data,
    constants.CREATE_MAX_ATTEMPTS,
    "创建任务"
  );
}

/**
 * 获取抖音搜索任务结果
 * @param {string} token - 技能令牌
 * @param {string} keyword - 搜索关键词
 * @param {number} sort - 排序依据, 0: 综合排序, 1: 最多点赞, 2: 最新发布
 * @param {number} time - 发布时间, 0: 全部, 1: 一天内, 7: 七天内, 180: 半年内
 * @param {number} limit - 搜索数量, 1-60
 * @returns {Promise<Array>} 搜索结果数组
 * @throws {Error} API调用失败时抛出错误
 */
async function getSearchTask(token, keyword, sort, time, limit) {
  const params = {
    _: Date.now(),
    token: token,
    keyword: keyword,
    sort_type: sort,
    publish_time: time,
    limit: limit,
  };

  const response = await requestApi(
    "GET",
    "/api/douyin/general-search/info",
    params,
    null,
    constants.QUERY_MAX_ATTEMPTS,
    "查询任务"
  );

  if (response.data) {
    return processSearchResults(response.data);
  }

  return [];
}

module.exports = {
  createSearchTask,
  getSearchTask,
};
