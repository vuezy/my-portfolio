import { Row, Col } from 'react-bootstrap'
import styles from '../assets/styles/Contact.module.css'
import { ReactComponent as MailIcon } from '../assets/icons/mail.svg'
import { ReactComponent as GithubLogo } from '../assets/icons/github.svg'

const Contact = () => {
  return (
    <>
      <h2 className={styles.title}>Contact Me</h2>
      <Row className="mb-2 align-items-center">
        <Col xs={1} className="px-0 px-sm-2"><MailIcon /></Col>
        <Col className={styles.contact}>shanechristian03@gmail.com</Col>
      </Row>
      <Row className="align-items-center">
        <Col xs={1} className="px-0 px-sm-2"><GithubLogo /></Col>
        <Col className={styles.contact}>
          <a href="https://github.com/vuezy" target="_blank" rel="noreferrer" className={styles.link}>
            vuezy
          </a>
        </Col>
      </Row>
    </>
  )
}

export default Contact