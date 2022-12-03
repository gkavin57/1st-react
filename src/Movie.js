import { useState } from 'react';
import Count from './Count'; 
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandLessIcon from '@mui/icons-material/ExpandLess'; 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function Movie({ movie }) {
  const styles = {
    color: movie.rating > 8.5 ? "green" : "red",
  };
  const [show, setShow] = useState(true);
  return (
    <div className='movie-container'>
      <img src={movie.poster} className="movie-poster" alt={movie.name}></img>
      <div className='movie-specs'>
        <h2 className='movie-name'>{movie.name} 
        <IconButton color ="primary" aria-label="delete" onClick={() => setShow(!show)}>
 { show ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
</IconButton>
    </h2>
        <p style={styles} className='movie-rating'>⭐{movie.rating}</p>
      </div> 
   
      {show ? <p className='movie-summary'>{movie.summary}</p> : null}
      <Count />
    </div>
  );

}
