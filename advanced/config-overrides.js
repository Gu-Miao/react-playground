const {
  override,
  fixBabelImports,
  addDecoratorsLegacy,
  addLessLoader,
  addWebpackAlias
} = require('customize-cra')
const path = require('path')
const reslovePath = pathUrl => path.join(__dirname, pathUrl)

module.exports = override(
  fixBabelImports('import', {
    librayName: 'antd',
    libarayDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {}
  }),
  addDecoratorsLegacy(),
  addWebpackAlias({
    '@@': reslovePath('.'),
    '@': reslovePath('src')
  })
)
