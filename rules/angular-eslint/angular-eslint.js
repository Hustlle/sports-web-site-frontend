module.exports = {
    env: {
        es6: true,
        browser: true,
    },
    overrides: [{
        files: ["*.ts"],
        parser: '@typescript-eslint/parser',
        parserOptions: {
            ecmaVersion: 6,
            sourceType: 'module',
            project: ['./tsconfig.json'],
        },
        plugins: [
            '@angular-eslint',
            '@angular-eslint/eslint-plugin',
        ],
        extends: [
            "plugin:@angular-eslint/recommended",
            "plugin:@angular-eslint/template/process-inline-templates",
        ],
        rules: {
            // Запрещает объявление пустых методов жизненного цикла
            "@angular-eslint/no-empty-lifecycle-method": [
                "off",
            ],

            // позволяет использовать только @HostListener и @HostBinding свойству host декораторов @Directive и @Component.
            "@angular-eslint/no-host-metadata-property": "error",

            // запрещает использовать кастомные имена для Input и Output директив
            "@angular-eslint/no-input-rename": "error",

            "@angular-eslint/no-output-rename": "error",

            // позволяет использовать @Input и @Output только в виде декораторов
            "@angular-eslint/no-inputs-metadata-property": "error",

            "@angular-eslint/no-outputs-metadata-property": "error",
            // запрещает использование префиксов on на Output декораторах

            "@angular-eslint/no-output-on-prefix": "error",

            // следит за названием хуков (ex. ngOnInit)
            "@angular-eslint/use-lifecycle-interface": "error",

            // проверяет правильность написания pipe
            "@angular-eslint/use-pipe-transform-interface": "error",

            // правильные суффиксы в названиях компонентов
            '@angular-eslint/component-class-suffix': 'error',

            // проверка допустимых хуков в классе
            '@angular-eslint/contextual-lifecycle': 'off',

            // правильные суффиксы в названиях директив
            '@angular-eslint/directive-class-suffix': 'off',

            // правильные названия селекторов директив
            '@angular-eslint/directive-selector': [
                'error',
                { type: 'attribute', style: 'camelCase' },
            ],

            // правильные названия селекторов компонентов
            '@angular-eslint/component-selector': [
                'error',
                { type: 'element', prefix: ['app', 'el', 'mf', 'ui', 'p', 'a', 'c'], style: 'kebab-case' },
            ],

            // проверка на правильное использование hook
            '@angular-eslint/no-conflicting-lifecycle': 'error',

            // // ORIGINAL tslint.json -> "no-output-native": true,
            '@angular-eslint/no-output-native': 'error',
        }
    }]
};
