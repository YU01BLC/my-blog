module.exports = {
  env: {
    browser: true,
    es2021: true,
    mocha: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb-typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'airbnb/hooks',
    // ルールをすべて有効にする
    'eslint:all',
    // 'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'next/core-web-vitals',
  ],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    // TypeScriptプロジェクトの設定ファイル
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'import'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
    // 他に解決する拡張子を指定
    'import/extenstions': ['.js', '.jsx', '.ts', '.tsx'],
  },
  rules: {
    // ReactがJSXを使用する際にReactがインポートされているかどうかの確認を無効化
    'react/react-in-jsx-scope': 'off',
    // importの解決を一時的に無効化
    'import/no-unresolved': 'off',
    // TypeScriptプロジェクト内でCommonJSスタイルのrequireの使用を許可
    '@typescript-eslint/no-var-requires': 0,
    // 使われていないPromiseの返り値に対する警告を無効化
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    // importの拡張子指定を制御
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        css: 'always',
      },
    ],
    // .jsxや.tsxファイルの使用を許可
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    // void演算子の使用を警告に変更
    'no-void': [
      'error',
      {
        allowAsStatement: true,
      },
    ],
    // importの順序を調整
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index', 'object', 'type'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
        pathGroupsExcludedImportTypes: ['builtin'],
        warnOnUnassignedImports: true,
      },
    ],
    // newキーワードの呼び出しがなく、関数名を大文字にすることを禁止
    'new-cap': [
      'error',
      {
        // 関数名が指定したパターンに一致する場合、コンストラクタとして扱う
        newIsCap: true,
        capIsNew: false,
        // 例外として指定する関数名の正規表現パターン
        newIsCapExceptions: ['Inter'],
      },
    ],
    // 一行での変数宣言を許可
    'one-var': ['error', 'never'],
    // const推奨警告を警告に変更
    'prefer-const': 'warn',
    // JSXの引用符スタイルを変更
    'jsx-quotes': ['error', 'prefer-single'],
    // マルチラインコメントスタイルの無効化
    'multiline-comment-style': 'off',
    // TODOコメントに対する警告を設定
    'no-warning-comments': 'warn',
    // キーのソートを無効化
    'sort-keys': 'off',
    // 関数内のステートメント数に対する警告を設定
    'max-statements': 'warn',
    // 関数内の行数に対する警告を無効化
    'max-lines-per-function': 'off',
    // ファイルの行数に対する警告を設定
    'max-lines': 'warn',
    // マジックナンバーに対する警告を無効化
    'no-magic-numbers': 'off',
    // アロー関数の本体スタイルを設定
    'arrow-body-style': 'error',
    // Unicodeを要求する正規表現の設定
    'require-unicode-regexp': 'error',
    // 三項演算子の禁止
    'no-ternary': 'off',
    // コメントの先頭を大文字にするルールを無効化
    'capitalized-comments': 'off',
    // 複雑な条件分岐に対する警告
    complexity: ['warn', 4],
    // スペースのないコメントに対する警告
    'spaced-comment': 'warn',
    // インラインコメントの警告
    'no-inline-comments': 'warn',
    // インラインコメントの位置に対する警告
    'line-comment-position': 'warn',
    // 使用前の変数宣言を許可
    'no-use-before-define': 'off',
    // camelCaseの使用を推奨
    camelcase: 'warn',
    // console.logの使用を警告に変更
    'no-console': 'warn',
    // importの順序を一定のルールに基づく形に変更
    'sort-imports': 0,
    // importの順序を一定のルールに基づく形に変更
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index', 'object', 'type'],
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        warnOnUnassignedImports: true,
      },
    ],
    // 変数名の最小長に対する警告
    'id-length': 'off',
    // 末尾のスペースに対する警告
    'no-trailing-spaces': 'warn',
    // 不正な空白に対する警告
    'no-irregular-whitespace': 'error',
  },
};