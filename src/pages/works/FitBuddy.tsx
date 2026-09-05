import "../../styles/WorkDetail.css";
import fitBuddyImage from "../../assets/fitbuddy.png";

const FitBuddy = () => {
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
          <p className="detailNumber">02 / TEAM DEVELOPMENT</p>

          <h1>FitBuddy</h1>

          <p className="detailCatch">
            歩くことを、ゲームに。
          </p>

          <div className="detailMeta">
            <div>
              <span>TYPE</span>
              <p>ハッカソン / チーム開発</p>
            </div>

            <div>
              <span>TECHNOLOGY</span>
              <p>React Native / TypeScript / Expo</p>
            </div>

            <div>
              <span>ROLE</span>
              <p>企画 / 設計 / フロントエンド / 進行管理</p>
            </div>

            <div>
              <span>YEAR</span>
              <p>2026</p>
            </div>
          </div>
        </section>

        <div className="detailMainImage">
          <img
            src={fitBuddyImage}
            alt="FitBuddy"
          />
        </div>

        <section className="detailSection">
          <p className="detailSectionNumber">
            01 / OVERVIEW
          </p>

          <div className="detailSectionContent">
            <h2>
              日常の「歩く」を、
              <br />
              楽しみに変える。
            </h2>

            <div className="detailText">
              <p>
                FitBuddyは、歩数とモンスター育成を組み合わせた
                アプリケーションです。
              </p>

              <p>
                日常生活の中で歩くことをゲームとして楽しめるように、
                歩数に応じてモンスターが成長する仕組みを取り入れました。
              </p>
            </div>
          </div>
        </section>

        <section className="detailSection">
          <p className="detailSectionNumber">
            02 / ROLE
          </p>

          <div className="detailSectionContent">
            <h2>
              開発だけでなく、
              <br />
              チーム全体を見る。
            </h2>

            <div className="detailText">
              <p>
                企画の進行・取りまとめ、設計、環境構築、
                Gitを用いたバージョン管理、
                React Native / Expoを使用したフロントエンド開発、
                メンバーの進捗管理を担当しました。
              </p>

              <p>
                フロントエンドでは、ログイン画面、新規登録画面、
                ショップ画面の実装に加え、
                他のメンバーが実装した画面のレビューも行いました。
              </p>

              <p>
                個々の画面だけを見るのではなく、
                アプリ全体の画面遷移や機能の前提条件、
                バックエンド側での実装のしやすさも意識しながら
                開発を進めました。
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

                <h3>モンスター育成</h3>

                <p>
                  歩数に応じてモンスターが成長し、
                  日々の歩きをゲームとして楽しめる仕組みです。
                </p>
              </div>

              <div className="featureItem">
                <span>02</span>

                <h3>デイリーミッション</h3>

                <p>
                  日々取り組めるミッションを用意し、
                  継続してアプリを利用できる仕組みを取り入れています。
                </p>
              </div>

              <div className="featureItem">
                <span>03</span>

                <h3>モンスターの進化</h3>

                <p>
                  歩き続けることでモンスターが成長・進化し、
                  継続した成果を目に見える形にします。
                </p>
              </div>

              <div className="featureItem">
                <span>04</span>

                <h3>ショップ</h3>

                <p>
                  コインを利用して卵を購入したり、
                  背景を変更したりできる機能を用意しています。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="detailSection">
          <p className="detailSectionNumber">
            04 / TEAM
          </p>

          <div className="detailSectionContent">
            <h2>
              全員が参加しやすい
              <br />
              チームをつくる。
            </h2>

            <div className="detailText">
              <p>
                初対面のメンバーや開発経験の異なるメンバーがいたため、
                全員が参加しやすい環境をつくることを意識しました。
              </p>

              <p>
                企画段階では、最初から実現可能性だけで
                アイデアを絞るのではなく、
                まず自由に意見を出してもらうことで、
                発言しやすい雰囲気づくりを行いました。
              </p>

              <p>
                企画決定後は各メンバーが担当したい領域を確認し、
                経験や開発できる範囲も踏まえながら役割を決め、
                全体のスケジュールと期限を共有しました。
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
              遅れを待たず、
              <br />
              自分から動く。
            </h2>

            <div className="detailText">
              <p>
                チーム開発が初めてのメンバーも多く、
                開発途中で報告・連絡・相談が十分に行われず、
                当初の予定より進行が遅れることがありました。
              </p>

              <p>
                メンバーによって開発経験やハッカソンに対する姿勢も異なり、
                それぞれの状況を把握しながら
                チーム全体の進行を調整する必要がありました。
              </p>
            </div>
          </div>
        </section>

        <section className="detailSection">
          <p className="detailSectionNumber">
            06 / SOLUTION
          </p>

          <div className="detailSectionContent">
            <h2>
              状況を把握して、
              <br />
              必要なところを支える。
            </h2>

            <div className="detailText">
              <p>
                メンバーからの報告を待つだけでは
                全体の進捗を把握することが難しいと考え、
                自分から進捗確認を行いました。
              </p>

              <p>
                必要に応じてミーティングを設定し、
                作業ごとに期限を決めて進捗を確認しました。
              </p>

              <p>
                遅れている部分については、
                他メンバーへのタスクの再割り振りや
                自分での巻き取りを行い、
                チーム全体で完成を目指しました。
              </p>

              <p>
                その結果、遅れていた部分を含めて
                期限までに作品を完成させることができました。
              </p>
            </div>
          </div>
        </section>

        <section className="detailSection">
          <p className="detailSectionNumber">
            07 / RESULT
          </p>

          <div className="detailSectionContent">
            <h2>
              完成だけで
              <br />
              終わらせない。
            </h2>

            <div className="detailText">
              <p>
                ハッカソンでは作品を評価していただき、
                その後オフィス見学にも招待していただきました。
              </p>

              <p>
                また、完成後もレビューを受けながら
                UIや設計の改善を行っています。
              </p>
            </div>
          </div>
        </section>

        <section className="detailSection">
          <p className="detailSectionNumber">
            08 / LEARNING
          </p>

          <div className="detailSectionContent">
            <h2>
              チームだからこそ、
              <br />
              見るべきもの。
            </h2>

            <div className="detailText">
              <p>
                チーム開発では、
                メンバーによって開発スピードだけでなく、
                開発やイベントに対する姿勢にも違いがあることを経験しました。
              </p>

              <p>
                そのため、単にタスクを割り振るだけではなく、
                それぞれの経験や状況を把握し、
                必要に応じてフォローすることが重要だと学びました。
              </p>

              <p>
                また設計段階では、
                APIなどバックエンドに関する知識が不足していたため、
                必要な知識を調査しながら、
                実装時だけでなくその後の保守性も考慮した
                設計について学びました。
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

export default FitBuddy;