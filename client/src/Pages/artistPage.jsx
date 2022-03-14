import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import DefaultButton from '../Components/defaultButton';
import iconMap from '../Helpers/iconMap';
import ThumbnailCard from '../Components/thumbnailCard';
import ArtistCollection from '../Components/artistDefault';
import { ThumbnailCardObject } from '../Helpers/ThumbnailCardImageMap';
import SectionHeader from '../Components/sectionHeader';
import artistsMap from '../Helpers/artistsMap';
import { HomeArtistObject } from '../Helpers/homeArtistMap';

import '../Assets/Styles/artistPage.css';

function ArtistPage() {
  const { artistSlug } = useParams();

  useEffect(() => {
  }, [artistSlug]);

  return (
    <div className="wrapper">
      <div className="artist">
        <div className="artist-banner">
          <NavLink className="all-artists-top" to="/artists">
            &#8592; Back to artists
          </NavLink>

          <div className="maininfos">
            <div className="box">
              <img src={artistsMap.Alexis} alt={` ${artistSlug}`} />
              <h1>
                {` ${artistSlug}`}
              </h1>
            </div>
            <ul>
              <li>
                <a href="https://twitter.com/">
                  <img src={iconMap.Twitter} alt="Twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/">
                  <img src={iconMap.TikTok} alt="TikTok" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/">
                  <img src={iconMap.Youtube} alt="Youtube" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <img src={iconMap.Instagram} alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <img src={iconMap.Facebook} alt="Facebook" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="information">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>

          <NavLink className="nav-link" to="/">
            See what
            {` ${artistSlug} `}
            will be performing in 2022
            <KeyboardDoubleArrowRightIcon />
          </NavLink>
        </div>

        <div className="previous-work">
          <SectionHeader
            sectionTitle={`Watch ${artistSlug}’ previous work`}
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
            sectionTitle="See all artists"
            showAll
            pageLink="artists"
          />

          <div className="artist-row">
            {HomeArtistObject.splice(0, 4).map((artistObj) => (
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

        <div className="artist-bottom">
          <DefaultButton />
        </div>
      </div>
    </div>
  );
}

export default ArtistPage;
