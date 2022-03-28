import React, { useState, useEffect } from 'react';
import PrimaryButton from '../Components/primaryButton';
import SectionHeader from '../Components/sectionHeader';
import NormalCard from '../Components/normalCard';
import ThumbnailCard from '../Components/thumbnailCard';
import ProgramCard from '../Components/programCard';
import ArtistCollection from '../Components/artistDefault';
import SponsorDetail from '../Components/sponsorDetail';
import { CardObject } from '../Helpers/NormalCardImageMap';
import { ThumbnailCardObject } from '../Helpers/ThumbnailCardImageMap';
import { ProgramCardObject } from '../Helpers/ProgramCardMap';
import { HomeArtistObject } from '../Helpers/homeArtistMap';
import { SponsorCollection } from '../Helpers/sponsorMap';
import '../Assets/Styles/home.css';
import { getLengthOfLongestArray } from '../Helpers/arrayHelpers';

function Home() {
  const [highestLength, setHighestLength] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const cb = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', cb);

    return () => {
      window.removeEventListener('resize', cb);
    };
  });

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
          <span className="meta-text">24.4.2022 @Tampere Hall</span>
        </div>
      </div>
      <main>
        <div className="info-text-holder">
          <div className="container">
            <div className="info-text-block">
              <p>
                Tampere Flute Fest 2022 will bring an eclectic program
                of icy sonic wonder this April 22nd-24th!
              </p>
              <p>
                Inspired by the wonders of nature, this year’s edition titled “JÄÄ • ICE”,
                will deliver a diverse range of in-person, and live-streamed events
                where innovation and the flute meet.
              </p>
              <div className="button-wrap">
                <PrimaryButton
                  buttonText="buy tickets"
                />
              </div>
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
              {HomeArtistObject.map((artistObj) => (
                <ArtistCollection
                  key={artistObj.id}
                  artistImage={artistObj.artistPicture}
                  artistName={artistObj.artistName}
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
          <div className="button-wrap">
            <PrimaryButton
              buttonText="buy tickets"
            />
          </div>
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
      </main>
    </>
  );
}

export default Home;
