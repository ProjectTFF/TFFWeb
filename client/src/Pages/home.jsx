import React from 'react';
import DefaultButton from '../Components/defaultButton';
import SectionHeader from '../Components/sectionHeader';
import NormalCard from '../Components/normalCard';
import ThumbnailCard from '../Components/thumbnailCard';
import ProgramCard from '../Components/programCard';
import ArtistCollection from '../Components/artistDefault';
import { CardObject } from '../Helpers/NormalCardImageMap';
import { ThumbnailCardObject } from '../Helpers/ThumbnailCardImageMap';
import { ProgramCardObject } from '../Helpers/ProgramCardMap';
import { homeArtistObject } from '../Helpers/homeArtistMap';
import '../Assets/Styles/home.css';

function Home() {
  return (
    <div className="wrapper">
      <div className="dashboard-banner">
        <div className="dashboard-content">
          <span className="top-text">Tampere Flute Fest</span>
          <h1>ICE · JÄÄ</h1>
          <span className="meta-text">24.4.2022 &amp;Tampere Hall</span>
        </div>
      </div>
      <div className="info-text-holder">
        <div className="container">
          <div className="info-text-block">
            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Faucibus justo, gravida sem viverra.
            </p>
            <DefaultButton />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="artist-section">
          <SectionHeader
            sectionTitle="Artists performing"
            showAll
          />
          <div className="artist-row">
            {homeArtistObject.splice(0, 4).map((artistObj) => (
              <ArtistCollection
                key={artistObj.artistName}
                artistImage={artistObj.artistPicture}
                artistRole={artistObj.artistRole}
                artistName={artistObj.artistName}
                artistPlace={artistObj.artistPlace}
              />
            ))}
          </div>
        </div>
        <div className="program-highlight-section">
          <SectionHeader
            sectionTitle="Programme highlights"
            showAll
          />
          <div className="program-card-row">
            {ProgramCardObject.slice(0, 4).map((cardObj) => (
              <ProgramCard
                key={cardObj.programTitle}
                cardImage={cardObj.programImage}
                cardName={cardObj.programName}
                cardTitle={cardObj.programTitle}
              />
            ))}
          </div>
        </div>
        <div className="events-section">
          <SectionHeader
            sectionTitle="Supporting events"
            showAll={false}
          />
          <div className="card-row">
            { CardObject.map((cardObj) => (
              <NormalCard
                key={cardObj.eventTitle}
                cardTitle={cardObj.eventTitle}
                cardImage={cardObj.eventImage}
              />
           ))}
          </div>
        </div>
        <DefaultButton />
        <div className="highlight-section">
          <SectionHeader
            sectionTitle="Highlights from previous years"
            showAll={false}
          />
          <div className="thumbnail-row">
            {ThumbnailCardObject.slice(0, 4).map((cardObj) => (
              <ThumbnailCard
                key={cardObj.thumbnailImage}
                cardImage={cardObj.thumbnailImage}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
