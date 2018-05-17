const path = require('path');

const outputPath = path.resolve('./static/docs/frappe')

module.exports = {
    title: 'Frappe Framework',
    description: 'A superhero web framework',
    dest: outputPath,
    base: '/docs/frappe/',
    themeConfig: {
        sidebar: [
            {
                title: 'Frappe Tutorial',
                children: [
                    '/tutorial/before',
                    '/tutorial/app',
                    '/tutorial/bench',
                    '/tutorial/new-app',
                    '/tutorial/setting-up-the-site',
                    '/tutorial/start',
                    '/tutorial/models',
                    '/tutorial/roles',
                    '/tutorial/doctypes',
                    '/tutorial/naming-and-linking',
                    '/tutorial/doctype-directory-structure',
                    '/tutorial/users-and-records',
                    '/tutorial/form-client-scripting',
                    '/tutorial/controllers',
                    '/tutorial/reports',
                    '/tutorial/web-views',
                    '/tutorial/single-doctypes',
                    '/tutorial/task-runner',
                    '/tutorial/conclusion',
                ]
            },
            {
                title: 'Bench',
                children: [
                    '/bench/configuring-https',
                    '/bench/lets-encrypt-ssl-setup',
                    '/bench/diagnosing-the-scheduler',
                    '/bench/manual-setup',
                    '/bench/setup-multitenancy',
                    '/bench/setup-production',
                    '/bench/adding-custom-domains',
                    '/bench/setting-limits',
                    '/bench/background-services',
                    '/bench/bench-commands-cheatsheet',
                    '/bench/bench-procfile',
                ],
            },
            {
                title: 'Videos',
                children: [
                    '/videos/'
                ]
            }
        ]
    }
}
