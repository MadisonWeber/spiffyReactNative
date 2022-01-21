/* eslint-disable */

import ImageOne from '../assets/app_icon.png';
import ImageTwo from '../assets/secondcup.png';
import ImageThree from '../assets/dope.jpeg';
import ImageFour from '../assets/leafs.jpg';

import DimMac from'../assets/dim-mac.png'
import Jimmys from '../assets/jimmys.jpeg'
import Figr from '../assets/figr.png';

import Carmel from '../assets/carmel.png'
import Hexo from '../assets/hexo.png'
import MoodRing from '../assets/mood-ring.png'
import HighTide from '../assets/hightide.png'

export const TYPES = {
  ASSIGNED: 'ASSIGNED',
  OPTIONAL: 'OPTIONAL',
  SURVEY: 'SURVEY',
  TEST: 'TEST',
  ALL: 'ALL',
};

export const CONTENT_TYPES = {
  BOTH: 'BOTH',
  PDF: 'PDF',
  VIDEO: 'VIDEO',
};


export const FEATURESBRANDS = [
  {
    id: 1, 
    modules: 10,
    image: HighTide,
    company: 'High Tide Cannabis',
  },
  {
    id: 2, 
    modules: 6,
    image: Carmel,
    company: 'Carmel Cannabis',
  },
  {
    id: 3, 
    modules: 8,
    image: Hexo,
    company: 'Hexo Cannabis',
  },
  {
    id: 4, 
    modules: 8,
    image: MoodRing,
    company: 'Mood Ring',
  },
]

export const FEATUREDMODULES = [
  {
    id: 2, 
    title: 'Who is Figr',
    questions: 4, 
    time: 5,
    contentType: CONTENT_TYPES.BOTH,
    description: 'Learn about Figr',
    type: TYPES.OPTIONAL,
    downloads: 21,
    image: Figr,
    company: 'Figr Cannabis',
  },
  {
    id: 1, 
    title: 'Smoking dope with Hexo',
    questions: 4, 
    time: 6,
    contentType: CONTENT_TYPES.PDF,
    description: 'Dudley shows you how to properly smoke some dope',
    type: TYPES.OPTIONAL,
    downloads: 20,
    image: Jimmys,
    company: 'Hexo Cannabis',
  },
  {
    id: 2, 
    title: 'Dim Mac Strain',
    questions: 4, 
    time: 5,
    contentType: CONTENT_TYPES.VIDEO,
    description: 'Learn about our new Dim Mac Strain',
    type: TYPES.OPTIONAL,
    downloads: 24,
    image: DimMac,
    company: 'Carmel Cannabis',
  },
]

const data = [
  {
    id: 1, 
    title: 'How to build a space shuttle',
    questions: 4, 
    time: 6,
    contentType: CONTENT_TYPES.PDF,
    description: 'this module will show you how to build a space shuttle',
    type: TYPES.ASSIGNED,
    image: ImageOne,
  },
  {
    id: 2, 
    title: 'How to Milk a cow',
    questions: 10, 
    time: 10,
    description: 'People need to know how to milk cows',
    contentType: CONTENT_TYPES.VIDEO,
    type: TYPES.OPTIONAL,
    image: ImageTwo,
  },
  {
    id: 3, 
    title: 'Learn To Smoke Dope',
    questions: 4, 
    time: 2,
    description: 'If you cant smoke, you cant get high',
    contentType: CONTENT_TYPES.BOTH,
    type: TYPES.ASSIGNED,
    image: ImageThree,
  },
  {
    id: 4, 
    title: 'Playing Shinny',
    questions: 2, 
    time: 7,
    description: 'Everyone Wants to play shinny hockey',
    contentType: CONTENT_TYPES.PDF,
    type: TYPES.SURVEY,
    image: ImageFour,
  },
]

export default data;