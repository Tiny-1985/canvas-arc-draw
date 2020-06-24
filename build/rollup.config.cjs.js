import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    name: 'dragArc',
    file: 'dist/drag-arc.cjs.js',
    format: 'cjs'
  },
})

export default config