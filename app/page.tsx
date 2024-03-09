

export default function Home() {
  return (
    <main className="main">
      <header className="header">
        <div className="header__logo header__logo-blue"></div>
        <div className="header__logo header__logo-yelow"></div>
        <div className="header__logo header__logo-green"></div>
      </header>
      <section className="content">
        <div className="content__title-conteiner">
          <p className="content__title">ХОБЛ: мифы и реальность</p>
        </div>
        <div className="content__article">
        <div className="content__article-conteiner">
          <div className="content__article-conteiner-img"></div>
          <div className="content__article-conteiner-question"></div>
          <div className="content__article-text-container">
           <p className="content__article-text">В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено преобладание...</p>
          </div>
        </div>
        <div className="content__article-conteiner">
          <div className="content__article-conteiner-img content__article-conteiner-img_type_up"></div>
          <div className="content__article-conteiner-question content__article-conteiner-question_type_up"></div>
          <div className="content__article-text-container">
           <p className="content__article-text">Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение...</p>
         </div>
        </div>
        </div>
        <div className="content__title-conteiner">
          <p className="content__title">Терапия ХОБЛ: что в фокусе?</p>
        </div>
      </section>
    </main>
  );
}
