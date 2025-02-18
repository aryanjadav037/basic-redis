const client = require("../config/redis");

async function getCache(key) {
    return await client.get(key);
}

async function setCache(key, value, ttl = 300) {
    await client.setEx(key, ttl, value);
}

module.exports = { getCache, setCache };
