const Project = () => {
  return (
    <section className='flex flex-col justify-between w-[49.3%] h-[240px] p-5 border-[1px] rounded-lg border-gray-300 shadow-custom transform transition-transform duration-300 hover:-translate-y-1'>
      <div>
        <h2 className='mb-1 text-xl font-semibold text-black'>MyEmotion</h2>
        <p className='font-normal text-gray-custom'>
          OpenAI API를 활용한 일기 웹 어플리케이션 입니다. 일기를 작성하면 해당
          일기에 대한 위로와 공감을 받을 수 있고, 감정 분석을 받을 수 있습니다.
        </p>
      </div>
      <div className='flex justify-end gap-4 mt-4'>
        <a
          className='border-[1px] border-gray-500 rounded-md px-4 py-1 text-gray-500 font-normal hover:text-white hover:bg-gray-500 hover:border-gray-500 hover:transition-all'
          href='#'
          aria-label='배포 페이지 이동'
          target='blank'
        >
          Demo
        </a>
        <a
          className='border-[1px] border-gray-500 rounded-md px-4 py-1 text-gray-500 font-normal hover:text-white hover:bg-gray-500 hover:border-gray-500 hover:transition-all'
          href='#'
          aria-label='깃허브 저장소 이동'
          target='blank'
        >
          Repo
        </a>
        <button
          className='border-[1px] border-gray-500 rounded-md px-4 py-1 text-gray-500 font-normal hover:text-white hover:bg-gray-500 hover:border-gray-500 hover:transition-all'
          type='button'
        >
          more
        </button>
      </div>
    </section>
  );
};

export default Project;
