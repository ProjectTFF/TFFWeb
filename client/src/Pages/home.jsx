import React, { useState, useEffect } from 'react';
import DefaultButton from '../Components/defaultButton';
import SectionHeader from '../Components/sectionHeader';
import NormalCard from '../Components/normalCard';
import ThumbnailCard from '../Components/thumbnailCard';
import ProgramCard from '../Components/programCard';
import ArtistCollection from '../Components/artistDefault';
import SponsorDetail from '../Components/sponsorDetail';
import { CardObject } from '../Helpers/NormalCardImageMap';
import { ThumbnailCardObject } from '../Helpers/ThumbnailCardImageMap';
import { ProgramCardObject } from '../Helpers/ProgramCardMap';
import { HomeArtistObject } from '../Helpers/HomeArtistMap';
import { SponsorCollection } from '../Helpers/sponsorMap';
import '../Assets/Styles/home.css';
import { getLengthOfLongestArray } from '../Helpers/arrayHelpers';

function Home() {
  const [highestLength, setHighestLength] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const cb = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', cb);

    return () => {
      window.removeEventListener('resize', cb);
    };
  }, []);

  useEffect(() => {
    if (windowWidth >= 490) {
      const lengthToSet = getLengthOfLongestArray(HomeArtistObject, ProgramCardObject);
      setHighestLength(lengthToSet);
    } else {
      setHighestLength(4);
    }
  }, [windowWidth]);
  return (
    <>
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
            pageLink="artists"
          />
          <div className="artist-row">
            {HomeArtistObject.slice(0, highestLength).map((artistObj) => (
              <ArtistCollection
                key={artistObj.id}
                artistImage={artistObj.artistPicture}
                artistRole={artistObj.artistRole}
                artistName={artistObj.artistName}
                artistAddress={artistObj.artistPlace}
              />
            ))}
          </div>
        </div>
        <div className="program-highlight-section">
          <SectionHeader
            sectionTitle="Programme highlights"
            showAll
            pageLink="programme"
          />
          <div className="program-card-row">
            {ProgramCardObject.slice(0, highestLength).map((cardObj) => (
              <ProgramCard
                key={cardObj.id}
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
                key={cardObj.id}
                cardImage={cardObj.thumbnailImage}
                videoId={cardObj.videoId}
              />
            ))}
          </div>
        </div>
        <div className="sponsor-section">
          <SectionHeader
            sectionTitle="Sponsors"
            showAll={false}
          />
          <ul className="sponsors-list">
            {SponsorCollection.map((sponsorObj) => (
              <SponsorDetail
                key={sponsorObj.id}
                sponsorImage={sponsorObj.sponsorImage}
                sponsorLink={sponsorObj.sponsorLink}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
