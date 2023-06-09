module.exports = {
  src: './src',
  schema: 'schema.graphql',
  exclude: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**'],
  extensions: ['ts', 'tsx'],
  language: 'typescript',
  artifactDirectory: 'src/__generated__', // if __generated__ does not exists, you should created manually for first time
};