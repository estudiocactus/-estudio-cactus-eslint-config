module.exports = {
  overrides: [
    {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: true
      },
      files: ['*.ts', '*.js'],
      extends: ['./lib/index.js']
    }
  ],
  ignorePatterns: ['lib']
}
