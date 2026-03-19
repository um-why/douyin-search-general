/**
 * 抖音搜索模块
 * 提供抖音综合搜索功能
 */
const https = require("https");
const querystring = require("querystring");
const BASE_URL = "www.guaikei.com";
const utils = require("./utils");

function notIdealFormat(keyword) {
  if (keyword.includes("http")) {
    utils.printError(
      `搜索关键词包含 http 链接, 请输入普通关键词, 例如: 新媒体`,
    );
    return false;
  }
  return true;
}

function formatMessage(keyword, result) {
  let message = `抖音综合搜索结果: ${keyword}\n`;
  message += "-".repeat(30) + "\n\n";
  for (let i = 0; i < result.length; i++) {
    const item = result[i];
    message += `${i + 1} . `;
    message += `【标题】: ${item.desc || ""}\n`;
    message += `【发布人】: ${item.author_nickname || ""}\n`;
    message += `【发布时间】: ${item.create_time_str || ""}\n`;
    message += `【链接】: ${item.url || ""}\n`;
    message += `【视频封面】: ${item.dynamic_cover[0] || ""}\n`;
    if (item.images !== undefined) {
      message += `【图文】: ${JSON.stringify(item.images)}\n`;
    } else {
      message += `【视频链接】: ${item.play_addr || ""}\n`;
    }
    message += `【点赞】: ${item.digg_count || 0}\t`;
    message += `【评论】: ${item.comment_count || 0}\t`;
    message += `【收藏】: ${item.collect_count || 0}\t`;
    message += `【分享】: ${item.share_count || 0}\n`;
    message += "\n";
  }
  return message;
}

async function createSearchTask(token, keyword) {
  return new Promise((resolve, reject) => {
    const url = "/api/douyin/general-search/keyword";
    const params = { _: Date.now(), token: token };
    const data = JSON.stringify({
      keyword,
      sort_type: 0,
      publish_time: 0,
      limit: 10,
    });
    const options = {
      hostname: BASE_URL,
      path: url + "?" + querystring.stringify(params),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(data),
      },
      timeout: 20000,
    };
    const req = https.request(options, (res) => {
      let body = "";
      res.on("data", (chunk) => {
        body += chunk;
      });
      res.on("end", () => {
        if (res.statusCode === 200) {
          try {
            const json = JSON.parse(body);
            if (json.errcode === 0) {
              resolve(json);
            } else if (
              json.errcode === 1 ||
              json.errcode === 2 ||
              json.errcode === 3 ||
              json.errcode === 99
            ) {
              reject(new Error(`请求错误信息: ${json.errmsg}`));
              return;
            } else {
              reject(new Error(`请求错误信息: ${json.errmsg}`));
              return;
            }
          } catch (error) {
            reject(new Error(`解析响应失败: ${error.message}`));
            return;
          }
        } else if (
          res.statusCode === 401 ||
          res.statusCode === 407 ||
          res.statusCode === 403 ||
          res.statusCode === 410 ||
          res.statusCode === 408
        ) {
          reject(
            new Error(
              `GUAIKEI_API_TOKEN 配置错误, 请检查或删除 GUAIKEI_API_TOKEN 环境变量后使用默认值`,
            ),
          );
        } else {
          reject(new Error(`请求失败, 状态码: ${res.statusCode}`));
        }
      });
    });
    req.on("error", (err) => {
      reject(err);
    });
    req.write(data);
    req.end();
  });
}

async function search(token, keyword) {
  let lastError;
  for (let i = 1; i <= 60; i++) {
    try {
      return await getSearchTask(token, keyword);
    } catch (error) {
      lastError = error;
      if (i === 60) {
        break;
      }
      await new Promise((resolve) => setTimeout(resolve, 3000));
    }
  }
  throw lastError;
}

async function getSearchTask(token, keyword) {
  return new Promise((resolve, reject) => {
    const url = "/api/douyin/general-search/info";
    const params = {
      _: Date.now(),
      token: token,
      keyword: keyword,
      sort_type: 0,
      publish_time: 0,
      limit: 10,
    };
    const options = {
      hostname: BASE_URL,
      path: url + "?" + querystring.stringify(params),
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 20000,
    };
    const req = https.request(options, (res) => {
      let body = "";
      res.on("data", (chunk) => {
        body += chunk;
      });
      res.on("end", () => {
        if (res.statusCode === 200) {
          try {
            const json = JSON.parse(body);
            if (json.errcode === 0) {
              for (let i = 0; i < json.data.length; i++) {
                const item = json.data[i];
                if (item.author_sec_uid !== undefined) {
                  json.data[i].author_url =
                    "https://www.douyin.com/user/" + item.author_sec_uid;
                }
                if (item.create_time !== undefined) {
                  json.data[i].create_time_str = new Date(
                    item.create_time * 1000,
                  ).toLocaleString();
                }
              }
              resolve(json.data);
            } else if (
              json.errcode === 1 ||
              json.errcode === 2 ||
              json.errcode === 3 ||
              json.errcode === 99
            ) {
              reject(new Error(`请求错误信息: ${json.errmsg}`));
              return;
            } else {
              reject(new Error(`请求错误信息: ${json.errmsg}`));
              return;
            }
          } catch (error) {
            reject(new Error(`解析响应失败: ${error.message}`));
            return;
          }
        } else if (
          res.statusCode === 401 ||
          res.statusCode === 407 ||
          res.statusCode === 403 ||
          res.statusCode === 410 ||
          res.statusCode === 408
        ) {
          reject(
            new Error(
              `GUAIKEI_API_TOKEN 配置错误, 请检查或删除 GUAIKEI_API_TOKEN 环境变量后使用默认值`,
            ),
          );
        } else {
          reject(new Error(`请求失败, 状态码: ${res.statusCode}`));
        }
      });
    });
    req.on("error", (err) => {
      reject(err);
    });
    req.end();
  });
}

module.exports = {
  createSearchTask,
  formatMessage,
  getSearchTask,
  notIdealFormat,
  search,
};
