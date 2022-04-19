import React, { useEffect } from 'react';
import '../Assets/Styles/artistDefault.css';
import { Link } from 'react-router-dom';
import { ArtistPictureMap } from '../Helpers/ArtistPictureMap';

function ArtistCollection(props) {
   const {
  artistId, artists,
} = props;

  const [artist, setArtist] = React.useState([]);
  useEffect(() => {
    setArtist(artists[artistId - 1]);
  }, [artistId]);

   return (
     <div className="artist-info-col">
       <Link className="artist-info-block" to={`/artists/${artistId}`}>
         <div className="img-wrap">
           <img src={ArtistPictureMap[artistId - 1].programImage} alt="s" />
         </div>
         <span className="artist-name">{`${artist.firstname} ${artist.lastname}`}</span>
       </Link>
     </div>
   );
}

export default ArtistCollection;
