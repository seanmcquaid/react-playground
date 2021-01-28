import axios from 'axios';

const jokesService = {
  getCategories: () =>
    axios.get('https://api.chucknorris.io//jokes/categories'),
};

export default jokesService;
