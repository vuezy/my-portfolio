import { useEffect } from 'react'
import AOS from 'aos'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '../assets/styles/Skills.module.css'
import { ReactComponent as CppLogo } from '../assets/icons/cpp.svg'
import { ReactComponent as PythonLogo } from '../assets/icons/python.svg'
import { ReactComponent as JavaLogo } from '../assets/icons/java.svg'
import { ReactComponent as DartLogo } from '../assets/icons/dart.svg'
import { ReactComponent as HtmlLogo } from '../assets/icons/html.svg'
import { ReactComponent as CssLogo } from '../assets/icons/css.svg'
import { ReactComponent as JsLogo } from '../assets/icons/js.svg'
import { ReactComponent as PhpLogo } from '../assets/icons/php.svg'
import { ReactComponent as NodeLogo } from '../assets/icons/node.svg'
import { ReactComponent as ExpressLogo } from '../assets/icons/express.svg'
import { ReactComponent as SequelizeLogo } from '../assets/icons/sequelize.svg'
import { ReactComponent as VueLogo } from '../assets/icons/vue.svg'
import { ReactComponent as ReactLogo } from '../assets/icons/react.svg'
import { ReactComponent as FlutterLogo } from '../assets/icons/flutter.svg'
import { ReactComponent as MysqlLogo } from '../assets/icons/mysql.svg'
import { ReactComponent as MongodbLogo } from '../assets/icons/mongodb.svg'
import { ReactComponent as AndroidLogo } from '../assets/icons/android.svg'
import { ReactComponent as GitLogo } from '../assets/icons/git.svg'
import { ReactComponent as DockerLogo } from '../assets/icons/docker.svg'

const Skills = () => {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Container fluid className={styles.container} data-aos="fade-up" data-aos-duration="800">
      <Container className={styles.skills}>
        <Container as="h1" className={styles.title}>SKILLS</Container>
        My dominant skills are <span className="fw-bold">problem solving</span> and <span className="fw-bold">critical thinking</span>.<br />
        I have knowledge in <span className="fw-bold">frontend web development</span>, <span className="fw-bold">backend web development</span>,
        <span className="fw-bold"> mobile app development</span>, <span className="fw-bold">machine learning</span>, 
        and <span className="fw-bold">cyber security</span>.<br />
        However, I usually feel more comfortable working in <span className="fw-bold">backend development</span>.<br /><br />
        Here are <span className="fw-bold">programming languages</span>,
        <span className="fw-bold"> frameworks</span>, <span className="fw-bold">technologies</span>, and
        <span className="fw-bold"> tools</span> I have learned <span className="fst-italic">(and still learning)</span>.
      </Container>
      <Row className="justify-content-center align-items-center">
        <Col xs={1} className="text-center px-0 px-sm-1 px-lg-2"><CppLogo /></Col>
        <Col xs={1} className="text-center px-0 px-sm-1 px-lg-2"><PythonLogo /></Col>
        <Col xs={1} className="text-center px-0 px-sm-1 px-lg-2"><JavaLogo /></Col>
        <Col xs={1} className="text-center px-0 px-sm-1 px-lg-2"><DartLogo /></Col>
      </Row>
      <Row className="justify-content-center align-items-center py-1">
        <Col xs={1} className="text-center px-0 px-sm-1 px-lg-2"><HtmlLogo /></Col>
        <Col xs={1} className="text-center px-0 px-sm-1 px-lg-2"><CssLogo /></Col>
        <Col xs={1} className="text-center px-0 px-sm-1 px-lg-2"><JsLogo /></Col>
        <Col xs={1} className="text-center px-0 px-sm-1 px-lg-2"><PhpLogo /></Col>
      </Row>
      <Row className="justify-content-center align-items-center py-1">
        <Col xs={1} className="text-center px-0 px-sm-1 px-lg-2"><NodeLogo /></Col>
        <Col xs={1} className="text-center px-0 px-sm-1 px-lg-2"><ExpressLogo /></Col>
        <Col xs={1} className="text-center px-0 px-sm-1 px-lg-2"><SequelizeLogo /></Col>
        <Col xs={1} className="text-center px-0 px-sm-1 px-lg-2"><VueLogo /></Col>
        <Col xs={1} className="text-center px-0 px-sm-1 px-lg-2"><ReactLogo /></Col>
        <Col xs={1} className="text-center px-0 px-sm-1 px-lg-2"><FlutterLogo /></Col>
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col xs={1} className="text-center px-0 px-sm-1 px-lg-2"><MysqlLogo /></Col>
        <Col xs={1} className="text-center px-0 px-sm-1 px-lg-2"><MongodbLogo /></Col>
        <Col xs={1} className="text-center px-0 px-sm-1 px-lg-2"><AndroidLogo /></Col>
        <Col xs={1} className="text-center px-0 px-sm-1 px-lg-2"><GitLogo /></Col>
        <Col xs={1} className="text-center px-0 px-sm-1 px-lg-2"><DockerLogo /></Col>
      </Row>
    </Container>
  )
}

export default Skills;