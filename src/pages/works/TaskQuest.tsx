import "../../styles/WorkDetail.css";
import { Link } from "react-router-dom";
import taskQuestImage from "../../assets/taskQuest.png";

const TaskQuest = () => {
  return (
    <div className="workDetail">
      <header className="detailHeader">
        <Link to="/" className="detailLogo">
          SERIKA OSHIMA
        </Link>

        <Link to="/works" className="detailBack">
          Works
          <span className="arrowIcon" aria-hidden="true" />
        </Link>
      </header>

      <main>
        <section className="detailHero">
          <p className="detailNumber">
            01 / PERSONAL DEVELOPMENT
          </p>

          <h1>Task Quest</h1>

          <p className="detailCatch">
            タスク管理 × ゲーム要素
          </p>

          <div className="detailMeta">
            <div>
              <span>TYPE</span>
              <p>個人開発</p>
            </div>

            <div>
              <span>TECHNOLOGY</span>
              <p>React / TypeScript / Spring Boot / MySQL</p>
            </div>

            <div>
              <span>ROLE</span>
              <p>企画 / 設計 / フロントエンド / バックエンド</p>
            </div>

            <div>
              <span>YEAR</span>
              <p>2026</p>
            </div>
          </div>
        </section>

        <div className="detailMainImage">
          <img
            src={taskQuestImage}
            alt="Task Quest"
          />
        </div>

        <section className="detailSection detailIntro">
          <p className="detailSectionNumber">
            01 / OVERVIEW
          </p>

          <div className="detailSectionContent">
            <h2>
              タスクへの一歩を、
              <br />
              少し楽しく。
            </h2>

            <div className="detailText">
              <p>
                Task Questは、タスク管理にゲーム要素を取り入れた
                Webアプリケーションです。
              </p>

              <p>
                タスクを管理するだけでなく、
                タスクを達成すること自体を楽しめるサービスを
                目指して開発しています。
              </p>
            </div>
          </div>
        </section>

        <section className="detailSection">
          <p className="detailSectionNumber">
            02 / BACKGROUND
          </p>

          <div className="detailSectionContent">
            <h2>制作背景</h2>

            <div className="detailText">
              <p>
                SNSやゲームなど身近な誘惑が多い中で、
                新しい習慣を始めたり継続したりすることには
                心理的なハードルがあると考えました。
              </p>

              <p>
                そこで、誘惑になりやすい「ゲーム」の要素を
                あえてタスク管理に取り入れることで、
                タスクに取り掛かるまでのハードルを下げられないかと考え、
                Task Questの開発を始めました。
              </p>

              <p>
                タスクを完了すると経験値を獲得できる仕組みにすることで、
                「やるべきことを消化した」だけではなく、
                自分の取り組みが積み上がっていることを
                実感できるサービスを目指しています。
              </p>
            </div>
          </div>
        </section>

        <section className="detailSection v2">
          <p className="detailSectionNumber">
            03 / FEATURES
          </p>

          <div className="detailSectionContent">
            <h2>主な機能</h2>

            <div className="featureGrid">
              <div className="featureItem">
                <span>01</span>

                <h3>タスク管理</h3>

                <p>
                  タスクの作成・編集・完了管理に加え、
                  優先度や締切日時を設定できます。
                </p>
              </div>

              <div className="featureItem">
                <span>02</span>

                <h3>カレンダー</h3>

                <p>
                  日付ごとにタスクを確認し、
                  カレンダーから直接タスクを追加できます。
                </p>
              </div>

              <div className="featureItem">
                <span>03</span>

                <h3>経験値・レベル</h3>

                <p>
                  タスクを達成することで経験値を獲得し、
                  取り組みの積み重ねを可視化します。
                </p>
              </div>

              <div className="featureItem">
                <span>04</span>

                <h3>統計・振り返り</h3>

                <p>
                  これまでの取り組みを振り返り、
                  達成感や継続するきっかけにつなげます。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="detailSection">
          <p className="detailSectionNumber">
            04 / UI・UX
          </p>

          <div className="detailSectionContent">
            <h2>
              迷わず使えることを
              <br />
              大切に。
            </h2>

            <div className="detailText">
              <p>
                タスク管理という本来の目的に集中できるよう、
                シンプルで迷いにくいUIを意識して設計しています。
              </p>

              <p>
                ゲーム要素を取り入れながらも、
                アニメーションやキャラクターなどを過剰に配置すると
                視線が分散すると考え、
                必要以上に装飾を増やさないようにしました。
              </p>

              <p>
                また、タスクを登録するためだけに画面を移動する
                手間を減らすため、
                ホーム画面とカレンダー画面のどちらからでも
                タスクを追加できるようにしています。
              </p>
            </div>
          </div>
        </section>

        <section className="detailSection">
          <p className="detailSectionNumber">
            05 / CHALLENGE
          </p>

          <div className="detailSectionContent">
            <h2>
              初めての
              <br />
              Spring Boot。
            </h2>

            <div className="detailText">
              <p>
                PHPを使用したバックエンド開発の経験はありましたが、
                Java / Spring Bootを使用したバックエンド開発は
                このプロジェクトが初めてでした。
              </p>

              <p>
                Spring Bootでのクラスやパッケージの役割分担、
                MySQLとの接続、フレームワークが提供する機能など、
                実際のアプリケーションとして使用する中で
                分からない部分が多くありました。
              </p>

              <p>
                分からない仕組みを一つずつ調べ、
                実際に登録・取得されるデータとコードの動きを
                照らし合わせながら理解を進めました。
              </p>
            </div>
          </div>
        </section>

        <section className="detailSection">
          <p className="detailSectionNumber">
            06 / LEARNING
          </p>

          <div className="detailSectionContent">
            <h2>
              システム全体を
              <br />
              考える。
            </h2>

            <div className="detailText">
              <p>
                これまでは画面やAPIを個別の実装として
                考えることが多くありました。
              </p>

              <p>
                Task Questの開発を通して、
                「どの画面で、どのようなデータが必要になるのか」を考え、
                フロントエンド・API・データベースまで含めて
                設計することの重要性を学びました。
              </p>

              <p>
                個別の技術だけを見るのではなく、
                システム全体のデータや処理の流れを考えながら
                設計・実装することを意識しています。
              </p>
            </div>
          </div>
        </section>

        <section className="detailSection">
          <p className="detailSectionNumber">
            07 / STATUS
          </p>

          <div className="detailSectionContent">
            <h2>現在も開発中。</h2>

            <div className="detailText">
              <p>
                現在は主要なフロントエンド画面の実装を終え、
                Spring Boot / MySQLを使用したバックエンド開発と
                API連携を進めています。
              </p>

              <p>
                今後はログイン・認証、経験値処理、統計、
                振り返りなどの機能を実装していく予定です。
              </p>
            </div>
          </div>
        </section>

        <section className="detailLinks">
          <p>PROJECT LINKS</p>

          <div>
            <a
              href="https://github.com/towa0504100239-glitch/task-management"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Frontend GitHub</span>
              <span className="arrowIcon" aria-hidden="true" />
            </a>

            <a
              href="https://github.com/towa0504100239-glitch/taskquest-backend"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Backend GitHub</span>
              <span className="arrowIcon" aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="detailFooter">
        <Link to="/works">← Works</Link>
        <p>© 2026 SERIKA OSHIMA</p>
      </footer>
    </div>
  );
};

export default TaskQuest;