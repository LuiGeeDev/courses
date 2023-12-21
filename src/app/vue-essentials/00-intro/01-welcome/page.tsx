import CodeSandbox from "@/components/CodeSandbox";
import { readFileSync } from "fs";
import path from "path";

export default function Home() {
  const filepath = path.resolve(
    process.cwd(),
    "./src/app/vue-essentials/00-intro/01-welcome/App.vue"
  );
  const content = readFileSync(filepath, "utf8");
  const files = {
    "/src/App.vue": {
      code: content,
    },
  };

  return (
    <main>
      <h1 className="text-2xl font-bold">환영합니다.</h1>
      <p>
        안녕하세요, 프론트엔드 개발자 LuiGee입니다. 수업에 참여해주셔서
        감사합니다. Vue를 처음 접하는 분들에게 이 수업이 조금 더 도움이 된다면
        좋겠습니다.
      </p>

      <h2 className="text-xl">불필요한 복잡함</h2>
      <p>
        개인적으로 몇 번 오프라인으로 수업을 진행해볼 기회가 있었는데요.
        개인적으로 항상 느낀 아쉬움이 처음에 프로젝트를 세팅하는 방법을
        알려드려야하는 점이었습니다.
      </p>
      <p>
        물론 프로젝트 세팅은 중요합니다. 어딘가 입사해서 일을 한다고 해도 처음에
        세팅부터 시작해야 하고 스스로 뭔가 만들어보려면 더더욱 해봐야겠죠.
      </p>
      <p>
        하지만 처음 시작하는 분들에게 설정을 가르쳐드릴 때는{" "}
        <strong>일단 따라해주세요</strong>라는 말밖에는 할 수가 없습니다. 당장
        수업을 진행할 때 중요한 내용도 아니고 배우는 분에게 중요한 것은 이
        기술을 사용하는 방법이거든요.
      </p>
      <p>
        그래서 특별한 경우를 제외하고는 이 수업에서는 설정을 직접 하실 필요가
        없습니다. 수업 도중 연습문제가 나올 때는 항상 아래와 같은 샌드박스에서
        직접 진행해보실 수 있습니다.
      </p>

      <h2 className="text-xl">수업에 앞서서</h2>
      <ul>
        <li>
          <p>
            이 수업은 모바일 환경에는 적합하게 설계되어 있지 않습니다. 내용은
            확인할 수 있지만 계속 코드를 작성하는 문제가 나오기 때문에
            모바일로는 불편하실 수 있습니다.
          </p>
        </li>
      </ul>
      <ul>
        <li>
          <p>
            HTML, CSS, Javascript는 기본적인 사용법은 알고 있는 수준을 가정하고
            진행합니다. 물론, 잘 모를 법한 내용은 짧게나마 설명을 드리고 참고할
            링크도 남겨두겠습니다. 하지만 만약에 설명이 없는 부분도 이해하기
            힘드시다면 우선 다른 기초 수업을 듣고 오시는 것을 권장합니다.
          </p>
        </li>
      </ul>
      <CodeSandbox files={files} />
    </main>
  );
}
