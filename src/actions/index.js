import * as api from '../api';

export const FETCH_POPULAR_MOVIES_REQUEST = 'FETCH_POPULAR_MOVIES_REQUEST';
export const FETCH_POPULAR_MOVIES_SUCCESS = 'FETCH_POPULAR_MOVIES_SUCCESS';
export const FETCH_POPULAR_MOVIES_FAILURE = 'FETCH_POPULAR_MOVIES_FAILURE';

export const fetchPopularMovies = () => (dispatch) => {
  dispatch({
    type: FETCH_POPULAR_MOVIES_REQUEST,
  });

  api.getPopularMovies().then(
    ({results, page, total_results, total_pages}) => dispatch({
      type: FETCH_POPULAR_MOVIES_SUCCESS,
      payload: {
        page,
        totalResults: total_results,
        totalPages: total_pages,
        results,
      },
    }),
    errorMessage => dispatch({
      type: FETCH_POPULAR_MOVIES_FAILURE,
      errorMessage
    })
  );

};
