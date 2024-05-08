function Sites({ site, img }) {
  return (
    <li className={site == "facebook" ? "w-20" : "w-14"}>
      <a href={`www.${site}.com`}>
        <img src={img} alt="Logo" />
      </a>
    </li>
  );
}

export default Sites;
