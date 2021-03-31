const Path = require('path');

const config = require('config-webpack');

module.exports = [
    {
        ...config,
        entry: {
            app: Path.resolve(__dirname, './src/index.tsx')
        }
    }
]