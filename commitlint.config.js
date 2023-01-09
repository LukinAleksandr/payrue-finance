module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-empty': [1, 'never'],
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 72],
    'header-max-length': [2, 'always', 50],
    'scope-case': [2, 'always', 'upper-case'],
    'scope-empty': [2, 'never'],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', ['feat', 'fix', 'hot']],
  },
};
