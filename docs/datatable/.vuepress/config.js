const path = require('path');

module.exports = {
    title: 'Frappe DataTable',
    description: 'A simple, modern and interactive datatable for the web',
    base: '/docs/datatable/',
    dest: path.resolve('./static/docs/datatable'),
    themeConfig: {
        sidebar: [
            '/',
            '/download',
            '/configuration',
            '/events'
        ]
    }
}
