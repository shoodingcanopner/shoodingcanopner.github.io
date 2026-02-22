import { QuartzComponentConstructor } from "./types"

export default (() => {
  function Notice() {
    return (
      <div class="notice-bar">
        방문을 환영합니다. 이곳은 개인용 위키입니다. 준비가 안 된 문서가 많습니다. PDF는 열리지 않습니다.
      </div>
    )
  }
  return Notice
}) satisfies QuartzComponentConstructor