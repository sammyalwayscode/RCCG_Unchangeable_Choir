const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className=" text-center mb-5">
      <small>@{year} RCCG Unchangeable God Choir </small>
    </div>
  );
};

export default Footer;
