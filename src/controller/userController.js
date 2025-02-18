const { getCache, setCache } = require("../services/cacheService");

async function setUser(req, res) {
    const { userId, name, age } = req.body;

    console.log(userId)
    // const cachedUser = await getCache(`user:${userId}`);
    // if (cachedUser) {
    //     return res.json(JSON.parse(cachedUser));
    // }
    const user = { id: userId, name, age };
    await setCache(`user:${userId}`, JSON.stringify(user), 300);

    console.log(user);
    res.json({ message: "User cached successfully", user });
}

async function getUser(req, res) {
    const userId = req.params.id;

    const cachedUser = await getCache(`user:${userId}`);
    if (cachedUser) return res.json(JSON.parse(cachedUser));
    
    await setCache(`user:${userId}`, JSON.stringify(user), 300);

    res.json(user);
}

module.exports = { getUser, setUser };
