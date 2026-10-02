import taskQuestImage from "../assets/taskQuest.png";
import fitBuddyImage from "../assets/fitbuddy.png";
import colorSelectImage from "../assets/color_select.png";
import yoriaiImage from "../assets/yoriai.png";
export type WorkFeature = {
  title: string;
  description: string;
};

export type WorkSection = {
  label: string;
  title: string;
  paragraphs?: string[];
  features?: WorkFeature[];
  variant?: "default" | "features";
};

export type WorkLink = {
  label: string;
  url: string;
};

export type Work = {
  slug: string;
  createdAt: string;

  title: string;
  catchphrase: string;
  technology: string;

  image: string;
  imageAlt: string;

  listCategory: string;
  description: string;

  category: string;
  type: string;
  role: string;
  year: string;

  sections: WorkSection[];
  links?: WorkLink[];
};

export const works: Work[] = [
  {
    slug: "task-quest",
    createdAt: "2026-05-01",

    title: "Task Quest",
    catchphrase: "タスク管理 × ゲーム要素",
    technology: "React / TypeScript / Spring Boot / MySQL",

    image: taskQuestImage,
    imageAlt: "Task Quest",

    listCategory: "個人開発 / WEB APPLICATION",

    description:
      "タスク管理にゲーム要素を取り入れたWebアプリケーションです。タスクの達成を単なる「消化」ではなく、自分の積み重ねとして実感できるサービスを目指して開発しています。",

    category: "PERSONAL DEVELOPMENT",
    type: "個人開発",
    role: "企画 / 設計 / フロントエンド / バックエンド",
    year: "2026",

    sections: [
      {
        label: "OVERVIEW",
        title: "タスクへの一歩を、\n少し楽しく。",
        paragraphs: [
          "Task Questは、タスク管理にゲーム要素を取り入れたWebアプリケーションです。",
          "タスクを管理するだけでなく、タスクを達成すること自体を楽しめるサービスを目指して開発しています。",
        ],
      },
      {
        label: "BACKGROUND",
        title: "制作背景",
        paragraphs: [
          "SNSやゲームなど身近な誘惑が多い中で、新しい習慣を始めたり継続したりすることには心理的なハードルがあると考えました。",
          "そこで、誘惑になりやすい「ゲーム」の要素をあえてタスク管理に取り入れることで、タスクに取り掛かるまでのハードルを下げられないかと考え、Task Questの開発を始めました。",
          "タスクを完了すると経験値を獲得できる仕組みにすることで、「やるべきことを消化した」だけではなく、自分の取り組みが積み上がっていることを実感できるサービスを目指しています。",
        ],
      },
      {
        label: "FEATURES",
        title: "主な機能",
        variant: "features",
        features: [
          {
            title: "タスク管理",
            description:
              "タスクの作成・編集・完了管理に加え、優先度や締切日時を設定できます。",
          },
          {
            title: "カレンダー",
            description:
              "日付ごとにタスクを確認し、カレンダーから直接タスクを追加できます。",
          },
          {
            title: "経験値・レベル",
            description:
              "タスクを達成することで経験値を獲得し、取り組みの積み重ねを可視化します。",
          },
          {
            title: "統計・振り返り",
            description:
              "これまでの取り組みを振り返り、達成感や継続するきっかけにつなげます。",
          },
        ],
      },
      {
        label: "UI・UX",
        title: "迷わず使えることを\n大切に。",
        paragraphs: [
          "タスク管理という本来の目的に集中できるよう、シンプルで迷いにくいUIを意識して設計しています。",
          "ゲーム要素を取り入れながらも、アニメーションやキャラクターなどを過剰に配置すると視線が分散すると考え、必要以上に装飾を増やさないようにしました。",
          "また、タスクを登録するためだけに画面を移動する手間を減らすため、ホーム画面とカレンダー画面のどちらからでもタスクを追加できるようにしています。",
        ],
      },
      {
        label: "CHALLENGE",
        title: "初めての\nSpring Boot。",
        paragraphs: [
          "PHPを使用したバックエンド開発の経験はありましたが、Java / Spring Bootを使用したバックエンド開発はこのプロジェクトが初めてでした。",
          "Spring Bootでのクラスやパッケージの役割分担、MySQLとの接続、フレームワークが提供する機能など、実際のアプリケーションとして使用する中で分からない部分が多くありました。",
          "分からない仕組みを一つずつ調べ、実際に登録・取得されるデータとコードの動きを照らし合わせながら理解を進めました。",
        ],
      },
      {
        label: "LEARNING",
        title: "システム全体を\n考える。",
        paragraphs: [
          "これまでは画面やAPIを個別の実装として考えることが多くありました。",
          "Task Questの開発を通して、「どの画面で、どのようなデータが必要になるのか」を考え、フロントエンド・API・データベースまで含めて設計することの重要性を学びました。",
          "個別の技術だけを見るのではなく、システム全体のデータや処理の流れを考えながら設計・実装することを意識しています。",
        ],
      },
      {
        label: "STATUS",
        title: "現在も開発中。",
        paragraphs: [
          "現在は主要なフロントエンド画面の実装を終え、Spring Boot / MySQLを使用したバックエンド開発とAPI連携を進めています。",
          "今後はログイン・認証、経験値処理、統計、振り返りなどの機能を実装していく予定です。",
        ],
      },
    ],

    links: [
      {
        label: "Frontend GitHub",
        url: "https://github.com/towa0504100239-glitch/task-management",
      },
      {
        label: "Backend GitHub",
        url: "https://github.com/towa0504100239-glitch/taskquest-backend",
      },
    ],
  },

  {
    slug: "fit-buddy",
    createdAt: "2026-08-01",

    title: "FitBuddy",
    catchphrase: "歩くことを、ゲームに。",
    technology: "React Native / TypeScript / Expo",

    image: fitBuddyImage,
    imageAlt: "FitBuddy",

    listCategory: "ハッカソン / TEAM DEVELOPMENT",

    description:
      "歩数とモンスター育成を組み合わせたアプリケーションです。歩数に応じてモンスターが成長する仕組みを取り入れ、日常の「歩く」をゲームとして楽しめる体験を目指しました。",

    category: "TEAM DEVELOPMENT",
    type: "ハッカソン / チーム開発",
    role: "企画 / 設計 / フロントエンド / 進行管理",
    year: "2026",

    sections: [
      {
        label: "OVERVIEW",
        title: "日常の「歩く」を、\n楽しみに変える。",
        paragraphs: [
          "FitBuddyは、歩数とモンスター育成を組み合わせたアプリケーションです。",
          "日常生活の中で歩くことをゲームとして楽しめるように、歩数に応じてモンスターが成長する仕組みを取り入れました。",
        ],
      },
      {
        label: "ROLE",
        title: "開発だけでなく、\nチーム全体を見る。",
        paragraphs: [
          "企画の進行・取りまとめ、設計、環境構築、Gitを用いたバージョン管理、React Native / Expoを使用したフロントエンド開発、メンバーの進捗管理を担当しました。",
          "フロントエンドでは、ログイン画面、新規登録画面、ショップ画面の実装に加え、他のメンバーが実装した画面のレビューも行いました。",
          "個々の画面だけを見るのではなく、アプリ全体の画面遷移や機能の前提条件、バックエンド側での実装のしやすさも意識しながら開発を進めました。",
        ],
      },
      {
        label: "FEATURES",
        title: "主な機能",
        variant: "features",
        features: [
          {
            title: "モンスター育成",
            description:
              "歩数に応じてモンスターが成長し、日々の歩きをゲームとして楽しめる仕組みです。",
          },
          {
            title: "デイリーミッション",
            description:
              "日々取り組めるミッションを用意し、継続してアプリを利用できる仕組みを取り入れています。",
          },
          {
            title: "モンスターの進化",
            description:
              "歩き続けることでモンスターが成長・進化し、継続した成果を目に見える形にします。",
          },
          {
            title: "ショップ",
            description:
              "コインを利用して卵を購入したり、背景を変更したりできる機能を用意しています。",
          },
        ],
      },
      {
        label: "TEAM",
        title: "全員が参加しやすい\nチームをつくる。",
        paragraphs: [
          "初対面のメンバーや開発経験の異なるメンバーがいたため、全員が参加しやすい環境をつくることを意識しました。",
          "企画段階では、最初から実現可能性だけでアイデアを絞るのではなく、まず自由に意見を出してもらうことで、発言しやすい雰囲気づくりを行いました。",
          "企画決定後は各メンバーが担当したい領域を確認し、経験や開発できる範囲も踏まえながら役割を決め、全体のスケジュールと期限を共有しました。",
        ],
      },
      {
        label: "CHALLENGE",
        title: "遅れを待たず、\n自分から動く。",
        paragraphs: [
          "チーム開発が初めてのメンバーも多く、開発途中で報告・連絡・相談が十分に行われず、当初の予定より進行が遅れることがありました。",
          "メンバーによって開発経験やハッカソンに対する姿勢も異なり、それぞれの状況を把握しながらチーム全体の進行を調整する必要がありました。",
        ],
      },
      {
        label: "SOLUTION",
        title: "状況を把握して、\n必要なところを支える。",
        paragraphs: [
          "メンバーからの報告を待つだけでは全体の進捗を把握することが難しいと考え、自分から進捗確認を行いました。",
          "必要に応じてミーティングを設定し、作業ごとに期限を決めて進捗を確認しました。",
          "遅れている部分については、他メンバーへのタスクの再割り振りや自分での巻き取りを行い、チーム全体で完成を目指しました。",
          "その結果、遅れていた部分を含めて期限までに作品を完成させることができました。",
        ],
      },
      {
        label: "RESULT",
        title: "完成だけで\n終わらせない。",
        paragraphs: [
          "ハッカソンでは作品を評価していただき、その後オフィス見学にも招待していただきました。",
          "また、完成後もレビューを受けながらUIや設計の改善を行っています。",
        ],
      },
      {
        label: "LEARNING",
        title: "チームだからこそ、\n見るべきもの。",
        paragraphs: [
          "チーム開発では、メンバーによって開発スピードだけでなく、開発やイベントに対する姿勢にも違いがあることを経験しました。",
          "そのため、単にタスクを割り振るだけではなく、それぞれの経験や状況を把握し、必要に応じてフォローすることが重要だと学びました。",
          "また設計段階では、APIなどバックエンドに関する知識が不足していたため、必要な知識を調査しながら、実装時だけでなくその後の保守性も考慮した設計について学びました。",
        ],
      },
    ],
  },

  {
    slug: "color-game",
    createdAt: "2026-08-01",

    title: "色合わせミニゲーム",
    catchphrase: "30秒で遊べる色合わせゲーム",
    technology: "React / TypeScript",

    image: colorSelectImage,
    imageAlt: "色合わせミニゲーム",

    listCategory: "文化祭 / WEB GAME",

    description:
      "文化祭の来場者向けに制作したミニゲームです。初めて触る人でもすぐに遊べるよう、シンプルなルールとスマートフォンでの操作性を重視して制作しました。",

    category: "WEB GAME",
    type: "文化祭 / Webゲーム",
    role: "企画 / 設計 / 実装",
    year: "2026",

    sections: [
      {
        label: "OVERVIEW",
        title: "誰でもすぐに、\n遊べるゲーム。",
        paragraphs: [
          "学校の文化祭で来場者に遊んでもらうために制作した、30秒間の色合わせミニゲームです。",
          "表示された内容に合わせて正しい色を選択し、制限時間内のスコアを競います。",
          "子どもから大人まで幅広い来場者が利用することを想定し、説明を読まなくても直感的に遊べることを重視しました。",
        ],
      },
      {
        label: "BACKGROUND",
        title: "短い時間でも、\n楽しめるものを。",
        paragraphs: [
          "文化祭では多くの来場者が訪れるため、一人が長時間プレイするゲームではなく、短時間で何度でも楽しめるゲームを目指しました。",
          "また、ゲームに慣れている人だけでなく、初めて触る人でもすぐに理解できるよう、複雑な操作を必要としない色合わせゲームを採用しました。",
        ],
      },
      {
        label: "FEATURES",
        title: "主な機能",
        variant: "features",
        features: [
          {
            title: "30秒タイマー",
            description:
              "1プレイ30秒にすることで、短時間でも気軽に遊べるようにしています。",
          },
          {
            title: "スコア",
            description:
              "正解数に応じてスコアを表示し、他のプレイヤーと結果を比較して楽しめます。",
          },
          {
            title: "コンボ",
            description:
              "連続して正解した回数を記録し、最大コンボ数を結果画面に表示します。",
          },
          {
            title: "プレイ結果",
            description:
              "正解数・誤答数・最大コンボ・正答率などをプレイ終了後に確認できます。",
          },
        ],
      },
      {
        label: "UI・UX",
        title: "説明しなくても、\n操作できる。",
        paragraphs: [
          "文化祭では多くの来場者が利用するため、操作方法の説明がなくても遊べるようなシンプルなUIを意識しました。",
          "操作は基本的にタップのみとし、スマートフォンでも押しやすいようにボタンを大きく配置しています。",
          "また、ゲーム中に必要な情報を絞ることで、プレイヤーがゲームそのものに集中できるようにしました。",
        ],
      },
      {
        label: "DESIGN",
        title: "利用する場面から、\n仕様を考える。",
        paragraphs: [
          "今回は文化祭という利用環境から、「短時間で遊べること」「操作が分かりやすいこと」「結果を比較して楽しめること」を重要な要素として考えました。",
          "そのため、制限時間を30秒に設定し、タップだけで操作できるシンプルなルールにしています。",
          "また、スコアだけでなく正解数や最大コンボ、正答率など複数の結果を表示することで、プレイ後にも楽しめるようにしました。",
        ],
      },
      {
        label: "LEARNING",
        title: "誰が、どこで使うのかを\n考えてつくる。",
        paragraphs: [
          "機能を実装するだけでなく、実際に利用する人や利用する場所を考えてUIや仕様を決めることの重要性を学びました。",
          "技術的に多くの機能を追加するのではなく、利用目的に必要な機能を選び、分かりやすく提供することを意識して制作しました。",
        ],
      },
    ],

    links: [
      {
        label: "Play Game",
        url: "https://towa0504100239-glitch.github.io/color_select_game/",
      },
      {
        label: "GitHub",
        url: "https://github.com/towa0504100239-glitch/color_select_game",
      },
    ],
  },
  {
  slug: "yoriai",
  createdAt: "2026-09-27",

  title: "YORIAI",
  catchphrase: "乗り合う。つながる。地域が動く。",
  technology: "React / TypeScript / Next.js / Supabase",

  image: yoriaiImage,
  imageAlt: "YORIAI",

  listCategory: "ハッカソン / TEAM DEVELOPMENT",

  description:
    "地方における高齢者の移動課題に着目し、地域の人と移動手段をつなぐライドシェアサービスを開発しました。相乗りによる料金負担の軽減と、地域に根ざした移動手段の実現を目指しています。",

  category: "TEAM DEVELOPMENT",
  type: "ハッカソン / チーム開発",
  role: "企画 / 要件定義 / フロントエンド / バックエンド支援",
  year: "2026",

  sections: [
    {
      label: "OVERVIEW",
      title: "地域の「移動」を、\n支える。",
      paragraphs: [
        "YORIAIは、地方における高齢者の移動課題を解決するために開発したライドシェアサービスです。",
        "公共交通機関の本数が少ない、乗り場までの距離が遠いといった地域では、病院や買い物など日常生活に必要な移動が難しくなることがあります。",
        "そこで、地域の人がドライバーとなり、同じ方向へ移動する利用者が相乗りできる仕組みを考えました。",
      ],
    },

    {
      label: "BACKGROUND",
      title: "移動手段が少ない地域に、\n新しい選択肢を。",
      paragraphs: [
        "ハッカソンのテーマである「地方創生」について考える中で、高齢者の移動手段が減っていることに着目しました。",
        "特に、病院や買い物への移動、公共交通機関の本数が少ない地域、暗い時間帯の移動など、日常生活の中に移動の課題があると考えました。",
        "単に移動できるサービスを作るのではなく、相乗りによって利用料金を抑えながら、地域の人同士が支え合える仕組みを目指しました。",
      ],
    },

    {
      label: "FEATURES",
      title: "主な機能",
      variant: "features",

      features: [
        {
          title: "事前予約",
          description:
            "乗車地・目的地・到着希望日時を指定して、事前に乗車予約を行えます。",
        },
        {
          title: "相乗り",
          description:
            "移動ルートが近い利用者同士を組み合わせ、相乗りによって料金負担を抑えます。",
        },
        {
          title: "ドライバー管理",
          description:
            "ドライバーの登録・審査や、運行可能日のシフト管理を行える仕組みを用意しました。",
        },
        {
          title: "緊急対応",
          description:
            "利用者が緊急時に通報やタクシー会社への連絡を行える仕組みを想定しています。",
        },
      ],
    },

    {
      label: "ROLE",
      title: "企画から実装まで、\n全体を見る。",
      paragraphs: [
        "4人チームで開発し、企画・要件定義とフロントエンド開発を中心に担当しました。",
        "利用者側・ドライバー側の画面設計や実装に加え、バックエンド開発の一部やAPIの動作確認、テストにも関わりました。",
        "画面単体を作るだけではなく、予約やシフトなどのデータがどのようにフロントエンド・API・データベースを流れるのかを考えながら開発を進めました。",
      ],
    },

    {
      label: "DESIGN",
      title: "利用者だけでなく、\n運行する側まで考える。",
      paragraphs: [
        "YORIAIでは、利用者が予約できるだけではサービスとして成立しないため、ドライバー側の運行管理まで含めて設計しました。",
        "利用者は乗車地・目的地・日時を指定して予約し、ドライバーは運行可能日や担当する運行を確認できる構成にしています。",
        "また、安全面を考慮し、ドライバーは承認制とし、本人確認・免許・車両情報などを確認した上で利用できる仕組みを想定しました。",
      ],
    },

    {
      label: "CHALLENGE",
      title: "画面だけでは終わらない\nサービス設計。",
      paragraphs: [
        "ライドシェアは、単純なWebアプリケーションとは異なり、予約時間、相乗り条件、料金、安全性、ドライバーの勤務など、多くの条件を同時に考える必要がありました。",
        "チーム内で仕様を話し合いながら、当日予約を行わないことや、相乗り可能な条件、キャンセル期限など、実際の利用場面を想定して要件を整理しました。",
      ],
    },

    {
      label: "TECHNICAL",
      title: "フロントとバックを\nつなげて考える。",
      paragraphs: [
        "フロントエンドにはReact / TypeScript、バックエンドにはNext.js、認証・データベースにはSupabaseを使用しました。",
        "APIでは認証情報を利用したユーザー情報の取得や、ドライバーのシフト登録・更新などを実装しました。",
        "Supabaseの認証やRLS、APIとのデータ連携などを通して、画面だけではなくバックエンドやデータベースを含めたシステム全体への理解を深めました。",
      ],
    },

    {
      label: "LEARNING",
      title: "技術だけでなく、\nサービス全体を考える。",
      paragraphs: [
        "今回の開発では、機能を実装するだけでなく、「誰が利用するのか」「どのように運営するのか」「安全性をどう確保するのか」まで考える必要がありました。",
        "企画・要件定義からフロントエンド、バックエンド、テストまで複数の工程に関わったことで、サービス全体を見ながら設計することの重要性を学びました。",
        "短期間のチーム開発でも、仕様を明確にし、メンバー間で認識を合わせながら進めることが完成度につながると実感しました。",
      ],
    },
  ],
}
];

// 制作日が新しい順
export const worksNewestFirst = [...works].sort(
  (a, b) =>
    new Date(b.createdAt).getTime() -
    new Date(a.createdAt).getTime()
);

export const getWorkBySlug = (slug: string) =>
  works.find((work) => work.slug === slug);