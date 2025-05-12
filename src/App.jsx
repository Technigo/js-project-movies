import { FrontPage } from './components/FrontPage.jsx';
import { MovieDetails } from './components/MovieDetails.jsx';

export const App = () => {
  return (
    <div>
      < FrontPage />
      < MovieDetails movieId={1241436} />
    </div>
  );
};