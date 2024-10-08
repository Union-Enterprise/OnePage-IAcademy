export default function FooterSection({ title = "", texts = [""] }) {
    return (
      <div className="flex flex-col gap-5">
        <p className="font-semibold text-black text-xl">{title}</p>
        {texts.map((text, index) => (
          <p
            key={index}
            className="text-zinc-600 hover:text-mainBlue cursor-pointer w-fit"
          >
            {text}
          </p>
        ))}
      </div>
    );
  }
  