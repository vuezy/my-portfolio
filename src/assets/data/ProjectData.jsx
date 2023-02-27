import { Row, Col } from 'react-bootstrap'
import chatAppImg1 from '../images/chat-app-1.PNG'
import chatAppImg2 from '../images/chat-app-2.PNG'
import chatAppImg3 from '../images/chat-app-3.PNG'
import chatAppImg4 from '../images/chat-app-4.PNG'
import chatAppImg5 from '../images/chat-app-5.PNG'
import todoAppImg1 from '../images/todo-app-1.PNG'
import todoAppImg2 from '../images/todo-app-2.PNG'
import todoAppImg3 from '../images/todo-app-3.PNG'
import foodShopImg1 from '../images/food-shop-1.PNG'
import foodShopImg2 from '../images/food-shop-2.PNG'
import foodShopImg3 from '../images/food-shop-3.PNG'
import foodShopImg4 from '../images/food-shop-4.PNG'
import foodShopImg5 from '../images/food-shop-5.PNG'
import musicAppImg1 from '../images/music-app-1.PNG'
import musicAppImg2 from '../images/music-app-2.PNG'
import quizAppImg1 from '../images/quiz-app-1.PNG'
import quizAppImg2 from '../images/quiz-app-2.PNG'
import quizAppImg3 from '../images/quiz-app-3.PNG'
import productsImg1 from '../images/products-1.PNG'
import productsImg2 from '../images/products-2.PNG'
import productsImg3 from '../images/products-3.PNG'
import productsImg4 from '../images/products-4.PNG'
import productsImg5 from '../images/products-5.PNG'
import siPenggajianImg1 from '../images/si-penggajian-1.PNG'
import siPenggajianImg2 from '../images/si-penggajian-2.PNG'
import siPenggajianImg3 from '../images/si-penggajian-3.PNG'
import siPenggajianImg4 from '../images/si-penggajian-4.PNG'
import siPenggajianImg5 from '../images/si-penggajian-5.PNG'
import guessingGameImg1 from '../images/guessing-game-1.PNG'
import guessingGameImg2 from '../images/guessing-game-2.PNG'
import guessingGameImg3 from '../images/guessing-game-3.PNG'
import guessingGameImg4 from '../images/guessing-game-4.PNG'
import { ReactComponent as VueLogo } from '../icons/vue.svg'
import { ReactComponent as ReactLogo } from '../icons/react.svg'
import { ReactComponent as FlutterLogo } from '../icons/flutter.svg'
import { ReactComponent as NodeLogo } from '../icons/node.svg'
import { ReactComponent as ExpressLogo } from '../icons/express.svg'
import { ReactComponent as SequelizeLogo } from '../icons/sequelize.svg'
import { ReactComponent as MysqlLogo } from '../icons/mysql.svg'
import { ReactComponent as MongodbLogo } from '../icons/mongodb.svg'


const projects = [
  {
    img: [chatAppImg1, chatAppImg2, chatAppImg3, chatAppImg4, chatAppImg5],
    title: 'Chat App',
    content: (
      <Row className="justify-content-center align-items-center mb-4">
        <Col xs={2} className="text-center p-0 p-sm-1"><ReactLogo /></Col>
        <Col xs={2} className="text-center p-0 p-sm-1"><NodeLogo /></Col>
        <Col xs={2} className="text-center p-0 p-sm-1"><ExpressLogo /></Col>
        <Col xs={2} className="text-center p-0 p-sm-1"><MongodbLogo /></Col>
      </Row>
    ),
    link: 'https://github.com/vuezy/mern-chat-app'
  },
  {
    img: [todoAppImg1, todoAppImg2, todoAppImg3],
    title: 'To-Do List App',
    content: (
      <Row className="justify-content-center align-items-center mb-4">
        <Col xs={2} className="text-center p-0 p-sm-1"><ReactLogo /></Col>
        <Col xs={2} className="text-center p-0 p-sm-1"><NodeLogo /></Col>
        <Col xs={2} className="text-center p-0 p-sm-1"><ExpressLogo /></Col>
        <Col xs={2} className="text-center p-0 p-sm-1"><MongodbLogo /></Col>
      </Row>
    ),
    link: 'https://github.com/vuezy/mern-to-do-list-app'
  },
  {
    img: [foodShopImg1, foodShopImg2, foodShopImg3, foodShopImg4, foodShopImg5],
    title: 'Food Shop Game',
    content: (
      <Row className="justify-content-center align-items-center mb-4">
        <Col xs={2} className="text-center p-0 p-sm-1"><VueLogo /></Col>
        <Col xs={2} className="text-center p-0 p-sm-1"><NodeLogo /></Col>
        <Col xs={2} className="text-center p-0 p-sm-1"><ExpressLogo /></Col>
        <Col xs={2} className="text-center p-0 p-sm-1"><MongodbLogo /></Col>
      </Row>
    ),
    link: 'https://github.com/vuezy/vue-express-food-shop'
  },
  {
    img: [musicAppImg1, musicAppImg2],
    title: 'Music App',
    content: (
      <Row className="justify-content-center align-items-center mb-4">
        <Col xs={2} className="text-center p-0 p-sm-1"><VueLogo /></Col>
      </Row>
    ),
    link: 'https://github.com/vuezy/vue-music-app'
  },
  {
    img: [quizAppImg1, quizAppImg2, quizAppImg3],
    title: 'Trivia Quiz App',
    content: (
      <Row className="justify-content-center align-items-center mb-4">
        <Col xs={2} className="text-center p-0 p-sm-1"><ReactLogo /></Col>
      </Row>
    ),
    link: 'https://github.com/vuezy/react-trivia-quiz'
  },
  {
    img: [productsImg1, productsImg2, productsImg3, productsImg4, productsImg5],
    title: 'Simple Products UI',
    content: (
      <Row className="justify-content-center align-items-center mb-4">
        <Col xs={2} className="text-center p-0 p-sm-1"><FlutterLogo /></Col>
      </Row>
    ),
    link: 'https://github.com/vuezy/flutter-products-ui'
  },
  {
    img: [siPenggajianImg1, siPenggajianImg2, siPenggajianImg3, siPenggajianImg4, siPenggajianImg5],
    title: 'Sistem Informasi Penggajian Karyawan',
    content: (
      <Row className="justify-content-center align-items-center mb-4">
        <Col xs={2} className="text-center p-0 p-sm-1"><FlutterLogo /></Col>
        <Col xs={2} className="text-center p-0 p-sm-1"><NodeLogo /></Col>
        <Col xs={2} className="text-center p-0 p-sm-1"><ExpressLogo /></Col>
        <Col xs={2} className="text-center p-0 p-sm-1"><SequelizeLogo /></Col>
        <Col xs={2} className="text-center p-0 p-sm-1"><MysqlLogo /></Col>
      </Row>
    ),
    link: 'https://github.com/vuezy/flutter-express-sistem-informasi-penggajian-karyawan'
  },
  {
    img: [guessingGameImg1, guessingGameImg2, guessingGameImg3, guessingGameImg4],
    title: 'Guessing Dota 2 Heroes Game',
    content: (
      <Row className="justify-content-center align-items-center mb-4">
        <Col xs={2} className="text-center p-0 p-sm-1"><NodeLogo /></Col>
        <Col xs={2} className="text-center p-0 p-sm-1"><ExpressLogo /></Col>
      </Row>
    ),
    link: 'https://github.com/vuezy/express-guessing-dota2-heroes'
  }
]

export default projects