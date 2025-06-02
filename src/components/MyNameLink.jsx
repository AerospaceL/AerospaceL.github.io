import { Link } from "react-router"
import GradientText from "@/styles/GradientText"
import { Tooltip } from "antd"

const MyNameLink = () => {
  return (
    <Link to="https://github.com/AerospaceL" className="font-bold">
      <GradientText
        // colors={["#18545a", "#f1f2b5", "#18545a"]}
        colors={["#1452a3", "#00b4d8", "#1452a3"]}
        animationSpeed={8}
        showBorder={false}
        className="custom-class"
      >
        <Tooltip title="Star Me! Orz" color="green">
          Ethen Liu
        </Tooltip>
      </GradientText>
    </Link>
  )
}

export default MyNameLink
