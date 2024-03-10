'use client'


import React, { useState } from "react";

export default function Home() {

const [log, setLog] = useState("нет лога")

const printLog = () => {
  setLog("Привет, мир!")
  console.log(log)
}

  return (
<main className="main">
  <header className="header">
    <div className="header__logo header__logo-blue"></div>
    <div className="header__logo header__logo-yelow"></div>
    <div className="header__logo header__logo-green"></div>
  </header>
  <section className="content">
    <div className="title-conteiner">
      <h3 className="title">ХОБЛ: мифы и реальность</h3>
    </div>
    <div className="content__article">
      <div className="content__article-conteiner">
      <button className="content__article-button" onClick={() => printLog()}></button>
        <div className="content__article-conteiner-img"></div>
        <div className="content__article-conteiner-question"></div>
        <div className="content__article-text-container">
          <p className="content__article-text">В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено преобладание...</p>
        </div>
      </div>
      <div className="content__article-conteiner">
        <button className="content__article-button"></button>
        <div className="content__article-conteiner-img content__article-conteiner-img_type_up"></div>
        <div className="content__article-conteiner-question content__article-conteiner-question_type_up"></div>
        <div className="content__article-text-container">
          <p className="content__article-text">Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение...</p>
        </div>
      </div>
    </div>
    <div className="focus">
      <div className="title-conteiner">
        <h3 className="title title_type_focus">Терапия ХОБЛ: что в фокусе?</h3>
      </div>
      <div className="focus__note-bene-conteiner">
        <p className="focus__note-bene-text">Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии</p>
      </div>
      <p className="focus-name">Приоритетные направления фармакотерапевтической стратегии при ХОБЛ<sup>1</sup>:</p>
      <div className="focus__card-conteiner">
        <div className="focus__card">
          <div className="focus__card-img focus__card-img-one"></div>
          <h3 className="focus__card-title">Ингаляционны антихолинергик</h3>
          <p className="focus__card-text">Ингибирует бронхоконстрикторные эффекты ацетилхолина, вступая с ним в конкурентный антагонизм за взаимодействие с эффекторными мускариновыми рецепторами, дополняет и потенцирует эффект β2-агонистов1</p>
        </div>
        <div className="focus__card">
          <div className="focus__card-img focus__card-img-two"></div>
          <h3 className="focus__card-title">Ингаляционный β2-агонист</h3>
          <p className="focus__card-text">Вызывает бронходилатацию посредством релаксации гладкомышечных клеток бронхов независимо от характера констриктивных стимулов, т. е. выступают в качестве функциональных антагонистов бронхоконстрикции</p>
        </div>
        <div className="focus__card">
          <div className="focus__card-img focus__card-img-three"></div>
          <h3 className="focus__card-title">Ингаляционный глюкокортикостероид (ИГКС)</h3>
          <p className="focus__card-text">Снижает частоту обострений, особенно в сочетании с ДДБА, подавляют хроническое воспаление при астме и снижают гиперреактивность дыхательных путей</p>
        </div>
      </div>
      <div className="focus__img-conteiner">
        <div className="focus__img"></div>
        <div className="focus__img"></div>
      </div>
      <div className="focus__card-conteiner-patient">
        <div className="focus__card focus__card_tupe_patient-one">
          <p className="focus__card-text focus__card-text-patient">Пациентам с ХОБЛ рекомендуется комбинирование бронходилататоров с разными механизмами действия; Назначение 2-х бронходилататоров из группы длительнодействующих β2-агонистов (ДДБА) и длительнодействующих антихолинергиков (ДДАХ), действие которых дополняет и усиливает друг друга1.</p>
        </div>
        <div className="focus__card focus__card_tupe_patient-two">
          <p className="focus__card-text focus__card-text-patient">Пациентам с ХОБЛ и частыми обострениями (≥2 среднетяжелых обострений в течение 1 года/1 тяжелое обострение, потребовавшее госпитализации) рекомендуется назначение ИГКС в дополнение к ДДБА; Последние исследования показали, что амбулаторное применение ИГКС/ДДБА у пациентов с ХОБЛ снижает госпитальную летальность по сравнению с пациентами, принимавшими только ДДБА (8,1% vs 13,2%)1.</p>
        </div>

      </div>
    </div>
  </section>

</main>
  );
}
