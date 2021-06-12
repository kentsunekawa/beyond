import { SITEDATA } from 'src/utils/constants'

const Container: React.FC = () => {
  return (
    <section>
      <div>
        <h1>{SITEDATA.title}</h1>
        <p>{SITEDATA.subTitle}</p>
      </div>
    </section>
  )
}

export default Container
