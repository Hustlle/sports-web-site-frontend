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
            'rxjs',
        ],
        rules: {
            // Это правило запрещает использование rxjs-compat
            'rxjs/no-compat': 'error',

            // Это правило запрещает использование подключаемых наблюдаемых объектов
            'rxjs/no-connectable': 'error',

            // Это правило приводит к сбоям в работе эффектов и эпопей, которые запускают действия, не соответствующие их фильтру OfType
            'rxjs/no-cyclic-action': 'error',

            // Наблюдаемая величина, возвращаемая функцией, не присваивается переменной или свойству и не передается функции
            'rxjs/no-ignored-observable': 'error',

            // Это правило приводит к сбоям, если используется метод toPromise
            'rxjs/no-topromise': 'error',

            // Это правило приводит к сбоям, если catchError используется в эффекте или epic таким образом, чтобы завершить самую внешнюю наблюдаемую функцию.
            'rxjs/no-unsafe-catch': 'error',

            // Это правило приводит к сбоям, если first используется в эффекте или epic таким образом, чтобы завершить самую внешнюю наблюдаемую область
            'rxjs/no-unsafe-first': 'error',

            // Это правило приводит к сбоям, если switchMap используется в эффектах или epics, которые выполняют действия, отличные от чтения
            'rxjs/no-unsafe-switchmap': 'error',

            // Это правило запрещает выдавать значения, которые не являются экземплярами Error или DOMException.
            'rxjs/throw-error': 'error',
        }
    }]
};
