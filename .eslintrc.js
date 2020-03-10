module.exports = {
    env: {
        commonjs: true,
        es6: true
				node:true
    },
    extends: "eslint:recommended",
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parserOptions: {
        ecmaVersion: 2018
    },
    rules: {
		semi: "error", // 没有的 以 ; 结尾 就报红色的错误
		space-infix-ops: "error" // 要求操作符周围有空格
    }
};
