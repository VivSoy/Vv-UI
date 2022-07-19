module.exports = {
  env: {
    globals: {
      defineProps: 'readonly',
      defineEmits: 'readonly',
      defineExpose: 'readonly',
      withDefaults: 'readonly'
    },
    browser: true,
    es2021: true
  },
  extends: ['plugin:vue/vue3-strongly-recommended', 'standard'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-unused-vars': 'off'
  }
}
