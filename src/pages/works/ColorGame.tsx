import "../../styles/WorkDetail.css";
import colorSelectImage from "../../assets/color_select.png";

const ColorGame = () => {
  return (
    <div className="workDetail">
      <header className="detailHeader">
        <a href="/" className="detailLogo">
          SERIKA OSHIMA
        </a>

        <a href="/works" className="detailBack">
          Works
          <span>↗</span>
        </a>
      </header>

      <main>
        <section className="detailHero">
          <p className="detailNumber">03 / WEB GAME</p>

          <h1>Color Game</h1>

          <p className="detailCatch">
            30秒で遊べる色合わせミニゲーム
          </p>

          <div className="detailMeta">
            <div>
              <span>TYPE</span>
              <p>文化祭 / Webゲーム</p>
            </div>

            <div>
              <span>TECHNOLOGY</span>
              <p>React / TypeScript</p>
            </div>

            <div>
              <span>ROLE</span>
              <p>企画 / 設計 / 実装</p>
            </div>

            <div>
              <span>YEAR</span>
              <p>2026</p>
            </div>
          </div>
        </section>

        <div className="detailMainImage">
          <img
            src={colorSelectImage}
            alt="色合わせミニゲーム"
          />
        </div>

        <section className="detailSection">
          <p className="detailSectionNumber">
            01 / OVERVIEW
          </p>

          <div className="detailSectionContent">
            <h2>
              誰でもすぐに、
              <br />
              遊べるゲーム。
            </h2>

            <div className="detailText">
              <p>
                学校の文化祭で来場者に遊んでもらうために制作した、
                30秒間の色合わせミニゲームです。
              </p>

              <p>
                表示された内容に合わせて正しい色を選択し、
                制限時間内のスコアを競います。
              </p>

              <p>
                子どもから大人まで幅広い来場者が利用することを想定し、
                説明を読まなくても直感的に遊べることを重視しました。
              </p>
            </div>
          </div>
        </section>

        <section className="detailSection">
          <p className="detailSectionNumber">
            02 / BACKGROUND
          </p>

          <div className="detailSectionContent">
            <h2>
              短い時間でも、
              <br />
              楽しめるものを。
            </h2>

            <div className="detailText">
              <p>
                文化祭では多くの来場者が訪れるため、
                一人が長時間プレイするゲームではなく、
                短時間で何度でも楽しめるゲームを目指しました。
              </p>

              <p>
                また、ゲームに慣れている人だけでなく、
                初めて触る人でもすぐに理解できるよう、
                複雑な操作を必要としない色合わせゲームを採用しました。
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

                <h3>30秒タイマー</h3>

                <p>
                  1プレイ30秒にすることで、
                  短時間でも気軽に遊べるようにしています。
                </p>
              </div>

              <div className="featureItem">
                <span>02</span>

                <h3>スコア</h3>

                <p>
                  正解数に応じてスコアを表示し、
                  他のプレイヤーと結果を比較して楽しめます。
                </p>
              </div>

              <div className="featureItem">
                <span>03</span>

                <h3>コンボ</h3>

                <p>
                  連続して正解した回数を記録し、
                  最大コンボ数を結果画面に表示します。
                </p>
              </div>

              <div className="featureItem">
                <span>04</span>

                <h3>プレイ結果</h3>

                <p>
                  正解数・誤答数・最大コンボ・正答率などを
                  プレイ終了後に確認できます。
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
              説明しなくても、
              <br />
              操作できる。
            </h2>

            <div className="detailText">
              <p>
                文化祭では多くの来場者が利用するため、
                操作方法の説明がなくても遊べるような
                シンプルなUIを意識しました。
              </p>

              <p>
                操作は基本的にタップのみとし、
                スマートフォンでも押しやすいように
                ボタンを大きく配置しています。
              </p>

              <p>
                また、ゲーム中に必要な情報を絞ることで、
                プレイヤーがゲームそのものに集中できるようにしました。
              </p>
            </div>
          </div>
        </section>

        <section className="detailSection">
          <p className="detailSectionNumber">
            05 / DESIGN
          </p>

          <div className="detailSectionContent">
            <h2>
              利用する場面から、
              <br />
              仕様を考える。
            </h2>

            <div className="detailText">
              <p>
                今回は文化祭という利用環境から、
                「短時間で遊べること」
                「操作が分かりやすいこと」
                「結果を比較して楽しめること」を
                重要な要素として考えました。
              </p>

              <p>
                そのため、制限時間を30秒に設定し、
                タップだけで操作できるシンプルなルールにしています。
              </p>

              <p>
                また、スコアだけでなく正解数や最大コンボ、
                正答率など複数の結果を表示することで、
                プレイ後にも楽しめるようにしました。
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
              誰が、どこで使うのかを
              <br />
              考えてつくる。
            </h2>

            <div className="detailText">
              <p>
                機能を実装するだけでなく、
                実際に利用する人や利用する場所を考えて
                UIや仕様を決めることの重要性を学びました。
              </p>

              <p>
                技術的に多くの機能を追加するのではなく、
                利用目的に必要な機能を選び、
                分かりやすく提供することを意識して制作しました。
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="detailFooter">
        <a href="/works">← Works</a>
        <p>© 2026 SERIKA OSHIMA</p>
      </footer>
    </div>
  );
};

export default ColorGame;