module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // 匹配规则:[开启规则参数，要求/禁用参数]
    semi: ["error", "always"], // 简单语句后边要求设置分号，不设置会报错
    semi: ["error", "never"], // 简单语句后边不要设置分号，设置会报错
    semi: ["off", "always"], // 关闭规则检测
    semi: ["off", "never"], // 关闭规则检测

    "space-before-function-paren": ["error", "never"], // 禁止在function小括号左边设置空格，否则报错
    "space-before-function-paren": ["error", "always"], // 要求在function小括号左边设置空格，否则报错
    "space-before-function-paren": ["off", "always"], // 关闭规则
    "space-before-function-paren": ["off", "never"], // 关闭规则

    "no-multiple-empty-lines": ["error", { max: 3 }], // 文件中间允许出现3个或以内的空白行
    "no-multiple-empty-lines": ["off", { max: 3 }] // 关闭规则
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};
