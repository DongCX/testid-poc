module.exports = {
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
  ],
  "plugins": [
    "vue",
    "@dongcx0319/testid"
  ],
  "rules": {
    "@dongcx0319/testid/data-test-id": "error"
  }
}
