import MyNameLink from "@/components/MyNameLink"

const Home = () => {
  const postNum = 3
  const visitTime = 100
  return (
    <div className="flex flex-grow place-items-center justify-center md-auto">
      <div className="text-left text-lg mb-4 grid gap-y-4">
        <div className="flex">
          👏 Welcome! I'm&nbsp;
          <MyNameLink />, a full-stack developer.
        </div>

        <div>📔 And this is LanMa Blog. It's a Cute Website.</div>

        <div className="flex">
          🖋️ I've authored&nbsp;
          <div className="underline text-green-500">{postNum}</div>
          &nbsp;articles in Chinese here.
        </div>

        <div className="flex">
          📈 My blog has reached&nbsp;
          <div className="underline text-pink-500">{visitTime}</div>
          &nbsp;readers for getting knowledge.
        </div>
        <div>😀 Share and improve. Hope you can have fun!</div>
      </div>
    </div>
  )
}

export default Home
