/**
 *  使用bcrypt作为密码加密与校验工具
 */
// const bcrypt = require('bcrypt'); 

// // 加密密码
// const hashPassword = async(password) => {
//     const saltRounds = 10; // 盐的复杂度
//     const hashed = await bcrypt.hash(password, saltRounds); 
//     return hashed;
// }

// // 校验密码
// const verifyPassword = async(password, hash) => {
//     const match = await bcrypt.compare(password, hash); 
//     return match; 
// }

// module.exports = { hashPassword, verifyPassword }; 