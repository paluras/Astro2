interface Props {
  title: string;
  description: string;
  tehno: string;
  url: string;
}

const Card = ({ title, description, tehno, url }: Props) => {
  return (
    <a href={url} target="_blank" id="myElement" className={`container-card hover`}>
      <div className="container-top">
        <div className="container-left">
          <div className="title">{title}</div>
          <div className="tehnologies">{tehno}</div>
        </div>
        <svg
          className="hover theIcon"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M5.25 12.75L12.75 5.25"
            stroke="#999999"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M5.25 5.25H12.75V12.75"
            stroke="#999999"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
      <div className="description">{description}</div>
    </a>
  );
};

export default Card;
