module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      fragment: 'Fragment',
      version: 'detect',
      flowVersion: '0.53',
    },
    propWrapperFunctions: ['forbidExtraProps', {
      property: 'freeze',
      object: 'Object',
    }, {
      property: 'myFavoriteWrapper',
    }, {
      property: 'forbidExtraProps',
      exact: true,
    }],
    componentWrapperFunctions: ['observer', {
      property: 'styled',
    }, {
      property: 'observer',
      object: 'Mobx',
    }, {
      property: 'observer',
      object: '<pragma>',
    }],
    formComponents: ['CustomForm', {
      name: 'Form',
      formAttribute: 'endpoint',
    }],
    linkComponents: ['Hyperlink', {
      name: 'Link',
      linkAttribute: 'to',
    }],
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-max-props-per-line': ['error', {
      maximum: {
        single: 1,
        multi: 1,
      },
    }],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-indent': [2, 2],
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-one-expression-per-line': ['error', {
      allow: 'single-child',
    }],
    'react/jsx-curly-newline': ['error', {
      multiline: 'consistent',
      singleline: 'consistent',
    }],
    'react/jsx-curly-brace-presence': ['error', {
      props: 'always',
      children: 'never',
    }],
    'react/jsx-tag-spacing': ['error', {
      beforeClosing: 'proportional-always',
      beforeSelfClosing: 'proportional-always',
    }],
    'react/self-closing-comp': ['error', {
      component: true,
      html: true,
    }],
    'react/destructuring-assignment': ['error', 'always'],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-alert': 'warn',
    indent: ['warn', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    'no-console': ['warn', {
      allow: ['warn', 'error'],
    }],
    'linebreak-style': 0,
    'no-debugger': 1,
    'no-bitwise': ['error', { allow: ['~'] }],
    'func-names': ['warn', 'as-needed', { generators: 'as-needed' }],
    camelcase: [
      'warn',
      {
        properties: 'always',
      },
    ],
    'consistent-this': ['warn', 'self', 'that'],
    'no-async-promise-executor': 0,
    'no-unresolved': 0,
    'import/no-relative-packages': 'error',
    'import/no-unresolved': 0,
    'import/extensions': [1, 'never',
      {
        json: 'always',
        png: 'always',
        jpg: 'always',
        svg: 'always',
        scss: 'always',
        css: 'always',
      },
    ],
    'import/no-extraneous-dependencies': 1,
    'import/no-self-import': 1,
    'import/no-cycle': 1,
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
          'unknown',
        ],
        pathGroups: [
          {
            pattern: '~/**',
            group: 'external',
          },
        ],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'array-bracket-spacing': 1,
    'react/jsx-uses-react': 0,
    'react/jsx-indent-props': [2, 2],
    'react/jsx-closing-bracket-location': [2, 'tag-aligned'],
    'no-return-await': 0,
    'class-methods-use-this': 0,
    'no-param-reassign': 0,
  },
};
