import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { NavLink, useLocation } from 'react-router-dom';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import PrimaryButton from '../Components/primaryButton';
import ThumbnailCard from '../Components/thumbnailCard';
import ArtistCollection from '../Components/artistDefault';
import { ThumbnailCardObject } from '../Helpers/ThumbnailCardImageMap';
import SectionHeader from '../Components/sectionHeader';
import { ArtistPictureMap } from '../Helpers/ArtistPictureMap';
import DefaultButton from '../Components/defaultButton';
import Banner from '../Components/banner';

import '../Assets/Styles/artistPage.css';

function ArtistPage(props) {
  const {
    language, handleSetLanguage, artists, allLinks,
   } = props;

  const { pathname } = useLocation();
  useEffect(() => {
    const element = document.getElementById('src');
    if (element) {
      element.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  const { artistSlug } = useParams();
  const [artist, setArtist] = React.useState([]);
  const [links, setLinks] = React.useState([]);

  useEffect(() => {
    setArtist(artists[artistSlug - 1]);
    setLinks(allLinks[artistSlug - 1]);
  }, [artistSlug]);

  // Content of the page by language
  let content = {
    english: {
      bannerTitle: 'Tampere Flute Fest',
      hall: 'Tampere Hall',
      exit: ' Back to artists',
      website: 'Website',
      biography: artist.biography_eng,
      performing: `See what ${artist.firstname} ${artist.lastname} will be performing in 2022`,
      previous: `Watch ${artist.firstname} ${artist.lastname}'s previous work`,
      all: 'See all artists',
      // tickets: 'buy tickets',
      buyTickets: 'buy tickets',
      buyStreaming: 'buy Streaming',
    },
    finnish: {
      bannerTitle: 'Tampere Flute Fest',
      hall: 'Tampere-Talo',
      exit: ' Näytä kaikki artistit',
      website: 'Websivu',
      biography: artist.biography_fin,
      performing: `Näytä missä ${artist.firstname} ${artist.lastname} esiintyy tämän vuoden festivaaleilla`,
      previous: 'Katso artistin edellisiä esiintymisiä',
      all: 'Näytä kaikki artistit',
      // tickets: 'osta liput',
      buyTickets: 'osta liput',
      buyStreaming: 'osta suoratoisto',
    },
  };

  content = language === 'finnish' ? (content.finnish) : (content.english);

  return (
    <>
      <Banner
        bannerTitle={content.bannerTitle}
        bannerHall={content.hall}
        language={language}
        handleSetLanguage={handleSetLanguage}
      />
      <div className="artist">
        <div className="container">
          <div className="artist-banner">
            <NavLink className="all-artists-top" to="/artists">
              &#8592;
              {content.exit}
            </NavLink>
            <div id="src" className="maininfos">
              <div className="box">
                <img src={ArtistPictureMap[artistSlug - 1].programImage} alt={` ${artist.firstname} ${artist.lastname}`} />
              </div>
              <div className="artist-intro">
                <h1>
                  {` ${artist.firstname} ${artist.lastname}`}
                </h1>
                <ul className="artist-info-list">
                  {links.website == null
                  ? null
                  : (
                    <li>
                      <a href={links.website}>
                        {content.website}
                      </a>
                    </li>
                  ) }
                  {links.youtube == null
                  ? null
                  : (
                    <li>
                      <a href={links.youtube}>
                        Youtube
                      </a>
                    </li>
                  ) }
                  {links.facebook == null
                  ? null
                  : (
                    <li>
                      <a href={links.facebook}>
                        Facebook
                      </a>
                    </li>
                  ) }
                  {links.instagram == null
                  ? null
                  : (
                    <li>
                      <a href={links.instagram}>
                        Instagram
                      </a>
                    </li>
                  ) }
                  {links.spotify == null
                  ? null
                  : (
                    <li>
                      <a href={links.spotify}>
                        Spotify
                      </a>
                    </li>
                  ) }
                </ul>
              </div>
            </div>
          </div>
          <div className="information">
            {content.biography}
            <br />
            <br />
            <NavLink className="nav-link" to="/">
              {content.performing}
              <KeyboardDoubleArrowRightIcon />
            </NavLink>
          </div>
          <div className="previous-work">
            <SectionHeader
              sectionTitle={content.previous}
            />
            <div className="thumbnail-row">
              {ThumbnailCardObject.slice(0, 4).map((cardObj) => (
                <ThumbnailCard
                  key={cardObj.id}
                  cardImage={cardObj.thumbnailImage}
                />
          ))}
            </div>
          </div>
          <div className="all-artists-bottom">
            <SectionHeader
              sectionTitle={content.all}
              language={language}
              showAll
              pageLink="artists"
            />
            <div className="artist-row">
              {artistSlug < artists.length - 5
                ? artists.slice(artistSlug, parseInt(artistSlug, 10) + 5).map((artistObj) => (
                  <ArtistCollection
                    artistId={artistObj.artistid}
                    artists={artists}
                  />
              )) : artists.slice(artistSlug, artists.length).map((artistObj) => (
                <ArtistCollection
                  artistId={artistObj.artistid}
                  artists={artists}
                />
              ))}
              {
                artistSlug < artists.length - 5 ? null
                : artists.slice(0, parseInt(artistSlug, 10) - artists.length + 5).map(
                  (artistObj) => (
                    <ArtistCollection
                      artistId={artistObj.artistid}
                      artists={artists}
                    />
                  ),
                )
              }
            </div>
            <ul className="btn-groups">
              <li>
                <PrimaryButton
                  buttonText={content.buyTickets}
                  showIcon
                />
              </li>
              <li>
                <DefaultButton
                  url="https://www.lippu.fi/en/eventseries/tampere-flute-fest-2022-livestriimi-3116312/"
                  buttonText={content.buyStreaming}
                  showIcon
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArtistPage;
