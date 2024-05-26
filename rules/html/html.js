module.exports = {
    overrides: [
        {
            files: ['*.html'],
            plugins: ['@html-eslint'],
            parser: '@html-eslint/parser',
            rules: {
                // Установите постоянный интервал между символами // или /* в комментарии
                'spaced-comment': 'off',

                // отключает правила ESLint во всех строках, перед которыми стоит комментарий
                'eslint-comments/disable-enable-pair': 'off',

                /**
                 * Наилучшая практика
                 * */
                // Спецификация HTML требует, чтобы имена атрибутов были уникальными в пределах одного HTML-элемента
                '@html-eslint/no-duplicate-attrs': 'error',

                // Запрещает дублирование атрибутов идентификатора.
                '@html-eslint/no-duplicate-id': 'error',

                // Это правило запрещает использование встроенных стилей.
                '@html-eslint/no-inline-styles': 'error',

                // Это правило запрещает использование устаревших тегов в HTML5
                '@html-eslint/no-obsolete-tags': 'error',

                // Это правило запрещает использование небезопасной цели='_blank'.
                '@html-eslint/no-target-blank': 'error',

                // Это правило предписывает использовать элемент button с допустимым атрибутом type.("кнопка", "отправить", "сбросить")
                '@html-eslint/require-button-type': 'off',

                // Это правило применяет закрывающий тег.
                '@html-eslint/require-closing-tags': [
                    'error',
                    { selfClosing: 'always', allowSelfClosingCustom: false },
                ],

                // Это правило обязывает <li> находиться в <ul>, <ol> или <menu>.
                '@html-eslint/require-li-container': 'error',

                // Это правило запрещает многократное использование <h1>.
                '@html-eslint/no-multiple-h1': 'error',

                /**
                 * Cпециальные возможности
                 */
                // Это правило запрещает использование абстрактных ролей
                '@html-eslint/no-abstract-roles': 'error',

                // Это правило запрещает использование атрибутов accesskey
                '@html-eslint/no-accesskey-attrs': 'error',

                // Это правило запрещает использование атрибута aria-hidden на теле
                '@html-eslint/no-aria-hidden-body': 'error',

                // Это правило запрещает использование user-scalable=no в <meta name="viewport">
                '@html-eslint/no-non-scalable-viewport': 'error',

                // Это правило запрещает использование положительного атрибута tabindex.
                '@html-eslint/no-positive-tabindex': 'error',

                // Это правило обязывает использовать атрибут alt в тегах img.
                '@html-eslint/require-img-alt': 'error',

                /**
                 * Стили
                 */
                // Это правило обеспечивает соблюдение согласованного соглашения об именовании значений атрибутов id
                '@html-eslint/id-naming-convention': ['error', 'kebab-case'],

                // Это правило применяет новые строки между тегами.
                '@html-eslint/element-newline': 'error',

                // Это правило запрещает дополнительные пробелы вокруг атрибутов.
                '@html-eslint/no-extra-spacing-attrs': [
                    'error',
                    { enforceBeforeSelfClose: true },
                ],

                // Это правило запрещает использование нескольких пустых строк
                '@html-eslint/no-multiple-empty-lines': 'error',

                // Это правило запрещает заключительные пробелы в конце строк.
                '@html-eslint/no-trailing-spaces': 'error',

                // Это правило обеспечивает согласованность атрибутов, заключаемых в кавычки с двойным(") или одинарным(') значением
                '@html-eslint/quotes': 'error',

            },
        },
    ],
};
