module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb-typescript', 'plugin:react-hooks/recommended'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['jsx', 'tsx'],
      },
    ],
    // "jsx-no-multiline-js": 0,
    // "no-restricted-globals": ["error", "event", "fdescribe"]
    'import/no-extraneous-dependencies': 0,
    'react/jsx-wrap-multilines': 0,
    'react/jsx-props-no-spreading': [{ explicitSpread: 'ignore' }], // 允许{...props}传递属性
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0, // 由于ESLint检查强制非Button的 onClick 事件需要至少一个键盘事件。
    'no-console': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0, //非交互元素分配鼠标或键盘事件侦听器（像li这种标签）
    'no-tabs': 0,
    'no-plusplus': 0,
    '@typescript-eslint/no-throw-literal': 0,
    'no-bitwise': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars-experimental': 'error',
    'react/require-default-props': 0,
    'react-hooks/exhaustive-deps': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 0,
  },
  globals: {
    moment: true,
    vis: true,
    echarts: true,
  },
};
