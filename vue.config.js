const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, './dist'),
    devServer: {
        proxy: {
            '/api': {
                target: 'http://api.openweathermap.org'
            }
        }
    }
}