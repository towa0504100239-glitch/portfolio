type ExperienceEntry = {
  id: string;
  date: string;
  dateLabel: string;
  title: string;
  description: string;
};

type ExperienceGroup = {
  id: string;
  title: string;
  subtitle: string;
  entries: ExperienceEntry[];
};

// 資格は取得済み、活動は実施済み・継続中の内容だけを登録する。
export const experienceGroups: ExperienceGroup[] = [
  {
    id: "qualifications",
    title: "Qualifications",
    subtitle: "資格",
    entries: [
      {
        id: "it-passport",
        date: "2022-11",
        dateLabel: "2022.11",
        title: "ITパスポート 取得",
        description: "資格",
      },
      {
        id: "fundamental-information-technology-engineer",
        date: "2025-01",
        dateLabel: "2025.01",
        title: "基本情報技術者試験 取得",
        description: "資格",
      },
      {
        id: "java-se-bronze",
        date: "2026-07",
        dateLabel: "2026.07",
        title: "Java SE Bronze 取得",
        description: "資格",
      },
    ],
  },
  {
    id: "activities",
    title: "Activities",
    subtitle: "活動・実績",
    entries: [
      {
        id: "website-production",
        date: "2023-10",
        dateLabel: "2023.10",
        title: "北澤ゆうり様 HP制作",
        description: "Webサイト制作",
      },
      {
        id: "internship",
        date: "2024-05",
        dateLabel: "2024.05 — 2026.03",
        title: "長期インターン",
        description: "Web開発 / 設計 / DB / 実装 / 運用・保守",
      },
      {
        id: "task-quest",
        date: "2026-05",
        dateLabel: "2026.05 — 現在",
        title: "個人開発「Task Quest」",
        description: "React / TypeScript / Java / Spring Boot / MySQL",
      },
      {
        id: "matsuriba",
        date: "2026-07",
        dateLabel: "2026.07",
        title: "Matsuriba 参加",
        description: "ハッカソン / チーム開発",
      },
      {
        id: "the-hack-2026",
        date: "2026-08",
        dateLabel: "2026.08",
        title: "The Hack 2026 出場",
        description: "ハッカソン",
      },
      {
        id: "color-game",
        date: "2026-08",
        dateLabel: "2026.08",
        title: "色合わせミニゲーム 制作",
        description: "React / TypeScript",
      },
      {
        id: "portfolio",
        date: "2026-09",
        dateLabel: "2026.09",
        title: "ポートフォリオサイト 制作",
        description: "React / TypeScript",
      },
      {
        id: "hack-stage-3",
        date: "2026-09",
        dateLabel: "2026.09",
        title: "HACK STAGE 3 参加",
        description: "ハッカソン / チーム開発",
      },
      {
        id: "geek-camp-donee",
        date: "2026-10",
        dateLabel: "2026.10",
        title: "技育CAMP参加",
        description: "5人チームのリーダーとして、タスク達成支援Webアプリ「Donee」を開発。要件定義、進行管理、バックエンドAPI実装、フロントエンド開発・API連携を担当。",
      },
      {
        id: "school-festival",
        date: "2026-11",
        dateLabel: "2026.11",
        title: "文化祭の企画・運営",
        description: "文化委員としてクラス企画の運営を担当。技術系サークルの企画運営にも携わり、メンバーとの調整、シフト作成、役割分担、準備、当日のトラブル対応などを経験。",
      },
    ],
  },
].map((group) => ({
  ...group,
  entries: [...group.entries].sort((a, b) => a.date.localeCompare(b.date)),
}));
