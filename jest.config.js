module.exports = {
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.ts$': ['babel-jest'],
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts$',
  moduleFileExtensions: ['ts', 'js'],
}
