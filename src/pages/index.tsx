import { BlitzPage } from "@blitzjs/auth"
import { Button } from "react-daisyui"

export const Home: BlitzPage = () => {
  return (
    <>
      <Button>Hello world!</Button>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  )
}

export default Home
