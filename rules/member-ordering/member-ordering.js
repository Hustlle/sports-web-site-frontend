module.exports = {
    env: {
        es6: true,
        browser: true,
    },
    overrides: [{
        files: ['*.ts'],
        parser: '@typescript-eslint/parser',
        parserOptions: {
            ecmaVersion: 6,
            sourceType: 'module',
            project: ['./tsconfig.json'],
        },
        plugins: [
            '@typescript-eslint',
        ],
        extends: [
            'eslint:recommended',
            'plugin:@typescript-eslint/recommended',
            'plugin:@typescript-eslint/recommended-requiring-type-checking',
        ],
        rules: {
            '@typescript-eslint/member-ordering': [
                'error',
                {
                    default: [
                        'signature',

                        "public-instance-field",
                        "private-instance-field",
                        "#private-instance-field",
                        "protected-instance-field",

                        /**
                         * static fields
                         * [sort: public -> protected -> private]
                         **/
                        'public-static-field',
                        'private-static-field',
                        'protected-static-field',

                        /**
                         * static methods
                         * [sort: public -> protected -> private]
                         **/
                        'public-static-method',
                        'private-static-method',
                        'protected-static-method',

                        /**
                         * abstract fields
                         * [sort: public -> protected -> private]
                         **/
                        'public-abstract-field',
                        'protected-abstract-field',

                        /**
                         * instance fields
                         * [sort: private -> protected -> public]
                         * [sort: decorated -> non-decorated]
                         **/
                        'private-decorated-field',
                        'protected-decorated-field',
                        'public-decorated-field',

                        /**
                         * constructors
                         * [sort: public -> protected -> private]
                         **/
                        'public-constructor',
                        'private-constructor',
                        'protected-constructor',

                        /**
                         * abstract
                         * [sort: public -> private -> protected]
                         **/
                        'public-abstract-get',
                        'public-abstract-set',
                        'protected-abstract-get',
                        'protected-abstract-set',
                        'public-abstract-method',
                        'protected-abstract-method',

                        /**
                         * methods
                         * [sort: public -> protected -> private]
                         * [sort: decorated -> non-decorated]
                         **/
                        'public-decorated-method',
                        'public-instance-method',
                        'private-decorated-method',
                        'private-instance-method',
                        'protected-decorated-method',
                        'protected-instance-method',
                    ],
                },
            ]
        }
    }]
};
