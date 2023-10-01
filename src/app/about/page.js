import Mainsection from "../components/Mainsection"

const Page = () => {

  const des = 'Get the best product at our website. Premium product at your door steps. '

  return (
    <>
      <Mainsection title={"our story"} des={des} imgurl={"../about1.svg"} />
    </>
  )
}

export default Page;