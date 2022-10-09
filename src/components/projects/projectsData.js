import manage from '../img/manage.png'
import netflix from '../img/netflix.png'
import ocr from '../img/ocr.png'

const projects = [
    {
        name: 'Landing Page',
        discription : 'A Responsive Landing Page built using HTML, Tailwind-CSS and Javascript',
        live: true,
        image: manage,
        LiveUrl: '',
        CodeUrl: '',
    },
    {
        name: 'Netflix Clone',
        discription : 'Netflix Clone using The Movie DataBase API (TMDB API), React and CSS',
        live: true,
        image: netflix,
        LiveUrl: '',
        CodeUrl: '',
    },
    {
        name: 'MicroService API',
        discription : 
        'An API service that performs Optical Character Recongnition (OCR) using Tesseract (i.e A machine learning model built by Google), pytesseract (i.e A python package for interacting with Tesseract) and FastAPI',
        live: false,
        image: ocr,
        LiveUrl: '',
        CodeUrl: '',
    },
]


export default projects;