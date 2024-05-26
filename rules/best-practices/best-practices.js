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
            "plugin:@angular-eslint/recommended",
            "plugin:@angular-eslint/template/process-inline-templates",
        ],
        rules: {
            "max-len": [
                "error",
                {
                    "code": 140,
                    "tabWidth": 4,
                    "ignorePattern": '^import .*',
                    "ignoreComments": true,
                    "ignoreUrls": true,
                    "ignoreStrings": true,
                    "ignoreTemplateLiterals": true,
                    "ignoreRegExpLiterals": true,
                }
            ],

            // отключил слежение за пробелами перед ключевыми словами
            "@typescript-eslint/keyword-spacing": [
                "off",
            ],

            // запретить табы, вместо них использовать пробелы
            "no-tabs": 0,

            "no-unused-vars": 0,
            "@typescript-eslint/no-unused-vars": 0,

            // выключить точки с запятой
            "@typescript-eslint/semi": [
                "error",
                "never"
            ],

            // кавычки, только одинарные, кроме экранированных, кроме обратных кавычек для строк
            "@typescript-eslint/quotes": [
                "error",
                "single",
                {
                    "avoidEscape": true,
                    "allowTemplateLiterals": true
                }
            ],

            // запятые в конце объектов, массивов, параметров, только если многострочные
            "@typescript-eslint/comma-dangle": [
                "warn",
                "only-multiline",
            ],

            // отступы у скобок в объектах
            "@typescript-eslint/object-curly-spacing": [
                "error",
                "always",
                {
                    "arraysInObjects": true,
                    "objectsInObjects": true
                }
            ],

            // отступы у скобок в массивах
            "array-bracket-spacing": [
                "error",
                "never",
                {
                    "singleValue": false,
                    "objectsInArrays": false,
                    "arraysInArrays": false,
                }
            ],

            // отступы у скобок в динамических объектах
            "computed-property-spacing": [
                "error",
                "never"
            ],
            /** -------------------------------------------------------------------------------------------------------------------- */
            /**
             * правила, которые вылезли после airbnb
             */
            "import/no-extraneous-dependencies": "off",
            "import/no-deprecated": "off",

            /** -------------------------------------------------------------------------------------------------------------------- */
            /**
             * Блок правил по any, которые надо будет однажды включить и исправить
             */
            "@typescript-eslint/no-unsafe-return": [
                "off"
            ],
            "@typescript-eslint/no-unsafe-assignment": [
                "off"
            ],
            "@typescript-eslint/no-unsafe-member-access": [
                "off"
            ],
            "@typescript-eslint/no-unsafe-call": [
                "off"
            ],
            "@typescript-eslint/no-unsafe-argument": [
                "off"
            ],
            "@typescript-eslint/restrict-template-expressions": [
                "off"
            ],
            // указывает на явное использование ключевого слова any в качестве аннотации к типу
            "@typescript-eslint/no-explicit-any": [
                "error"
            ],
            // Запретить ненужные ограничения для универсальных типов
            "@typescript-eslint/no-unnecessary-type-constraint": "error",

            // Принудительно используйте сжатые необязательные цепные выражения вместо связанных логических "и", отрицательных логических "или"" или пустых объектов
            "@typescript-eslint/prefer-optional-chain": "error",

            "@typescript-eslint/no-redundant-type-constituents": [
                "off"
            ],
            // запрещает обращаться к полям объекта не через точку
            "@typescript-eslint/dot-notation": "off",
            // запрещает возвращать значение если метод возвращает void, запрещает присваивать значение если метод возвращает void
            // можно использовать, если разработчик явно укажет void в return
            // promise.then(value => void window.postMessage(value));
            "@typescript-eslint/no-confusing-void-expression": [
                "off",
                {
                    ignoreVoidOperator: true
                }
            ],
            // у нас почти не встречается, может есть смысл включить?
            "@typescript-eslint/unbound-method": [
                "off",
                {
                    "ignoreStatic": true
                }
            ],
            "@typescript-eslint/restrict-plus-operands": [
                "off",
            ],
            // Запрещать определенные типы
            "@typescript-eslint/ban-types": "error",
            "no-prototype-builtins": "off",
            "no-constant-condition": "off",
            // следит за правильным использованием промисов
            "@typescript-eslint/no-floating-promises": 0,
            // следит за корректным импортом типов
            "@typescript-eslint/no-import-type-side-effects": "off",
            "@typescript-eslint/no-unsafe-enum-comparison": "off",
            // требование использования либо interface либо type, непонятные преимущества правила
            "@typescript-eslint/consistent-type-definitions": "off",
            // проверка на null-assertion при сравнении
            "@typescript-eslint/no-confusing-non-null-assertion": "error",
            // не позволяет приводить к строковому виду объекты которые не могут быть приведены
            "@typescript-eslint/no-base-to-string": [
                "off"
            ],
            "@typescript-eslint/ban-ts-comment": "off",
            // проверяет отступы после членов класса, выключена проверка после однострочных объявления
            "@typescript-eslint/lines-between-class-members": [
                "error",
                "always",
                {
                    exceptAfterSingleLine: true
                }
            ],

            // проверка на неиспользованные выражения
            '@typescript-eslint/no-unused-expressions': ['error', { 'allowTernary': true }],

            // проверяет неиспользуемые конструкторы
            // не подходит, ругается на сервисы
            "@typescript-eslint/no-useless-constructor": "off",

            // выключает необходимость указывать типы переменных для простых примитивов, если они сразу задаются
            '@typescript-eslint/no-inferrable-types': 'error',

            // проверяет, чтобы нельзя было указать, что объект не nullable через символ !
            '@typescript-eslint/no-non-null-assertion': 0,

            // проверка на пустые функции
            "@typescript-eslint/no-empty-function": [
                "off",
            ],
            // запрещает использовать примитивы в качестве ошибки на throw
            "@typescript-eslint/no-throw-literal": "error",
            // проверка функций на некорректную замкнутость
            "@typescript-eslint/no-loop-func": "warn",

            // no-shadow, проверяет дубликаты названий переменных в разных блоках
            // хорошее правило, чтобы не наткнуться на использование переменной вне блока по ошибке
            // "no-shadow": "off",
            "@typescript-eslint/no-shadow": "off",

            // проверяет правильное описание интерфейсов и классов и конструкторов
            "@typescript-eslint/no-misused-new": "error",

            // необходимо объявлять функции через type, выключено
            "@typescript-eslint/prefer-function-type": "error",

            // проверяет отступы при аннотации методов и свойств, проверяет prettier
            "@typescript-eslint/type-annotation-spacing": "off",

            // предлагается не использовать дублированное использование функций (имеется ввиду, что необходимо корректно писать перегрузку функций)
            "@typescript-eslint/unified-signatures": "error",

            // проверка на дублирование значений enum
            "@typescript-eslint/no-duplicate-enum-values": "error",

            // проверка на пустые интерфейсы
            "@typescript-eslint/no-empty-interface": "off",

            // запрещает использование var
            'no-var': 'error',

            // не использовать побитовые операции
            "no-bitwise": "off",

            // не использовать calle, caller
            "no-caller": "error",

            // использовать только разрешенные console команды
            "no-console": [
                "error",
                {
                    "allow": [
                        "log",
                        "warn",
                        "dir",
                        "timeLog",
                        "assert",
                        "clear",
                        "count",
                        "countReset",
                        "group",
                        "groupEnd",
                        "table",
                        "dirxml",
                        "error",
                        "groupCollapsed",
                        "Console",
                        "profile",
                        "profileEnd",
                        "timeStamp",
                        "context"
                    ]
                }
            ],

            // запрещает использовать eval()-типные методы
            "no-implied-eval": "off",
            "@typescript-eslint/no-implied-eval": "error",

            // не использовать debugger
            "no-debugger": "off",

            // проверка скобок в блоках while if for
            "curly": "error",

            // требование скобок в стрелочных функциях (только там где реально требуется)
            'arrow-body-style': [
                "off",
            ],

            // требует точное сравнение, === вместо ==
            "eqeqeq": [
                "error",
                "smart"
            ],

            // требует в конструкции (key in obj) делать проверку hasOwn
            "guard-for-in": "error",

            // требует чтобы файл всегда кончался пустой строкой
            'eol-last': 'error',

            // предпочтение использовать стрелочные функции в callback
            'prefer-arrow-callback': 'error',

            // количество классов в файле
            'max-classes-per-file': 'off',

            // проверка нескольких пустых строк подряд
            'no-multiple-empty-lines': 'error',

            // проверка на пустые условия, циклы
            'no-empty': 'error',

            // не допускает попадания в куски кода, куда не должен был попасть (ex switch-case)
            'no-fallthrough': 'error',

            // проверяет сортировку ключей по алфавиту в объектах и enum
            'sort-keys': 'off',

            // запрещает переопределение параметров, как вариант ещё запретить менять свойства объекта { "props": true }
            "no-param-reassign": "off",

            // запрещает использование конструкции постфикса и префикса i++
            "no-plusplus": "off",

            // хороший способ запретить использование глобальных переменных и методов
            "no-restricted-globals": "off",

            // проверяет, чтобы при задании переменной с обеих сторон не было одинаковых значений
            "no-self-assign": [
                "error",
                {
                    "props": true
                }
            ],
            //Запретить висячие подчеркивания в идентификаторах
            "no-underscore-dangle": "off",

            '@typescript-eslint/sort-type-constituents': 'error',
        }
    }]
};
