const https = require("https");
const querystring = require("querystring");
const constants = require("../config/constants");
const { ApiError, NetworkError, TimeoutError, AuthError } = require("./errors");

async function request(options, data = null) {
  return new Promise((resolve, reject) => {
    const req = https.request(
      { ...options, timeout: constants.REQUEST_TIMEOUT },
      (res) => {
        res.setEncoding("utf-8");
        let body = "";
        res.on("data", (chunk) => (body += chunk));
        res.on("end", () => {
          if (res.statusCode === 200) {
            try {
              const jsonBody = JSON.parse(body);
              if (jsonBody.errcode === 0) {
                resolve(jsonBody);
              } else {
                reject(
                  new ApiError(
                    jsonBody.errcode.toString(),
                    jsonBody.errmsg || "请求失败",
                  ),
                );
              }
            } catch (parseError) {
              reject(new NetworkError(`响应解析失败: ${parseError.message}`));
            }
          } else if (res.statusCode === 401 || res.statusCode === 403) {
            reject(new AuthError("GUAIKEI_API_TOKEN 无效, 请检查环境变量"));
          } else {
            reject(
              new ApiError(
                `HTTP_${res.statusCode}`,
                `请求失败, 状态码: ${res.statusCode}`,
              ),
            );
          }
        });
      },
    );

    req.on("error", (err) => {
      if (err.code === "ETIMEDOUT" || err.code === "ECONNRESET") {
        reject(new TimeoutError("请求超时或连接被重置"));
      } else {
        reject(new NetworkError(`网络错误: ${err.message}`));
      }
    });

    req.on("timeout", () => {
      req.destroy();
      reject(new TimeoutError(`请求超时 (${constants.REQUEST_TIMEOUT}ms)`));
    });

    if (data) {
      req.write(data);
    }
    req.end();
  });
}

async function postJson(path, params, data) {
  if (!path || typeof path !== "string") {
    throw new Error("path 必须是非空字符串");
  }
  if (!params || typeof params !== "object") {
    throw new Error("params 必须是对象");
  }
  if (!data || typeof data !== "object") {
    throw new Error("data 必须是对象");
  }

  const fullPath = `${path}?${querystring.stringify(params)}`;
  const jsonData = JSON.stringify(data);

  const options = {
    host: constants.BASE_URL,
    path: fullPath,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(jsonData),
    },
  };

  return await request(options, jsonData);
}

async function getJson(path, params) {
  if (!path || typeof path !== "string") {
    throw new Error("path 必须是非空字符串");
  }
  if (!params || typeof params !== "object") {
    throw new Error("params 必须是对象");
  }

  const fullPath = `${path}?${querystring.stringify(params)}`;
  const options = {
    host: constants.BASE_URL,
    path: fullPath,
    method: "GET",
  };

  return await request(options);
}

module.exports = { getJson, postJson };
