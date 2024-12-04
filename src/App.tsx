import Skill from './components/Skill';
import Project from './components/Project';
import { SKILLS } from './data/skills';

const App = () => {
  return (
    <main className='flex bg-white w-[calc(100%-4rem)] h-[calc(100%-4rem)] rounded-md shadow-xl'>
      <nav className='flex flex-col gap-5 items-center w-[20%] h-full rounded-md shadow-[2px_0px_4px_rgba(0,0,0,0.1)]'>
        <div className='w-64 h-64 mt-5'>
          <img
            className='object-cover w-full h-full border-4 rounded-full border-slate-200'
            src='/src/assets/ehh.jpg'
            alt='프로필'
          />
        </div>
        <div className='flex flex-col w-full px-5 font-light'>
          <span className='w-full mb-2 text-2xl font-semibold text-black'>
            엄현호
          </span>
          <span className='w-full text-lg border-b-2 border-gray-300 text-gray-custom'>
            혁신을 가져다 줄 수 있는 개발자가 꿈입니다.
          </span>
          <div className='mt-5 text-gray-custom'>
            <span>Email: </span>
            <a href='mailto:eomhh99@gamil.com' aria-label='이메일 보내기'>
              eomhh99@gamil.com
            </a>
          </div>
          <div className='mt-5 text-gray-custom'>
            <span>Blog: </span>
            <a
              href='https://velog.io/@ehh_99'
              aria-label='기술 블로그 이동'
              target='blank'
            >
              https://velog.io/@ehh_99
            </a>
          </div>
          <div className='mt-5 text-gray-custom'>
            <span>Github: </span>
            <a
              href='https://github.com/devHyeon99'
              aria-label='깃허브 이동'
              target='blank'
            >
              https://github.com/devHyeon99
            </a>
          </div>
        </div>
      </nav>
      <main className='flex flex-col w-[80%] h-full'>
        <section className='flex justify-between relative w-full h-[30%]'>
          <div className='w-[50%]'>
            <h2 className='pt-5 mx-5 text-4xl font-semibold text-black border-b-2 border-gray-300'>
              About Me
            </h2>
            <p className='p-5 text-lg font-light leading-10 text-gray-custom'>
              안녕하세요, 저는 엄현호입니다. 어릴 때부터 개발자의 꿈을 가지고
              컴퓨터공학을 전공한 후, 개발자로 성장하고 있습니다. 저는 하나의
              분야에 국한되지 않고, 소프트웨어 분야 전반에서 전문가로 성장하고자
              하는 목표를 가지고 있습니다. 사용자에게 친화적인 UI/UX를 제공하는
              것을 좋아하며, 빠르게 변화하는 IT 환경에 발맞추기 위해 관련
              아티클을 꾸준히 읽고 있습니다.
            </p>
          </div>
          <div className='w-[50%]'>
            <h2 className='pt-5 mx-5 text-4xl font-semibold text-black border-b-2 border-gray-300'>
              Skills
            </h2>
            <div className='flex flex-wrap gap-5 p-5'>
              {SKILLS.map((skill) => (
                <Skill
                  key={skill.modalId}
                  name={skill.name}
                  modalId={skill.modalId}
                />
              ))}
            </div>
          </div>
        </section>
        <section className='w-full h-[70%]'>
          <h2 className='pt-5 mx-5 text-4xl font-semibold text-black border-b-2 border-gray-300'>
            Projects
          </h2>
          <div className='flex gap-5 flex-wrap m-5 h-[calc(427.5px-102px)]'>
            <Project></Project>
            <Project></Project>
            <Project></Project>
            <Project></Project>
          </div>
        </section>
      </main>
    </main>
  );
};

export default App;
