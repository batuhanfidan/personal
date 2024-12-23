export default function Frames({ libraries }) {
  return (
    <div>
      {libraries.map((library, index) => (
        <div key={index} className="flex w-full max-w-[350px] flex-wrap gap-3">
          {library.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className="bg-[white] dark:bg-grimsi w-[80px] md:w-[107px] h-[35px] md:h-[43px] rounded-full flex justify-center items-center font-PlayfairDisplay font-bold text-[16px] md:text-[22px]"
            >
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
