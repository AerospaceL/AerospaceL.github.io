import MyNameLink from "@/components/MyNameLink"

const Home = () => {
  const postNum = 3
  const visitTime = 100
  return (
    <div className="flex flex-grow place-items-center justify-center md-auto overflow-auto">
      <div className="text-left text-lg mb-4 grid gap-y-4">
        <div className="flex flex-wrap items-baseline">
          <div className="whitespace-nowrap">👏 Welcome! I'm </div>
          <div className=" ml-1 min-w-[min-content]">
            <MyNameLink />
          </div>
          <div className="whitespace-nowrap">, a full-stack developer.</div>
        </div>

        <div>
          {`📔 And this is `}
          <span className="italic">LanMa Blog</span>
          {`. It's a Cute Website.`}
        </div>

        <div>
          {`🖋️ I've authored `}
          <span className="underline text-green-500">{postNum}</span>
          {` articles in Chinese here.`}
        </div>

        <div>
          {`📈 My blog has reached `}
          <span className="underline text-pink-500">{visitTime}</span>
          {` readers for getting knowledge.`}
        </div>

        <div>{`😀 Share and improve. Hope you can have fun!`}</div>
      </div>
    </div>
  )
}

export default Home
