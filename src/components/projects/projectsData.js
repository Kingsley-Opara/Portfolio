import manage from '../img/manage.png'
import netflix from '../img/netflix.png'
import ocr from '../img/ocr.png'
import metlab from '../img/metlab.jpg'
import portfolio from '../img/portfolio.png'

const projects = [
    {
        name: 'Landing Page',
        discription : 'A Responsive Landing Page built using HTML, Tailwind-CSS and Javascript',
        live: true,
        image: manage,
        LiveUrl: 'https://main--kingsley-tailwind-landingpage.netlify.app/',
        CodeUrl: 'https://github.com/Kingsley-Opara/Tailwind-CSS-landing-page',
    },
    {
        name: 'Netflix Clone',
        discription : 'Netflix Clone using The Movie DataBase API (TMDB API), React and CSS',
        live: true,
        image: netflix,
        LiveUrl: 'https://movies-hub-kingsley.netlify.app/',
        CodeUrl: 'https://github.com/Kingsley-Opara/MovieApp',
    },
    {
        name: 'MicroService API for extraction of text from Images',
        discription : 
        'An API service that performs Optical Character Recognition (OCR) from Images using Tesseract (i.e A machine learning model built by Google), pytesseract (i.e A python package for interacting with Tesseract) and FastAPI',
        live: false,
        image: ocr,
        LiveUrl: '',
        CodeUrl: '',
    },
    {
        name: 'METLAB',
        discription : 
        'A Data extraction tool that can be used to extract MetaData from files quickly and effectively while providing accurate information. Contributed in building the backend of the project with Django during an Internship training',
        live: true,
        image: metlab,
        LiveUrl: 'https://metlab.herokuapp.com/',
        CodeUrl: 'https://github.com/Kingsley-Opara/fetch-metadata-team-90/tree/main',
    },
    {
        name: 'Personal Portfolio',
        discription : 
        'A personal portfolio website built using React and react-bootstrap',
        live: true,
        image: portfolio,
        LiveUrl: 'https://metlab.herokuapp.com/',
        CodeUrl: 'https://github.com/Kingsley-Opara/fetch-metadata-team-90/tree/main',
    },
]


export default projects;